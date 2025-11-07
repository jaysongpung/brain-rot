import { useEffect, useRef } from "react";

export default function Part1Content() {
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

        return () => {
            if (instaRef.current) observer.unobserve(instaRef.current);
            if (recRef.current) observer.unobserve(recRef.current);
            if (twitterRef.current) observer.unobserve(twitterRef.current);
        }

    }, []);

    return (
        <>
            <div className="d30"></div>
            <div className="d30"></div>
            <div className="partTitle">
                <span>추천 알고리즘</span>은<br />당신을 알고 있다
            </div>
            <div className="d30"></div>
            <div className="d30"></div>
            <div className="paragraph" data-sync-id="p1-intro">
                당신이 소셜미디어에 접속했을 때, 사용자 인터페이스(UI) 뒤로 어떤 일이 생기는지 알고 계시나요? 소셜미디어 추천 시스템의 주요 특징을 살펴보세요.</div>
            <div className="d30"></div>
            <div className="d30"></div>
            <div className="media instagram" id="insta_video" data-sync-id="p1-insta-video">
                <div id="instaContainer">
                    <video id="insta_vidvid" ref={instaRef} src="/instagram.mp4" muted playsInline autoPlay loop preload="metadata"></video>
                    <div className="fadeLine" id="insta_line"></div>
                </div>
            </div>
            <div className="d30"></div>
            <div className="d30"></div>
            <div className="paragraph" data-sync-id="p1-para1">
                <span className="para_subtitle">하나의 추천, 그 뒤엔 수천 번의 계산이 있다</span>
                <br />
                <span className="subtitleLine">----</span>
                <br />
                당신에게 어떤 콘텐츠를 추천할지, 소셜 미디어는 빠르게 점수를 계산합니다. 점수를 매길 때, 소셜미디어는 당신과 취향이 비슷한 다른 사용자들이 클릭했던 콘텐츠를 참고하기도 합니다. 비슷한 사용자는 비슷한 것을 좋아한다는 가정이죠. 또 당신이 앞서 소비한 콘텐츠를 분석해 이와 유사한 항목을 제안하기도 합니다. 오늘날 소셜미디어는 사용자의 행적과 유사성을 모두 고려하기 위해 여러 알고리즘을 조합한 ‘앙상블(복합 모델)’ 방식을 사용하고 있습니다. </div>
            <div className="d30"></div>
            <div className="d30"></div>
            <div className="d30"></div>
            <div className="paragraph" data-sync-id="p1-para2">
                <span className="para_subtitle">‘좋아요’ ‘댓글’ 반응하는 순간 추천이 달라진다</span>
                <br />
                <span className="subtitleLine">----</span>
                <br />
                당신이 클릭했던 콘텐츠는 모두 당신을 더 잘 파악하는 데 활용됩니다. 추천 알고리즘이 고도화되는 과정이죠. 만약 당신이 고양이 콘텐츠를 즐겨보는 사람이라고 가정해 보겠습니다. 당신이 고양이 영상C을 클릭해 봤다면, 고양이 영상C를 본 다른 사용자들이 소비한 고양이 영상A와 고양이 영상T를 당신에게 추천하죠.</div>
            <div className="d30"></div>
            <div className="d30"></div>
            <div className="rec" data-sync-id="p1-rec">
                <div className="recVidWrap">
                    <video id="rec_vid" ref={recRef} src="/recommendation.mp4" muted playsInline autoPlay loop preload="metadata"></video>
                    <div className="recImg fadeLine" id="recImgFg"></div>
                </div>
            </div>
            <div className="d30"></div>
            <div className="paragraph" data-sync-id="p1-para3">클릭뿐만이 아닙니다. 어떤 콘텐츠에 좋아요를 누르거나 댓글을 다는 긍정적인 반응부터 게시글을 숨기거나 클릭하지 않고 넘어가는 부정적인 반응까지 소셜미디어는 모두 학습합니다. 모든 데이터가 사용자가 어떤 콘텐츠를 좋아하는지 판단하는 데 다시 사용되기 때문에, ‘피드백 루프’ 과정으로 추천 알고리즘은 끊임없이 고도화되며 추천은 점점 정교해집니다. 사용자와 소셜미디어 간 상호작용 횟수가 늘어남에 따라, 추천 알고리즘이 사용자의 취향을 더 잘 포착할 수 있는 겁니다.</div>
            <div className="d30"></div>
            <div className="d30"></div>
            <div className="d30"></div>
            <div className="paragraph" data-sync-id="p1-para4">
                <span className="para_subtitle">친구의 친구, 그 너머까지 추천 콘텐츠를 찾는다</span>
                <br />
                <span className="subtitleLine">----</span>
                <br />
                당신의 화면에 당신이 팔로우한 사용자의 게시물 말고도, 당신이 팔로우한 적 없는 사용자의 게시물까지 뜨나요? 소셜미디어가 당신이 좋아할 만한 콘텐츠를 당신의 ‘네트워크’ 안과 밖에서 모두 찾아보기 때문입니다. 당신과 상호작용이 많은 소셜미디어 사용자가 있다고 가정해봅시다. 그 ‘친구’가 반응한 게시물의 작성자는 당신과 어떤 관계가 없다고 하더라도 소셜미디어가 활용하는 그래프 기반 탐색 엔진 안에서 당신과 강하게 연결됩니다. 네트워크 안과 밖에서 각각 작동하는 추천 알고리즘은 이원화돼 있고, 이는 모두 당신의 소셜미디어 이용 시간을 늘리기 위한 전략입니다.</div>
            <div className="d30"></div>
            <div className="d30"></div>
            <div className="twitter" data-sync-id="p1-twitter">
                <div id="twitterContainer">
                    <video id="twitter_vid" ref={twitterRef} src="/twitter.mp4" muted playsInline autoPlay loop preload="metadata"></video>
                    <div className="fadeLine" id="twitterLine"></div>
                </div>
            </div>
            <div className="d30"></div>
            <div className="d30"></div>
            <div className="d30"></div>
            <div className="paragraph" data-sync-id="p1-algo-desc">
                <span className="para_subtitle">플랫폼마다 ‘추천의 공식’은 조금씩 다르다</span>
                <br />
                <span className="subtitleLine">----</span>
                <br />
                수천, 수만의 콘텐츠 중 당신이 가장 좋아할만한 콘텐츠를 제안하는 기술입니다. 비슷한 사용자는 비슷한 것을 좋아한다는 가정을 기반으로 한 추천 방식(협업 필터링)과 사용자가 선호하는 콘텐츠의 항목을 분석해 이와 유사한 콘텐츠를 추천하는 방식(콘텐츠 기반 필터링) 등이 함께 쓰이고 있습니다. 한편 2010년대 중반 이후에는 딥러닝이 본격 도입됐습니다. 수억 건의 데이터와 수천만 개의 파라미터를 활용한 심층신경망이 실제 서비스에서 적용되고 있죠.
            </div>
            <div className="d30"></div>
            <div className="d30"></div>
            <div className="logos" id="logo_blur_insta" data-sync-id="p1-logo-insta">
                <div>인스타그램 추천 알고리즘</div>
                <div className="logo_subtitle">5개 탭, 5개 전략</div>
                <div className="logo_text">
                    인스타그램은 피드, 스토리, 릴스, 탐색, 검색 탭 등 모든 콘텐츠 영역에서 딥러닝 기반 추천 알고리즘이 사용됩니다. 인스타그램은 다양한 알고리즘과 분류 모델이 각각 목적을 갖고 있으며 각 영역에서 사람들이 사용하는 방식에 맞는 자체 알고리즘을 사용하고 있습니다. <br /><br />
                    특히 탐색 탭은 세계 수억 명의 사용자를 대상으로 한 대규모 추천 시스템입니다. 랭킹 퍼널이라 불리는 다단계 구조의 콘텐츠 추천이 이루어집니다. 랭킹 퍼널은 경량 모델로 먼저 추천 후보군을 추린 뒤, 정교한 딥러닝 모델로 추천 콘텐츠의 상호작용 확률을 예측합니다. 이때 사용자의 좋아요, 공유, 댓글, 무반응 등 다양한 반응은 물론 접속한 전자 기기가 무엇인지까지 통합적으로 고려됩니다.

                </div>
            </div>
            <div className="d30"></div>
            <div className="d30"></div>
            <div className="logos" id="logo_blur_twitter" data-sync-id="p1-logo-twitter">
                <div>X 추천 알고리즘</div>
                <div className="logo_subtitle">3단계의 추천 과정</div>
                <div className="logo_text">
                    X(구 트위터)의 추천 시스템은 크게 3단계로 구성됩니다. 첫 번째 단계는 추천할 게시물을 고르는 단계입니다. 수억 개의 트윗에서 사용자가 반응할 만한 약 1500개의 후보를 뽑습니다. 추천 게시물은 팔로우한 계정뿐만 아니라, 팔로우하지 않은 계정에서도 선별합니다. X는 이를 ‘인 네트워크’와 ‘아웃 오브 네트워크’라 명명합니다. <br /><br />
                    두 번째 단계는 약 1500개의 후보에 점수를 매기는 것입니다. 사용자가 추천에 반응할 확률을 예측하고 이를 종합해 순위를 매깁니다. <br /><br />
                    마지막으로 추천 게시물을 점검합니다. 사용자가 추천에 피로감을 느끼지 않게 앞서 부정적인 피드백이 있었던 게시물, 게시자를 걸러내죠. X는 “추천 트윗을 만드는 과정은 하루에 약 50억 번 실행되며 모든 단계는 평균 1.5초 내로 이뤄진다”고 설명합니다.
                </div>
            </div>
            <div className="d30"></div>
            <div className="d30"></div>
            <div className="logos" id="logo_blur_youtube" data-sync-id="p1-logo-youtube">
                <div>유튜브 추천 알고리즘</div>
                <div className="logo_subtitle">여러 마리 토끼 사냥</div>
                <div className="logo_text">
                    2019년 구글이 발표한 논문에 따르면 유튜브의 추천 시스템은 여러 마리 토끼를 모두 잡는 것을 목표로 합니다. 사용자가 추천 콘텐츠를 ‘클릭’해 시청하는 것뿐만 아니라, 영상을 끝까지 보는 것, ‘좋아요’를 누르는 것, 추천 콘텐츠에 대한 만족도 조사에 높은 평점을 매기는 것까지가 유튜브의 추천 시스템 목표죠. <br /><br />
                    이를 위해 구글은 사용자의 반응을 각각 예측한 뒤, 이를 종합해 어떤 영상을 추천할지 결정하는 모델을 개발했습니다. 단순히 클릭을 유도하는 것을 넘어 사용자의 만족도까지 높이기 위함입니다.
                </div>
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