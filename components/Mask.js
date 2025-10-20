'use client'

import { useEffect, useRef, useState } from "react";
import Part1Content from "./part1";
import Part2Content from "./part2";
import Part3Content from "./part3";

export default function Mask() {
    const foregroundRef = useRef(null);

    const borderRef = useRef(null);
    const borderSvgRef = useRef(null);

    const [currentBrainImage, setCurrentBrainImage] = useState(null);

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

            // Brain image 위치 계산
            const screenCenterY = vh / 2;
            const centerThreshold = 200; // 화면 중앙에서 허용 범위 (px)

            const triggers = document.querySelectorAll('[data-brain-trigger]');
            let closestTrigger = null;
            let closestDistance = Infinity;

            triggers.forEach(trigger => {
                const rect = trigger.getBoundingClientRect();
                const elementCenterY = rect.top + (rect.height / 2);
                const distance = Math.abs(elementCenterY - screenCenterY);

                if (distance < closestDistance && distance <= centerThreshold) {
                    closestDistance = distance;
                    closestTrigger = trigger;
                }
            });

            // 상태 업데이트
            if (closestTrigger) {
                const triggerValue = closestTrigger.getAttribute('data-brain-trigger');
                setCurrentBrainImage(triggerValue);

                // 모든 화살표와 텍스트 비활성화
                document.querySelectorAll('.brain-arrow').forEach(arrow => {
                    arrow.classList.remove('active');
                });
                document.querySelectorAll('.brain-text').forEach(text => {
                    text.classList.remove('active');
                });

                // 현재 화살표와 텍스트 활성화
                const currentArrow = document.querySelector(`[data-arrow-for="${triggerValue}"]`);
                const currentText = document.querySelector(`[data-text-for="${triggerValue}"]`);
                if (currentArrow) {
                    currentArrow.classList.add('active');
                }
                if (currentText) {
                    currentText.classList.add('active');
                }
            } else {
                setCurrentBrainImage(null);
                // 모든 화살표와 텍스트 비활성화
                document.querySelectorAll('.brain-arrow').forEach(arrow => {
                    arrow.classList.remove('active');
                });
                document.querySelectorAll('.brain-text').forEach(text => {
                    text.classList.remove('active');
                });
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

    // spiralText Intersection Observer
    useEffect(() => {
        const spiralObserverOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // 요소의 10%가 보이면 트리거
        };

        const spiralObserverCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // visible 클래스 추가
                    entry.target.classList.add('visible');
                    // 한번 나타난 후에는 관찰 중지 (다시 사라지지 않도록)
                    observer.unobserve(entry.target);
                }
            });
        };

        const spiralObserver = new IntersectionObserver(spiralObserverCallback, spiralObserverOptions);

        // spiralText 요소들 관찰 시작
        const setupSpiralObserver = () => {
            const spiralTexts = document.querySelectorAll('.spiralText');
            spiralTexts.forEach(text => {
                spiralObserver.observe(text);
            });
        };

        // 약간의 딜레이를 두고 실행 (DOM이 완전히 렌더링되도록)
        const timeoutId = setTimeout(setupSpiralObserver, 100);

        return () => {
            clearTimeout(timeoutId);
            spiralObserver.disconnect();
        };
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
                            <Part1Content />
                            <Part2Content />
                            <Part3Content />
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
            {currentBrainImage && (
                <div
                    className="brain-fixed-image"
                    style={{
                        backgroundImage: `url('/${currentBrainImage}.png')`
                    }}
                />
            )}
        </div >
    );
}
