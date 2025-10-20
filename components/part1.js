import { useEffect, useRef } from "react";

export default function Part1Content (){
    const instaRef = useRef(null);
    const recRef = useRef(null);
    const twitterRef = useRef(null);
    

    useEffect(() => {


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
        if (twitterRef.current) observer.observe(twitterRef.current);

    return()=>{
        if (instaRef.current) observer.unobserve(instaRef.current);
        if (recRef.current) observer.unobserve(recRef.current);
        if (twitterRef.current) observer.unobserve(twitterRef.current);
    }

    }, []);

    return(
        <>
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
            <div className="d30"></div>
            <div className="paragraph">사용자와 소셜미디어 간 상호작용 횟수가 늘어남에 따라, 추천 알고리즘이 이를 학습해 사용자의 취향을 더 잘 포착할 수 있습니다.</div>
            <div className="d30"></div>
            <div className="paragraph">이원화된 추천 알고리즘은 당신의 소셜미디어 이용 시간을 늘리기 위한 전략입니다.</div>
            <div className="d30"></div>
            <div className="twitter">
                <div id="twitterContainer">
                    <video id="twitter_vid" ref={twitterRef} src="/twitter.mp4" muted playsInline autoPlay loop preload="metadata"></video>
                    <div className="fadeLine" id="twitterLine"></div>
                </div>
            </div>
            <div className="d30"></div>
            <div className="d30"></div>

            <div className="paragraph">
                <span className="para_subtitle">추천 알고리즘</span>
                <br />
                <span className="subtitleLine">----</span>
                <br />
                수천, 수만의 콘텐츠 중 당신이 가장 좋아할만한 콘텐츠를 제안하는 기술.
                비슷한 사용자는 비슷한 것을 좋아한다는 가정을 기반으로 한 추천 방식과 사용자가 선호하는 콘텐츠의 항목을 분석해 이와 유사한 콘텐츠를 추천하는 방식 등이 쓰인다.
                2010년대 중반 이후에는 딥러닝이 본격 도입됐다. 수억 건의 데이터와 수천만 개의 파라미터를 활용한 추천 시스템이 실제 서비스에서 적용되고 있다.
            </div>
            <div className="d30"></div>
            <div className="logos" id="logo_blur_insta">
                <div>인스타그램의 추천 알고리즘</div>
                <div className="logo_subtitle">랭킹 퍼널</div>
            </div>
            <div className="paragraph">
                피드, 스토리, 릴스, 탐색 탭 등 모든 콘텐츠 영역에서 딥러닝 기반 추천 알고리즘이 사용된다. 특히 탐색 탭은 세계 수억 명의 사용자를 대상으로 한 대규모 추천 시스템이다. 랭킹 퍼널이라 불리는 다단계 구조의 콘텐츠 추천이 이곳이서 이루어진다. 랭킹 퍼널은 경량 모델로 먼저 추천 후보군을 추린 뒤, 정교한 딥러닝 모델로 추천 콘텐츠의 상호작용 확률을 예측한다. 이때 사용자의 좋아요, 공유, 댓글, 무반응 등 다양한 반응이 통합적으로 고려된다.
            </div>
            <div className="d30"></div>
            <div className="logos" id="logo_blur_twitter">
                <div>X의 추천 알고리즘</div>
                <div className="logo_subtitle">개인화된 타임라인</div>
            </div>
            <div className="paragraph">
                X(구 트위터)는 개인화된 타임라인을 사용자에게 제공한다. 추천 트윗은 팔로우한 계정뿐만 아니라, 팔로우하지 않은 계정에서도 선별한다. 팔로우 계정 콘텐츠는 &apos;RealGraph&apos;라는 모델이 사용자의 상호작용 이력을 바탕으로 관련성을 점수화해 추천한다. 팔로우 외부 콘텐츠는 소셜 그래프 탐색이나 SimClusters 모델을 활용해 비슷한 관심사를 가진 다른 사용자가 주목한 콘텐츠를 추천 후보로 삼는다. 이후 딥러닝 모델로 후보를 점수화해 사용자의 리트윗, 좋아요 등 반응 확률을 예측한다.
            </div>
            <div className="d30"></div>
            <div className="logos" id="logo_blur_youtube">
                <div>유튜브의 추천 알고리즘</div>
                <div className="logo_subtitle">강력한 딥러닝</div>
            </div>
            <div className="paragraph">
                유튜브는 사용자의 전체 시청 시간을 최대화하는 것을 목표로 추천 시스템을 설계했다. 사용자의 시청 이력, 검색 기록, 클릭 패턴 등 방대한 데이터를 바탕으로 추천 콘텐츠 클릭 확률과 예상 시청 시간을 고려해 추천 콘텐츠를 배치한다. 이에 강력한 딥러닝 시스템이 필수다. 또한 &apos;자동 재생&apos;과 &apos;다음 영상 추천&apos; 기능으로 직전 영상의 주제나 유형을 분석해 몰입도 높은 영상을 이어붙여 사용자의 능동성을 최소화한다.
            </div>
            <div className="d30"></div>
            <div className="d30"></div>
            <div className="d30"></div>
            <div className="d30"></div>
            <div className="d30"></div>
            <div className="d30"></div>
        </>
    )
}