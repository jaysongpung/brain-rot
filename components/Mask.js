'use client'

import { useEffect, useRef } from "react";

export default function Mask() {
    const maskRectRef = useRef(null);
    const borderRectRef = useRef(null);
    const foregroundRef = useRef(null);
    const instaRef = useRef(null);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let lastTime = performance.now();

        const topMin = 5, topMax = 15;
        const bottomMin = 5, bottomMax = 70;
        let currentTop = topMax, currentBottom = bottomMin;
        let rafId;

        function update() {
            const now = performance.now();
            const deltaTime = (now - lastTime) / 1000;
            lastTime = now;

            const currentScrollY = window.scrollY;
            const deltaScroll = currentScrollY - lastScrollY;
            lastScrollY = currentScrollY;

            const speed = Math.abs(deltaScroll) / deltaTime;
            const normalized = Math.min(speed / 1500, 1);

            const targetTop = topMax - (topMax - topMin) * normalized;
            const targetBottom = bottomMin + (bottomMax - bottomMin) * normalized;

            currentTop += (targetTop - currentTop) * 0.1;
            currentBottom += (targetBottom - currentBottom) * 0.1;

            const vw = window.innerWidth || 1;
            const vh = window.innerHeight || 1;

            const leftPx = (vw * 3) / 100;
            const rightPx = (vw * 3) / 100;
            const topPx = (vh * currentTop) / 100;
            const bottomPx = (vh * currentBottom) / 100;

            const rectX = leftPx;
            const rectY = topPx;
            const rectW = vw - leftPx - rightPx;
            const rectH = vh - topPx - bottomPx;

            if (maskRectRef.current) {
                maskRectRef.current.setAttribute("x", rectX);
                maskRectRef.current.setAttribute("y", rectY);
                maskRectRef.current.setAttribute("width", rectW);
                maskRectRef.current.setAttribute("height", rectH);
            }

            if (borderRectRef.current) {
                borderRectRef.current.setAttribute("x", rectX);
                borderRectRef.current.setAttribute("y", rectY);
                borderRectRef.current.setAttribute("width", rectW);
                borderRectRef.current.setAttribute("height", rectH);
            }

            if (foregroundRef.current) {
                foregroundRef.current.style.transform = `translateY(${-window.scrollY}px)`;
            }

            rafId = requestAnimationFrame(update);

        }

        rafId = requestAnimationFrame(update);

        const observer = new IntersectionObserver(
            ([entry], obs) => {
                if (entry.isIntersecting) {

                    setTimeout(() => {
                        instaRef.current.style.opacity = 1;
                        instaRef.current.play();
                    }, 1000);

                    obs.unobserve(entry.target);
                }
            },
            { threshold: 0.5 }
        )

        if (instaRef.current) {
            observer.observe(instaRef.current);
        }

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            if (instaRef.current) observer.unobserve(instaRef.current);
        }

    }, []);

    return (
        <div>
            <svg width="0" height="0">
                <mask id="rectMask">
                    <rect ref={maskRectRef} id="maskRect" x="0" y="0" width="100%" height="100%" fill="white" />
                </mask>
            </svg>
            <div
                className="
                maskedArea
                fixed
                top-0
                left-0
                w-full
                h-screen
                overflow-hidden
            "
                style={{
                    mask: 'url(#rectMask)',
                    WebkitMask: 'url(#rectMask)'
                }}
            >
                <div ref={foregroundRef} id="foreground">
                    <div className="container">
                        <div id="fgKeyVisual">
                            <div id="fgTitleContainer">
                                <div id="fgTitle"></div>
                                <div id="fgText">
                                    브레인 롯은 뇌가 손상되거나 썩은 상태란 뜻으로, 사소하거나 불필요한 정보를 과잉 소비한 결과, 개인의 정신적 지적 상태가 퇴보하는 것을 의미한다. 옥스퍼드대 출판부는 2024년 올해의 단어로 ‘브레인 롯’을 선정했다.
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="part">Part I</div>
                            <div className="d30"></div>
                            <div className="paragraph">당신이 소셜미디어에 접속했을 때, 사용자 인터페이스(UI) 뒤로 어떤 일이 생기는지 알고 계시나요? 소셜미디어 추천 시스템의 주요 특징을 살펴보세요.</div>
                            <div className="d30"></div>
                            <div className="media instagram" id="insta_video">
                                <div id="instaContainer">
                                    <div id="insta_line"></div>
                                    <video id="insta_vidvid" ref={instaRef} src="/instagram.mp4" muted playsInline></video>
                                    <div className="hideline"></div>
                                    <div className="hideline" id="hdRight"></div>
                                </div>
                            </div>
                            <div className="d30"></div>
                            <div className="paragraph">당신에게 어떤 콘텐츠를 추천할지, 소셜 미디어는 빠르게 점수를 계산합니다. 점수를 매길 때, 소셜미디어는 당신과 취향이 비슷한 다른 사용자들이 클릭했던 콘텐츠를 참고하기도 합니다.</div>
                            <div className="d30"></div>
                            <div className="paragraph">당신이 클릭했던 콘텐츠는 모두 당신을 더 잘 파악하는 데 활용됩니다. 추천 알고리즘이 고도화되는 과정이죠. 만약 당신이 고양이 콘텐츠를 즐겨보는 사람이라고 가정해 보겠습니다. 당신이 고양이 영상C을 클릭해 봤다면, 고양이 영상C를 본 다른 사용자들이 소비한 고양이 영상A와 고양이 영상T를 당신에게 추천하죠.</div>
                            <div className="d30"></div>
                            <div className="rec">
                                <div className="recImg media" id="recImgFg"></div>
                            </div>
                        </div>

                    </div>
                </div>
                <svg
                    className="
                    borderSvg
                "
                >
                    <rect ref={borderRectRef} x="0" y="0" width="100%" height="100%" fill="none" stroke="white" strokeWidth="2" />
                </svg>
            </div>
        </div>
    );
}
