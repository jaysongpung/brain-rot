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
        const idleTop = vh / 10;
        const threshold = 0.1;
        const scrollThreshold = 5;
        const contentMaxWidth = 1200;
        const contentWidth = Math.min(contentMaxWidth, vw);
        const leftPx = (vw - contentWidth) / 2;
        const idleTop2 = idleTop * 2;

        let currentTop = idleTop;
        let rafId;

        // 초기 고정값 설정
        if (maskRef.current) {
            maskRef.current.style.left = `${leftPx}px`;
            maskRef.current.style.width = `${contentWidth}px`;
        }

        function update() {
            const currentScrollY = window.scrollY;
            const deltaScroll = currentScrollY - lastScrollY;
            lastScrollY = currentScrollY;

            // 스크롤 다운/업: 저항감
            if (Math.abs(deltaScroll) > scrollThreshold) {
                const targetTop = Math.max(currentTop - deltaScroll);
                currentTop += (targetTop - currentTop) * threshold;
            }
            // 스크롤 멈춤: 원래대로 복귀
            else {
                currentTop += (idleTop - currentTop) * threshold;
            }

            const maskHeight = vh - (idleTop2 + Math.abs(deltaScroll));

            if (foregroundRef.current) {
                foregroundRef.current.style.transform = `translateY(${-currentScrollY - currentTop}px)`;
            }

            if (maskRef.current) {
                maskRef.current.style.top = `${currentTop}px`;
                maskRef.current.style.height = `${maskHeight}px`;
            }

            rafId = requestAnimationFrame(update);
        }

        update();

        setTimeout(() => {
            if (foregroundRef.current && maskRef.current) {
                foregroundRef.current.style.transition = 'opacity 1s';
                maskRef.current.style.transition = 'opacity 1s';
                foregroundRef.current.style.opacity = 1;
                maskRef.current.style.opacity = 1;
            }
        }, 1000);

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
