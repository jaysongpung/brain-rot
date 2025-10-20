'use client'

import { useEffect, useRef } from "react";
import Part1Content from "./part1";
import Part2Content from "./part2";
import Part3Content from "./part3";

export default function Mask() {
    const foregroundRef = useRef(null);
    
    const borderRef = useRef(null);
    const borderSvgRef = useRef(null);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const topMin = 3, topMax = 15;
        const bottomMin = 10, bottomMax = 18;
        let currentTop = topMax, currentBottom = bottomMin;

        let rafId;

        function update() {
            const currentScrollY = window.scrollY;
            const deltaScroll = currentScrollY - lastScrollY;
            lastScrollY = currentScrollY;
            const delta = 100;
            const threshold = 0.1;

            // 스크롤 다운: 아래쪽만 아주 살짝 줄어듦 (저항감)
            if (deltaScroll > 0) {
                const targetBottom = bottomMin + delta;
                currentBottom += (targetBottom - currentBottom) * threshold / 5;

                const targetTop = topMax - delta;
                currentTop += (targetTop - currentTop) * threshold;
            }
            // 스크롤 업: 위쪽만 아주 살짝 줄어듦 (저항감)
            else if (deltaScroll < 0) {
                const targetBottom = bottomMin - delta;
                currentBottom += (targetBottom - currentBottom) * threshold;

                const targetTop = topMax + delta;
                currentTop += (targetTop - currentTop) * threshold / 5;
            }
            // 스크롤 멈춤: 원래대로 복귀
            else {
                currentTop += (topMax - currentTop) * threshold;
                currentBottom += (bottomMin - currentBottom) * threshold;
            }

            const vw = window.visualViewport?.width || window.innerWidth;
            const vh = window.visualViewport?.height || window.innerHeight;

            const leftPx = (vw) / 100;
            const rightPx = (vw) / 100;
            const topPx = (vh * 14) / 100 + currentTop;
            const bottomPx = (vh * 14) / 100 + currentBottom;

            if (foregroundRef.current) {
                foregroundRef.current.style.transform = `translateY(${-window.scrollY}px)`;
            }

            if (borderRef.current) {
                borderRef.current.style.clipPath = `inset(${topPx}px ${rightPx}px ${bottomPx}px ${leftPx}px)`;
            }

            if (borderSvgRef.current) {
                borderSvgRef.current.setAttribute("x", leftPx);
                borderSvgRef.current.setAttribute("y", topPx);
                borderSvgRef.current.setAttribute("width", vw - (leftPx + rightPx) * 1);
                borderSvgRef.current.setAttribute("height", vh - topPx - bottomPx);
            }

            rafId = requestAnimationFrame(update);

        }

        rafId = requestAnimationFrame(update);

        setTimeout(() => {
            if (foregroundRef.current) {
                foregroundRef.current.style.transition = '1s';
                borderSvgRef.current.style.transition = '1s';
                foregroundRef.current.style.opacity = 1;
                borderSvgRef.current.style.opacity = 1;
            }
        }, 1000); // 1초 뒤 실행

        setTimeout(() => {
            if (foregroundRef.current) {
                foregroundRef.current.style.transition = '0s';
                borderSvgRef.current.style.transition = '0s';
            }
        }, 2000);

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
        }

    }, []);

    return (
        <div>
            <div
                ref={borderRef}
                className="
                fixed
                top-0
                left-0
                w-full
                h-screen
                overflow-hidden
            "
            >
            
                <div ref={foregroundRef} id="foreground">
                    <div className="container">
                        <div id="fgKeyVisual">
                            <div id="fgTitleContainer">
                                <div id="fgTitle"></div>
                                <div id="fgText">
                                    브레인 롯은 뇌가 손상되거나 썩은 상태란 뜻으로, 사소하거나 불필요한 정보를 과잉 소비한 결과, 개인의 정신적 지적 상태가 퇴보하는 것을 의미한다. 옥스퍼드대 출판부는 2024년 올해의 단어로 &apos;브레인 롯&apos;을 선정했다.
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <Part1Content/>
                            <Part2Content/>
                            <Part3Content/>
                        </div>
                    </div>
                </div>
            </div>
            <svg className="pointer-events-none fixed top-0 left-0 w-full h-screen">
                <rect
                    ref={borderSvgRef}
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                />
            </svg>
        </div >
    );
}
