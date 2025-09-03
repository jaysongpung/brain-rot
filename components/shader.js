"use client"
import { useEffect, useRef, useState } from "react"

export default function ShaderToyField({
  className = "", // optional tailwind or custom class
  paused = false,
  dprMax = 2,
  background = "#000000",
}) {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)
  const startTimeRef = useRef(0)
  const lastTimeRef = useRef(0)
  const glRef = useRef(null)
  const programRef = useRef(null)
  const uniRef = useRef({})
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Try to attach to parent size; if none, fill viewport.
    const parent = canvas.parentElement || document.body
    const ro = new ResizeObserver(() => resizeCanvas(canvas, parent, dprMax))
    ro.observe(parent)

    // Init GL
    const gl = canvas.getContext("webgl", { antialias: false, preserveDrawingBuffer: false })
    if (!gl) {
      console.error("WebGL not supported")
      return () => ro.disconnect()
    }
    glRef.current = gl

    // Build program
    const vs = gl.createShader(gl.VERTEX_SHADER)
    gl.shaderSource(vs, VERT_SRC)
    gl.compileShader(vs)
    if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
      console.error("Vertex shader error:\n" + gl.getShaderInfoLog(vs))
      gl.deleteShader(vs)
      return () => ro.disconnect()
    }

    const fs = gl.createShader(gl.FRAGMENT_SHADER)
    gl.shaderSource(fs, FRAG_SRC)
    gl.compileShader(fs)
    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
      console.error("Fragment shader error:\n" + gl.getShaderInfoLog(fs))
      gl.deleteShader(vs)
      gl.deleteShader(fs)
      return () => ro.disconnect()
    }

    const program = gl.createProgram()
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:\n" + gl.getProgramInfoLog(program))
      gl.deleteShader(vs)
      gl.deleteShader(fs)
      gl.deleteProgram(program)
      return () => ro.disconnect()
    }

    gl.deleteShader(vs)
    gl.deleteShader(fs)

    programRef.current = program
    gl.useProgram(program)

    // Fullscreen triangle (higher perf than quad with index)
    const posLoc = gl.getAttribLocation(program, "a_position")
    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    // 3 vertices that cover the screen
    const verts = new Float32Array([
      -1, -1,
      3, -1,
      -1, 3,
    ])
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW)
    gl.enableVertexAttribArray(posLoc)
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

    // Uniform locations
    uniRef.current.iResolution = gl.getUniformLocation(program, "iResolution")
    uniRef.current.iTime = gl.getUniformLocation(program, "iTime")

    // Initial size
    resizeCanvas(canvas, parent, dprMax)

    // Animation
    startTimeRef.current = performance.now()
    lastTimeRef.current = startTimeRef.current
    setReady(true)

    const loop = () => {
      if (!glRef.current) return
      const now = performance.now()
      const elapsed = (now - startTimeRef.current) / 1000

      // Clear
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)
      const [r, g, b] = hexToRgb(background)
      gl.clearColor(r / 255, g / 255, b / 255, 1)
      gl.clear(gl.COLOR_BUFFER_BIT)

      // Uniforms
      gl.useProgram(programRef.current)
      gl.uniform3f(
        uniRef.current.iResolution,
        gl.drawingBufferWidth,
        gl.drawingBufferHeight,
        1.0
      )
      gl.uniform1f(uniRef.current.iTime, paused ? lastTimeRef.current / 1000 : elapsed)

      // Draw
      gl.drawArrays(gl.TRIANGLES, 0, 3)

      if (paused) {
        // Freeze time for subsequent frames
        lastTimeRef.current = lastTimeRef.current
      } else {
        lastTimeRef.current = now - startTimeRef.current
      }

      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)

    return () => {
      ro.disconnect()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (gl && programRef.current) {
        gl.deleteProgram(programRef.current)
      }
      glRef.current = null
      programRef.current = null
    }
  }, [dprMax, paused, background])

  return (
    <div className={`relative w-full h-full min-h-[300px] ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  )
}

function resizeCanvas(canvas, parent, dprMax) {
  const dpr = Math.min(window.devicePixelRatio || 1, dprMax)
  const rect = parent.getBoundingClientRect()
  const width = Math.max(1, Math.floor((rect.width || window.innerWidth) * dpr))
  const height = Math.max(1, Math.floor((rect.height || window.innerHeight) * dpr))
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width
    canvas.height = height
    canvas.style.width = (rect.width || window.innerWidth) + "px"
    canvas.style.height = (rect.height || window.innerHeight) + "px"
  }
}

function hexToRgb(hex) {
  const h = hex.replace('#','')
  const bigint = parseInt(h.length === 3 ? h.split('').map(c=>c+c).join('') : h, 16)
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255]
}

// ===== Shaders =====
const VERT_SRC = `
attribute vec2 a_position;
void main(){
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`

// The fragment shader wraps your ShaderToy code. mainImage() is called from main().
const FRAG_SRC = `
precision highp float;

uniform vec3 iResolution; // (width, height, 1.0)
uniform float iTime;      // seconds since start

// =========================
// BEGIN ShaderToy COMMON
// =========================
#define PI 3.14159265359

// Hash without Sine - David Hoskins (CC BY-SA 4.0)
#define barWidth 0.002
#define slideValY 0.5
#define slideValX 0.5
#define ITERATIONS 4

#define HASHSCALE1 .1031
#define HASHSCALE3 vec3(.1031, .1030, .0973)
#define HASHSCALE4 vec4(.1031, .1030, .0973, .1099)

float hash11(float p){ vec3 p3 = fract(vec3(p) * HASHSCALE1); p3 += dot(p3, p3.yzx + 19.19); return fract((p3.x + p3.y) * p3.z); }
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * HASHSCALE1); p3 += dot(p3, p3.yzx + 19.19); return fract((p3.x + p3.y) * p3.z); }
float hash13(vec3 p3){ p3 = fract(p3 * HASHSCALE1); p3 += dot(p3, p3.yzx + 19.19); return fract((p3.x + p3.y) * p3.z); }
vec2 hash21(float p){ vec3 p3 = fract(vec3(p) * HASHSCALE3); p3 += dot(p3, p3.yzx + 19.19); return fract((p3.xx+p3.yz)*p3.zy); }
vec2 hash22(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * HASHSCALE3); p3 += dot(p3, p3.yzx+19.19); return fract((p3.xx+p3.yz)*p3.zy); }
vec2 hash23(vec3 p3){ p3 = fract(p3 * HASHSCALE3); p3 += dot(p3, p3.yzx+19.19); return fract((p3.xx+p3.yz)*p3.zy); }
vec3 hash31(float p){ vec3 p3 = fract(vec3(p) * HASHSCALE3); p3 += dot(p3, p3.yzx+19.19); return fract((p3.xxy+p3.yzz)*p3.zyx); }
vec3 hash32(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * HASHSCALE3); p3 += dot(p3, p3.yxz+19.19); return fract((p3.xxy+p3.yzz)*p3.zyx); }
vec3 hash33(vec3 p3){ p3 = fract(p3 * HASHSCALE3); p3 += dot(p3, p3.yxz+19.19); return fract((p3.xxy + p3.yxx)*p3.zyx); }
vec4 hash41(float p){ vec4 p4 = fract(vec4(p) * HASHSCALE4); p4 += dot(p4, p4.wzxy+19.19); return fract((p4.xxyz+p4.yzzw)*p4.zywx); }
vec4 hash42(vec2 p){ vec4 p4 = fract(vec4(p.xyxy) * HASHSCALE4); p4 += dot(p4, p4.wzxy+19.19); return fract((p4.xxyz+p4.yzzw)*p4.zywx); }
vec4 hash43(vec3 p){ vec4 p4 = fract(vec4(p.xyzx) * HASHSCALE4); p4 += dot(p4, p4.wzxy+19.19); return fract((p4.xxyz+p4.yzzw)*p4.zywx); }
vec4 hash44(vec4 p4){ p4 = fract(p4 * HASHSCALE4); p4 += dot(p4, p4.wzxy+19.19); return fract((p4.xxyz+p4.yzzw)*p4.zywx); }

