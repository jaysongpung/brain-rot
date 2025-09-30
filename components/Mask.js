'use client'

import { useEffect, useRef } from "react";

export default function Mask() {
    const foregroundRef = useRef(null);
    const instaRef = useRef(null);
    const recRef = useRef(null);

    const borderRef = useRef(null);
    const borderSvgRef = useRef(null);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let lastTime = performance.now();

        const topMin = 3, topMax = 15;
        const bottomMin = 10, bottomMax = 70;
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

            if (foregroundRef.current) {
                foregroundRef.current.style.transform = `translateY(${-window.scrollY}px)`;
            }

            if (borderRef.current) {
                borderRef.current.style.clipPath = `inset(${topPx}px ${rightPx}px ${bottomPx}px ${leftPx}px)`;
            }

            if (borderSvgRef.current) {
                borderSvgRef.current.setAttribute("x", leftPx);
                borderSvgRef.current.setAttribute("y", topPx);
                borderSvgRef.current.setAttribute("width", vw - leftPx - rightPx);
                borderSvgRef.current.setAttribute("height", vh - topPx - bottomPx);
            }

            rafId = requestAnimationFrame(update);

        }

        rafId = requestAnimationFrame(update);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const video = entry.target;

                // 같은 wrapper 안에서 .fade-line 모두 찾기
                const wrapper = video.closest("div");
                if (wrapper) {
                    wrapper.querySelectorAll(".fadeLine").forEach(line => {
                        line.style.transition = "opacity 1s ease";
                        line.style.opacity = 0.1;
                    });
                }

                // 비디오 재생
                video.muted = true;
                video.play().catch(() => {
                    const once = () => {
                        video.play();
                        video.removeEventListener("pointerdown", once);
                    };
                    video.addEventListener("pointerdown", once, { once: true });
                });

                observer.unobserve(video);
            });
        }, { threshold: 0.3 });


        if (instaRef.current) observer.observe(instaRef.current)
        if (recRef.current) observer.observe(recRef.current);

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            if (instaRef.current) observer.unobserve(instaRef.current);
            if (recRef.current) observer.unobserve(recRef.current);
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
                                    <video id="insta_vidvid" ref={instaRef} src="/instagram.mp4" muted playsInline autoPlay loop preload="metadata"></video>
                                    <div className="fadeLine" id="insta_line"></div>
                                </div>
                            </div>
                            <div className="d30"></div>
                            <div className="paragraph">당신에게 어떤 콘텐츠를 추천할지, 소셜 미디어는 빠르게 점수를 계산합니다. 점수를 매길 때, 소셜미디어는 당신과 취향이 비슷한 다른 사용자들이 클릭했던 콘텐츠를 참고하기도 합니다.</div>
                            <div className="d30"></div>
                            <div className="paragraph">당신이 클릭했던 콘텐츠는 모두 당신을 더 잘 파악하는 데 활용됩니다. 추천 알고리즘이 고도화되는 과정이죠. 만약 당신이 고양이 콘텐츠를 즐겨보는 사람이라고 가정해 보겠습니다. 당신이 고양이 영상C을 클릭해 봤다면, 고양이 영상C를 본 다른 사용자들이 소비한 고양이 영상A와 고양이 영상T를 당신에게 추천하죠.</div>
                            <div className="d30"></div>
                            <div className="rec">
                                <div className="recVidWrap">
                                    <video id="rec_vid" ref={recRef} src="/recommendation.mp4" muted playsInline autoPlay loop preload="metadata"></video>
                                    <div className="recImg fadeLine" id="recImgFg"></div>
                                </div>
                            </div>
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
