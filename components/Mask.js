'use client'

import { useEffect, useRef } from "react";
import Part1Content from "./part1";
import Part2Content from "./part2";
import Part3Content from "./part3";

export default function Mask() {
    const foregroundRef = useRef(null);
    const maskRef = useRef(null);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const vh = window.innerHeight;
        const vw = window.innerWidth;
        const littleMax = vh / 40;
        const bigMax = vh/20;
        const idleTop = vh / 10;

        let currentTop = idleTop;
        let currentBottom = idleTop;

        let rafId;

        function update() {
            const currentScrollY = window.scrollY;
            const deltaScroll = currentScrollY - lastScrollY;
            lastScrollY = currentScrollY;
            
            const threshold = 0.1;
            const scrollThreshold = 0.5;

            // 스크롤 다운: 아래쪽만 아주 살짝 줄어듦 (저항감)
            if (deltaScroll > scrollThreshold) {
                const targetTop = Math.max(currentTop - deltaScroll);
                const targetBottom = Math.max(currentBottom - deltaScroll );
                currentTop += (targetTop - currentTop) * threshold;
                currentBottom += (targetBottom - currentBottom) * threshold;
            }
            // 스크롤 업: 위쪽만 아주 살짝 줄어듦 (저항감)
            else if (deltaScroll < -scrollThreshold) {
                const targetTop = Math.max(currentTop - deltaScroll );
                const targetBottom = Math.max(currentBottom - deltaScroll);
                currentTop += (targetTop - currentTop) * threshold;
                currentBottom += (targetBottom - currentBottom) * threshold;
            }
            // // 스크롤 멈춤: 원래대로 복귀
            else {
                currentTop += (idleTop - currentTop) * threshold;
                currentBottom += (idleTop - currentBottom) * threshold;
            }

            const topPx = currentTop;

            // 콘텐츠 중앙 정렬을 위한 좌우 패딩 계산
            const contentMaxWidth = 800;
            const contentWidth = Math.min(contentMaxWidth, vw);
            const leftPx = (vw - contentWidth) / 2;

            const maskWidth = contentWidth;
            const maskHeight = vh - (idleTop*2 + Math.abs(deltaScroll));

            if (foregroundRef.current) {
                foregroundRef.current.style.transform = `translateY(${-window.scrollY - topPx}px)`;
            }

            if (maskRef.current) {
                maskRef.current.style.top = `${topPx}px`;
                maskRef.current.style.left = `${leftPx}px`;
                maskRef.current.style.width = `${maskWidth}px`;
                maskRef.current.style.height = `${maskHeight}px`;
            }

            rafId = requestAnimationFrame(update);

        }

        rafId = requestAnimationFrame(update);

        setTimeout(() => {
            if (foregroundRef.current && maskRef.current) {
                foregroundRef.current.style.transition = 'opacity 1s';
                maskRef.current.style.transition = 'opacity 1s';
                foregroundRef.current.style.opacity = 1;
                maskRef.current.style.opacity = 1;
            }
        }, 1000); // 1초 뒤 실행

        setTimeout(() => {
            if (foregroundRef.current && maskRef.current) {
                foregroundRef.current.style.transition = '';
                maskRef.current.style.transition = '';
            }
        }, 2000);

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
        }

    }, []);

    return (
        <div
            ref={maskRef}
            className="
            fixed
            overflow-hidden
        "
            style={{
                border: '1px solid white',
            }}
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
        </div >
    );
}