// =========================
// BEGIN ShaderToy IMAGE
// =========================
#define time iTime

const float arrow_density = 4.5;
const float arrow_length = .45;

const int iterationTime1 = 20;
const int iterationTime2 = 20;
const int vector_field_mode = 0;
const float scale = 6.;

const float velocity_x = 0.1;
const float velocity_y = 0.2;

const float mode_2_speed = 2.5;
const float mode_1_detail = 200.;
const float mode_1_twist = 50.;

const bool isArraw = true;

const vec3 luma = vec3(0.2126, 0.7152, 0.0722);

float f(in vec2 p){
  return sin(p.x+sin(p.y+time*velocity_x)) * sin(p.y*p.x*0.1+time*velocity_y);
}

struct Field { vec2 vel; vec2 pos; };

Field fieldfn(in vec2 p,in int mode){
  Field field;
  if(mode == 0){
    vec2 ep = vec2(0.05,0.);
    vec2 rz= vec2(0);
    for( int i=0; i<iterationTime1; i++ ){
      float t0 = f(p);
      float t1 = f(p + ep.xy);
      float t2 = f(p + ep.yx);
      vec2 g = vec2((t1-t0), (t2-t0))/ep.xx;
      vec2 t = vec2(-g.y,g.x);
      p += (mode_1_twist*0.01)*t + g*(1./mode_1_detail);
      p.x = p.x + sin( time*mode_2_speed/10.)/10.;
      p.y = p.y + cos(time*mode_2_speed/10.)/10.;
      rz= g; 
    }
    field.vel = rz; return field;
  }
  if(mode == 1){
    vec2 ep = vec2(0.05,0.);
    vec2 rz= vec2(0);
    for( int i=0; i<iterationTime1; i++ ){
      float t0 = f(p);
      float t1 = f(p + ep.xy);
      float t2 = f(p + ep.yx);
      vec2 g = vec2((t1-t0), (t2-t0))/ep.xx;
      vec2 t = vec2(-g.y,g.x);
      p += (mode_1_twist*0.01)*t + g*(1./mode_1_detail);
      p.x = p.x + sin( time*mode_2_speed/10.)/10.;
      p.y = p.y + cos(time*mode_2_speed/10.)/10.;
      rz= g;
    }
    field.vel = rz;
    for(int i=1; i<iterationTime2; i++){
      p.x+=0.3/float(i)*sin(float(i)*3.*p.y+time*mode_2_speed) + 0.5;
      p.y+=0.3/float(i)*cos(float(i)*3.*p.x + time*mode_2_speed) + 0.5;
    }
    field.pos = p; return field;
  }
  return field;
}

