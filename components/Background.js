import AddReplies from './addReplies';
import RepliesList from './listReplies';

export default function Background() {
    return (
        <div className="container">
            <div className="keyVisual">
                <div className="titleContainer">
                    <div className="title"></div>
                    <div className="blinding" id="fgText">
                        <mark>브레인 롯은 뇌가 손상되거나 썩은 상태란 뜻으로, 사소하거나 불필요한 정보를 과잉 소비한 결과, 개인의 정신적 지적 상태가 퇴보하는 것을 의미한다. 영국 옥스퍼드대 출판부는 2024년 올해의 단어로 ‘브레인 롯’(brain rot)을 선정했다. 과학동아는 브레인롯을 과학적으로 분석하고, 4주간 숏폼을 끊는 챌린지로 뇌의 변화를 추적했다.</mark>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="partTitleBg">
                    <span>추천 알고리즘</span>은<br />당신을 알고 있다
                </div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p1-intro">
                    <mark>당신이 소셜미디어에 접속했을 때, 사용자 인터페이스(UI) 뒤로 어떤 일이 생기는지 알고 계시나요? 소셜미디어 추천 시스템의 주요 특징을 살펴보세요.</mark>
                </div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="media instagram" id="instagram" data-sync-bg="p1-insta-video"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p1-para1">
                    <span className="para_subtitle"><mark>하나의 추천, 그 뒤엔 수천 번의 계산이 있다</mark></span>
                    <br />
                    <span className="subtitleLine bg">----</span>
                    <br />
                    <mark>당신에게 어떤 콘텐츠를 추천할지, 소셜 미디어는 빠르게 점수를 계산합니다. 점수를 매길 때, 소셜미디어는 당신과 취향이 비슷한 다른 사용자들이 클릭했던 콘텐츠를 참고하기도 합니다. 비슷한 사용자는 비슷한 것을 좋아한다는 가정이죠. 또 당신이 앞서 소비한 콘텐츠를 분석해 이와 유사한 항목을 제안하기도 합니다. 오늘날 소셜미디어는 사용자의 행적과 유사성을 모두 고려하기 위해 여러 알고리즘을 조합한 ‘앙상블(복합 모델)’ 방식을 사용하고 있습니다.</mark>
                </div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p1-para2">
                    <span className="para_subtitle"><mark>‘좋아요’ ‘댓글’ 반응하는 순간 추천이 달라진다</mark></span>
                    <br />
                    <span className="subtitleLine bg">----</span>
                    <br />
                    <mark>당신이 클릭했던 콘텐츠는 모두 당신을 더 잘 파악하는 데 활용됩니다. 추천 알고리즘이 고도화되는 과정이죠. 만약 당신이 고양이 콘텐츠를 즐겨보는 사람이라고 가정해 보겠습니다. 당신이 고양이 영상C을 클릭해 봤다면, 고양이 영상C를 본 다른 사용자들이 소비한 고양이 영상A와 고양이 영상T를 당신에게 추천하죠.</mark></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="rec" data-sync-bg="p1-rec">
                    <div className="recImg media" id="recImgBg"></div>
                </div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p1-para3">
                    <mark>클릭뿐만이 아닙니다. 어떤 콘텐츠에 좋아요를 누르거나 댓글을 다는 긍정적인 반응부터 게시글을 숨기거나 클릭하지 않고 넘어가는 부정적인 반응까지 소셜미디어는 모두 학습합니다. 모든 데이터가 사용자가 어떤 콘텐츠를 좋아하는지 판단하는 데 다시 사용되기 때문에, ‘피드백 루프’ 과정으로 추천 알고리즘은 끊임없이 고도화되며 추천은 점점 정교해집니다. 사용자와 소셜미디어 간 상호작용 횟수가 늘어남에 따라, 추천 알고리즘이 사용자의 취향을 더 잘 포착할 수 있는 겁니다.</mark></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p1-para4">
                    <span className="para_subtitle"><mark>친구의 친구, 그 너머까지 추천 콘텐츠를 찾는다</mark></span>
                    <br />
                    <span className="subtitleLine bg">----</span>
                    <br />
                    <mark>당신의 화면에 당신이 팔로우한 사용자의 게시물 말고도, 당신이 팔로우한 적 없는 사용자의 게시물까지 뜨나요? 소셜미디어가 당신이 좋아할 만한 콘텐츠를 당신의 ‘네트워크’ 안과 밖에서 모두 찾아보기 때문입니다. 당신과 상호작용이 많은 소셜미디어 사용자가 있다고 가정해봅시다. 그 ‘친구’가 반응한 게시물의 작성자는 당신과 어떤 관계가 없다고 하더라도 소셜미디어가 활용하는 그래프 기반 탐색 엔진 안에서 당신과 강하게 연결됩니다. 네트워크 안과 밖에서 각각 작동하는 추천 알고리즘은 이원화돼 있고, 이는 모두 당신의 소셜미디어 이용 시간을 늘리기 위한 전략입니다.</mark></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="twitter" data-sync-bg="p1-twitter">
                    <div id="twitterBg"></div>
                </div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p1-algo-desc">
                    <span className="para_subtitle_bg"><mark>플랫폼마다 '추천의 공식'은 조금씩 다르다</mark></span>
                    <br />
                    <span className="subtitleLine bg">----</span>
                    <br />
                    <mark>수천, 수만의 콘텐츠 중 당신이 가장 좋아할만한 콘텐츠를 제안하는 기술입니다. 비슷한 사용자는 비슷한 것을 좋아한다는 가정을 기반으로 한 추천 방식(협업 필터링)과 사용자가 선호하는 콘텐츠의 항목을 분석해 이와 유사한 콘텐츠를 추천하는 방식(콘텐츠 기반 필터링) 등이 함께 쓰이고 있습니다. 한편 2010년대 중반 이후에는 딥러닝이 본격 도입됐습니다. 수억 건의 데이터와 수천만 개의 파라미터를 활용한 심층신경망이 실제 서비스에서 적용되고 있죠.</mark>
                </div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="logos" id="logo_insta" data-sync-bg="p1-logo-insta"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="logos" id="logo_twitter" data-sync-bg="p1-logo-twitter"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="logos" id="logo_youtube" data-sync-bg="p1-logo-youtube"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="media rotText2" data-sync-bg="p2-rot-text"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p2-quote1"><mark>"브레인롯(brain rot). 1854년 헨리 데이비드 소로의 저서 '월든(Walden)'에서 최초로 기록됐던 이 단어는 뇌 썩음, 부패를 뜻했습니다. 그런데 오늘날 이 단어는 새로운 의미를 갖게 됐어요. 소셜미디어에서 저품질의 온라인 콘텐츠를 과도하게 소비하며 사람들의 지적, 정신적 상태가 저하되는 것을 가리키는 용어로 사용되고 있습니다."</mark></div>
                <div className="d30"></div>
                <div className="quoteFromBg" data-sync-bg="p2-quotefrom1"><mark>-2024년 12월, 영국 옥스퍼드대 출판부</mark></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p2-para1"><mark>소셜미디어 속 저품질 콘텐츠를 과도하게 소비하면 정말로 우리의 지적, 정신적 상태가 저하될까요? 그 답을 찾고자 신경과학자, 컴퓨터공학자, 실험심리학자를 만나 '내 뇌가 썩고 있다'는 사람들의 호소를 어떻게 분석할 수 있을지 물어봤습니다.</mark></div>
                <div className="d30"></div>
                <div className="media worldnull" data-sync-bg="p2-world-sweden"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="media peoplenull" data-sync-bg="p2-people-sweden"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p2-quote2"><mark>"브레인롯은 뇌에 과부하가 걸린 현상을 의미합니다. 뇌는 <mark>작업기억</mark>과 <mark>주의</mark>에 기울일 수 있는 용량이 제한적인데 소셜미디어는 구조적으로 사용자가 계속해서 콘텐츠를 소비하게 만들고, 이로 인해 동일하거나 유사한 자극이 반복적으로 제시되거든요. 부하가 증가해 인지적 피로와 집중력 저하가 발생하는 거죠."</mark></div>
                <div className="d30"></div>
                <div className="quoteFromBg" data-sync-bg="p2-quotefrom2"><mark>-샘슨 니반스 스웨덴 카롤린스카연구소 신경과학부 연구원</mark></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p2-para-memory">
                    <mark>작업기억(working memory)은 뇌가 짧은 시간 동안 정보를 유지하고 조작하는 인지 과정입니다. 일종의 '실시간 작업 수행 능력'입니다.</mark>
                </div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p2-para-attention">
                    <mark>주의(attention)는 뇌가 들어오는 정보 중 일부를 선택해 더 깊게 처리하는 과정입니다. 시끄러운 카페에서 친구의 말소리에 주의를 기울일 때, 뇌 기능이 이 특정 자극의 정보 처리에 집중할 수 있게 해줍니다.</mark>
                </div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p2-brain-title">
                    <mark><span className="para_subtitle">작업기억과 주의를 담당하는<br />주요 뇌 영역</span>
                        <br />
                        <span className="subtitleLine">----</span></mark>
                </div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="brain1">
                    <mark>1. 배외측 전전두엽<br />
                        이마 바로 뒤쪽, 뇌의 가장 앞부분입니다.<br />
                        정보를 잠시 보관하면서 동시에 조작하는, 작업기억의 핵심 영역입니다.</mark>
                </div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="brain2">
                    <mark>2. 전측 대상피질<br />
                        대상피질은 뇌의 한가운데를 가로지르는 띠 모양의 피질 구조입니다. <br />
                        대상피질의 앞쪽 구역을 전측 대상피질이라 부릅니다. <br />
                        중요한 정보에 집중하고 산만한 자극을 억제하는 역할을 합니다.</mark>
                </div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="brain3">
                    <mark>3. 두정엽<br />
                        두정엽은 정수리 쪽에 위치해 있습니다. <br />
                        짧은 시간 동안 무언가를 기억할 때 두정엽이 활성화됩니다.<br />
                        특히 전두엽-두정엽 간 네트워크가 주의 및 과제 수행 시에 활성화됩니다.</mark>
                </div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p2-repeat-title">
                    <mark><span className="para_subtitle">반복되는 자극이 들어올 때<br />뇌 활성</span></mark>
                    <br />
                    <span className="subtitleLine">----</span>
                </div>
                <div className="repeatCarouselPlaceholder" data-sync-bg="p2-carousel"></div>
                <div className="d30"></div>

                <div className="paragraph" data-sync-bg="p2-quote3"><mark>"대부분의 사람들이 뇌가 왜, 그리고 어떻게 피로해지는지 모르기 때문에 이를 '뇌가 썩었다'고 표현하는 겁니다."</mark></div>
                <div className="d30"></div>
                <div className="quoteFromBg" data-sync-bg="p2-quotefrom3"><mark>-샘슨 니반스 스웨덴 카롤린스카연구소 신경과학부 연구원</mark></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p2-question1">
                    <mark>끊임없는 소셜미디어 소비로 인지적 피로와 집중력 저하가 반복되면, 뇌가 변할까요? 과학자들의 답은 '그럴 수 있지만 아직 과학적인 증거는 없다'입니다.</mark>
                </div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="media worldnull" data-sync-bg="p2-world-aus"></div>
                <div className="media peoplenull" data-sync-bg="p2-people-aus"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p2-quote4"><mark>"반복적으로 하는 모든 일은 뇌를 변화시킵니다. 예를 들어 피아노 연주를 오래 연습하면 섬세한 손가락 움직임을 관장하는 뇌의 영역이 활성화됩니다. 따라서 소셜미디어를 오래 소비하면, 소셜미디어를 사용하기 전과 비교했을 때 뇌가 달라지는 것은 당연한겁니다. 하지만 지금까지 나온 과학적 증거를 살폈을 때, 소셜미디어가 사용자의 자기통제력과 의사결정을 담당하는 전전두엽과 전측 대상피질을 '손상'시키는 것은 아닙니다."</mark></div>
                <div className="d30"></div>
                <div className="quoteFromBg" data-sync-bg="p2-quotefrom4"><mark>-오펠 튜렐 호주 멜버른대 컴퓨터공학 및 정보시스템학 교수</mark></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p2-para-damage">
                    <mark><span className="para_subtitle">브레인롯, 약물이나 도박 중독과는 다르다</span>
                        <br />
                        <span className="subtitleLine">----</span>
                        <br />
                        즐거운 기분을 느끼게 만드는 신경회로인 보상회로를 반복해서 자극하고, 그런 자극이 지속되면 보상회로를 작동시키는 신경전달물질(도파민)이 과다 분비됨에 따라 보상회로의 자기 조절 기능이 망가집니다. 반복적이고 강한 자극으로 도파민 분비가 더 많이, 자주 이뤄짐에 따라 도파민 수용체 균형이 깨지고 신경세포가 다른 신경세포와 만나 신호를 주고받는 시냅스의 기능과 구조가 비정상적으로 변합니다. 그 결과 보상회로 조절 기능을 하는 전두엽 신경세포의 활성도도 변하는데, 자기 통제력과 의사결정을 담당하는 전두엽이 제대로 역할하지 못하면서 충동을 억제하거나 위험을 평가하는 능력이 크게 저하됩니다. 하지만 소셜미디어에 의한 브레인롯은 이와 다릅니다.</mark>
                </div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p2-quote4-2"><mark>"소셜미디어가 사용자의 자기통제력과 의사결정에 악영향을 미친다는 과학적인 증거는 아직 없어요. 스스로가 브레인롯이라 호소하는 사람들도 자기 자신을 통제하겠다는 의지를 가진다면 알람을 끄거나 의식적으로 스마트폰을 멀리할 수 있습니다."</mark></div>
                <div className="d30"></div>
                <div className="quoteFromBg" data-sync-bg="p2-quotefrom4-2"><mark>-오펠 튜렐 호주 멜버른대 컴퓨터공학 및 정보시스템학 교수</mark></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p2-effort">
                    <mark>소셜미디어가 뇌나 인지 능력에 미치는 영향에 대해 분석이 꾸준히 발표되고 있습니다. 하지만 아직도 대부분이 소셜미디어를 술이나 담배 같은 화학물질처럼 양적인 맥락으로만 분석하고 있습니다. 소셜미디어가 미치는 영향을 정교하게 분석하기 위해 노력이 더 필요합니다.</mark>
                </div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="media worldnull" data-sync-bg="p2-world-uk"></div>
                <div className="d30"></div>
                <div className="media peoplenull" data-sync-bg="p2-people-uk"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p2-quote5"><mark>"지난 4~5년 동안 기술을 사용할 때 통제력을 잃는다고 말하는 젊은 사람들이 계속해 늘어나고 있는 건 사실입니다. 하지만 소셜미디어가 우리 뇌를 변하게 하는지, 정말 나쁘게 만드는지에 대한 정확한 과학적인 증거는 아직 쌓이는 중입니다. 중요한 건 소셜미디어 사용의 맥락을 살피고, 긴 시간 사용자들의 뇌와 인지 능력을 추적하는 거죠."</mark></div>
                <div className="d30"></div>
                <div className="quoteFromBg" data-sync-bg="p2-quotefrom5">
                    <mark>-에이미 오벤 영국 케임브리지대<br />
                        MRC 인지및뇌과학연구소 교수</mark>
                </div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p2-research-title">
                    <mark><span className="para_subtitle">소셜미디어 영향력 연구,<br />어떻게 보완할 것인가 </span>
                        <br />
                        <span className="subtitleLine">----</span></mark>
                </div>
                <div className="media spiral2" data-sync-bg="p2-spiral">
                </div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p2-closing">
                    <mark>브레인롯이 뇌에 미치는 영향을 온전히 밝히기까지는 시간이 좀 더 걸릴 겁니다. 하지만 한 가지는 분명합니다. 소셜미디어, 특히 숏폼의 추천 알고리즘이 뇌를 지치게 만들고 일상에 악영향을 미친다는 점입니다.<br />
                        숏폼을 끊는다면 뇌는 더 이상 피로감을 느끼지 않을까요? 과학동아와 함께 4주간 숏폼을 끊은 26명의 기록을 자세히 들여다봅시다.</mark>
                </div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                {/* part 3 */}
                <div className="partTitleBg" data-sync-bg="p3-title">
                    브레인롯 탈출할 수 있을까?<br />
                    <span>숏폼 4주 끊기</span>챌린지
                </div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="chatContainer" data-sync-bg="p3-chat1">
                </div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p3-para1">
                    <mark>우리는 왜 피곤해졌을까. 과연 브레인롯에서 탈출할 수 있을까.<br />
                        과학동아가 진행한 '숏폼 4주 끊기' 챌린지 참가자들이 출발선에서 한 말입니다. 브레인롯은 아직 의학적 진단명은 아니지만, 학자들은 '소셜미디어를 반복해 접한 결과, 뇌에 부하가 가해지면서 생긴 인지적 피로'라고 해석합니다.</mark>
                </div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p3-para2">
                    <mark>피로해졌다면, 쉬면 됩니다. 뇌도 마찬가지일까요?</mark>
                </div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p3-para3">
                    <mark>이 질문에 대한 답을 찾기 위해 과학동아는 8월 26일부터 9월 22일까지 약 4주간 29명의 참가자들과 '숏폼 4주 끊기' 챌린지를 시작했습니다.
                        참가자들이 끊은 소셜미디어 서비스는 인스타그램 릴스, 유튜브 숏츠, X, 틱톡이었습니다.<br />
                        모두 추천 알고리즘이 숏폼을 무한히 보도록 만드는 매체입니다.</mark>
                </div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p3-para4">
                    <mark>29명의 참가자 중 중도이탈자는 단 3명이었습니다.<br />
                        26명의 이야기를 과학적으로 분석해봤습니다.</mark>
                </div>
                <div className="d30"></div>
                <div className="littlequoteBg" data-sync-bg="p3-note"><mark>*김주현 한국뇌연구원 선임연구원과 조철현 고려대 정신건강의학과 교수가 챌린지 설계와 결과 분석 등의 자문을 맡았습니다.</mark></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p3-para5">
                    <mark>챌린지 참가자들은 모두 1주일에 13시간 이상 숏폼 콘텐츠를 소비하며 자신이 숏폼으로 인한 브레인롯을 겪고 있다고 느끼는 이들이었습니다.</mark>
                </div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p3-para6">
                    <mark>마지막까지 함께한 26인은 챌린지에 참여하기 직전 1주일과 챌린지 참여 마지막 주인 4주차를 비교했을 때, 주간 숏폼 이용 시간을</mark>
                </div>
                <div className="d30"></div>
                <div className="hourglass-container" data-sync-bg="p3-hourglass">

                </div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p3-brain-title">
                    <mark><span className="para_subtitle_bg">뇌파</span>
                        <br />
                        <span className="subtitleLine bg">----</span>
                        <br />
                        챌린지 전과 후, 가장 궁금했던 건 뇌의 변화였습니다.<br />
                        챌린지 전, 브레인롯 증상을 호소하는 참가자들의 뇌는 어떻게 다른지 궁금했습니다.
                        챌린지 후, 이들이 4주간 숏폼을 끊고 나면, 뇌가 실제로 회복할지도 알고 싶었습니다.<br />
                        그래서 뇌파 측정 전문 기업 '아이메디신'의 비침습형 뇌파 측정 장치 '아이싱크웨이브'를 이용해 뇌파를 측정했습니다. 아이싱크웨이브는 19개의 전극으로 뇌의 각 부위에서 관찰되는 뇌파를 주파수 대역별로 측정합니다.</mark>
                </div>
                <div className="d30"></div>
                <div className="media machineBg" data-sync-bg="p3-machine"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p3-before-title">
                    <mark><span className="para_subtitle_bg">BEFORE<br />
                        숏폼에 잠식된 뇌, 이렇게 보였다
                    </span>
                        <br />
                        <span className="subtitleLine bg">----</span>
                        <br />
                        뇌파 측정은 다음과 같은 방식으로 이뤄졌습니다.</mark>
                </div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="process" data-sync-bg="p3-process"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p3-theta">
                    <mark>숏폼을 보기 전과 후, 눈을 감은 상태에서 세타파를 비교했습니다.<br />
                        세타파(4~8Hz)는 명상이나 기억처리 등 내면에 집중해 사고할 때 두드러집니다.</mark>
                </div>
                <div className="d30"></div>
                <div className="media tar tarBg1" data-sync-bg="p3-tar1"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p3-tar-desc1">
                    <mark>세타파가 강하게 발생하는 부분은 빨간색, 세타파가 약하게 발생하는 부분은 파란색으로 나타납니다.</mark>
                </div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p3-tar-result1">
                    <mark>숏폼을 본 후, 뇌 전체적으로 세타파의 강도가 낮아졌습니다.<br />
                        이는 "숏폼을 본 직후의 뇌는 아무것도 보지 않고 쉴 때조차 내면에서 벌어지는 생각에 주의를 기울이기 어려운 상태"라는 의미입니다.</mark>
                </div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p3-tar-intro2">
                    <mark>이번에는 숏폼을 보기 전과 후, 눈을 뜨고 외부 정보를 받아들이는 뇌를 TAR 지표를 기준으로 살펴봤습니다.</mark>
                </div>
                <div className="d30"></div>
                <div className="media tar tarBg1" data-sync-bg="p3-tar2"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p3-tar-desc2">
                    <mark>TAR 지표가 낮으면 뇌가 각성상태에 이르렀다는 의미입니다. TAR 지표가 높으면 뇌가 뇌의 처리 속도가 느려지고, 주의 분산 상태에 이르렀다는 의미입니다.</mark>
                </div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p3-tar-result2">
                    <mark>전체적으로 TAR 지표가 높아졌습니다.
                        눈을 뜨고 외부 자극을 인지하는 중임에도, 집중력이 저하된 상태로 해석됩니다.</mark>
                </div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p3-summary1">
                    <mark>숏폼을 본 뒤 뇌는 쉴 때에도 제대로 쉬지 못하고, 눈을 뜨고 있어도 정보를 제대로 인식하지 못하는 상태에 이르렀다고 볼 수 있습니다.</mark>
                </div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p3-after-title">
                    <mark><span className="para_subtitle_bg">AFTER<br />
                        숏폼 끊은 뇌, 이렇게 변했다
                    </span>
                        <br />
                        <span className="subtitleLine bg">----</span>
                        <br />
                        이제 4주간 숏폼을 끊은 참가자들의 뇌파를 살펴볼까요.
                        결론부터 말하자면, 숏폼을 끊은 다음 뇌파에선 부분적 회복 징후가 나타났습니다.
                        완전한 정상화는 아니었어요. 그렇지만 뇌가 서서히, 변했음이 드러났습니다.</mark>
                </div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p3-result1">
                    <mark>숏폼을 끊기 이전, 눈을 감은 상태의 전두엽 뇌파 활성도는 참가자 전체 평균 16.811%로 과각성된 상태였습니다. 이 수치가 4주간 숏폼을 끊은 이후, 12.253%까지 낮아졌어요. 4주간 숏폼을 끊은 이후, 전두엽이 과각성되고 과부화된 상태에서 벗어났다는 이야기입니다.</mark>
                </div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p3-result2">
                    <mark>눈을 뜬 상태의 측정 데이터를 비교했더니, 뇌의 전체적인 신경 활성도가 향상된 것도 드러났습니다.</mark>
                </div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p3-graph-intro">
                    <mark>아래 그래프를 한번 볼까요?</mark>
                </div>
                <div className="media graphBg" data-sync-bg="p3-graph"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p3-graph-legend">
                    <mark><div className="graph_line_flex">
                        <div className="graph_line gl_red"></div>
                        <div className="graph_line_text">숏폼을 끊기 전, 뇌의 신경 활성도</div>
                    </div>
                        <div className="graph_line_flex">
                            <div className="graph_line gl_blue"></div>
                            <div className="graph_line_text">숏폼을 끊은 뒤, 뇌의 신경 활성도</div>
                        </div></mark>
                </div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p3-graph-result">
                    <mark>푸른 선이 전반적으로 더 높은 값을 보입니다.
                        숏폼을 끊고 나니, 뇌의 전체적인 신경 활성도가 향상됐습니다. 건강해진 거죠.</mark>
                </div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p3-survey-title">
                    <mark><span className="para_subtitle_bg">뇌파엔 담지 못한 4주 뒤의 이야기</span>
                        <br />
                        <span className="subtitleLine bg">----</span>
                        <br />
                        뇌파가 전부는 아니었습니다. 참가자 26명을 대상으로 한 설문조사에서도 재미있는 경향성이 발견됐거든요.</mark>
                </div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p3-survey1">
                    <mark>"업무, 학업 등 작업을 시작하고 유지하는 데 드는 노력은 어느 정도입니까?"<br />
                        이 질문에 '작업을 시작하기 다소 어렵다' 또는 '작업을 시작하기 매우 어렵다'고 답한 사람의 비율은 76.7%에서 30.4%까지 떨어졌습니다.</mark>
                </div>
                <div className="lineGraph_container" data-sync-bg="p3-graph1"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p3-survey2">
                    <mark>"최근 2주간 피로감(또는 무기력감)을 얼마나 자주 겪었습니까?"<br />
                        이 질문에 '자주 피로했음(주 4~5일)' 또는 '거의 항상 피로했음(주 6~7일)'이라고 답한 이들은 73.3%에서 21.7%로 떨어졌죠.</mark>
                </div>
                <div className="lineGraph_container" data-sync-bg="p3-graph2"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p3-testimonial-intro">
                    <mark>그 외에도 실험 참가자들이 4주간의 챌린지를 끝내고 전해온 이야기들도 많이 쌓여있습니다.
                        브레인롯을 탈출한 이야기들이죠. 어쩌면 앞으로 우리가 꿈꿔야 할 미래의 이야기인지도 모릅니다.</mark>
                </div>
                <div className="d30"></div>
                <div className="chatContainer" data-sync-bg="p3-chat2"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p3-conclusion1">
                    <mark>이번 4주간의 실험은 개인의 노력이 실제 변화를 만들어낼 수 있음을 보여줬습니다. 하지만 숏폼을 끊는 건 생각보다 쉽지 않습니다. 의지만으로 버티기엔 이미 숏폼은 일상 깊숙이 스며든 기술과 알고리즘의 영역이니까요.</mark>
                </div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-bg="p3-conclusion2">
                    <mark>시선을 조금 넓혀보면, 해외에서는 정부가 나서 플랫폼에 청소년 야간 사용 제한, 자동 재생 중단, 휴식 알림 설정 같은 조치를 도입하고 있습니다. 우리 사회도 이제 '뇌의 건강한 사용법'을 함께 설계할 때입니다. 어떤 노력이 우리 사회에 필요하다고 생각하시나요. 소중한 의견을 기다립니다.</mark>
                </div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-id="p3-replies">
                    <span className="para_subtitle">여러분의 소중한 의견을 남겨주세요
                    </span>
                    <br />
                    <span className="subtitleLine bg">----</span>
                    <br />
                    <RepliesList />
                    <AddReplies />
                </div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="paragraph" data-sync-id="p3-credits">
                    <span className="bold">기획·진행</span><br />
                    과학동아 김태희, 김소연 기자<br /><br />
                    <span className="bold">도움·감수</span><br />
                    김주현 한국뇌연구원 정서·인지질환 연구그룹 선임연구원, 조철현 고려대 정신건강의학과 교수, 강유 서울대 컴퓨터공학부 데이터 마이닝 연구실 (이종은 협동과정 인공지능전공 연구원)<br /><br />
                    <span className="bold">제작</span><br />
                    Studio Velcro<br /><br />
                    <span className="bold">지원</span><br />
                    언론진흥재단
                </div>
                <div className="d30"></div>
                <div className="littlequote" data-sync-id="p3-footer">본 기획물은 정부광고 수수료로 조성된 언론진흥기금의 지원을 받았습니다.
                </div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
                <div className="d30"></div>
            </div>
        </div >
    );
}