float segm(in vec2 p, in vec2 a, in vec2 b){
  vec2 pa = p - a; vec2 ba = b - a; float h = clamp(dot(pa,ba)/dot(ba,ba), 0., 1.);
  return length(pa - ba*h)*20.*arrow_density;
}

float fieldviz(in vec2 p,in int mode){
  vec2 ip = floor(p*arrow_density)/arrow_density + .5/arrow_density;   
  vec2 t = fieldfn(ip,mode).vel;
  float m = min(0.1,pow(length(t),0.5)*(arrow_length/arrow_density));
  vec2 b = normalize(t)*m;
  float rz = segm(p, ip, ip+b);
  vec2 prp = (vec2(-b.y,b.x));
  rz = min(rz,segm(p, ip+b, ip+b*0.65+prp*0.3));
  return clamp(min(rz,segm(p, ip+b, ip+b*0.65-prp*0.3)),0.,1.);
}

vec3 getRGB(in Field fld,in int mode){
  if(mode == 0){ vec2 p = fld.vel; return vec3(p * 0.5 + 0.5, 1.5); }
  if(mode == 1){ vec2 p = fld.pos; float r=cos(p.x+p.y+1.)*.5+.5; float g=sin(p.x+p.y+1.)*.5+.5; float b=(sin(p.x+p.y)+cos(p.x+p.y))*.3+.5; return vec3(r,g,b);} 
  return vec3(0.0);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord ){
  vec2 p = fragCoord.xy / iResolution.xy-0.5 ;
  p.x *= iResolution.x/iResolution.y;
  p *= scale;
  vec2 uv = fragCoord.xy / iResolution.xy;
  vec3 col; float fviz;
  int vector_mode = 0;
  Field fld = fieldfn(p,vector_mode);
  col = getRGB(fld,vector_mode) * 0.85;    
  fragColor = vec4(col,1.0);
}

void main(){
  vec4 color; mainImage(color, gl_FragCoord.xy); gl_FragColor = color;
}
`
