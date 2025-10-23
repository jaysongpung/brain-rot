'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function RepeatCarousel() {
    const slides = [
        {
            image: '/repeat1.png',
            title: '감각 입력',
            text: '뇌는 시각 및 청각 자극을 1차 감각 피질에서 처리합니다. 다만 같은 유형의 자극이 계속 들어오면 \'습관화\'로 인해 자극에 대한 신경 반응이 점점 줄어듭니다.'
        },
        {
            image: '/repeat2.png',
            title: '배외측 전전두엽의 과부하',
            text: '전전두엽은 동시에 처리할 수 있는 정보량이 제한적입니다. 유사한 자극이 계속 들어오면 이를 구별하고 선택적으로 집중해야해, 주의력 발휘에 관여하는 뇌 기능 자원 소모가 커집니다.'
        },
        {
            image: '/repeat3.png',
            title: '주의망의 피로',
            text: '전측 대상피질과 두정엽은 \'무엇에 집중할지, 무엇을 무시할지\'를 선별해 외부 감각 자극에 대한 신경 반응 정도를 조절하는데, 유사한 반복 자극이 반복해서 이어지면 이러한 선별 및 억제 기능이 약화됩니다. 선택과 억제 과정이 반복돼 신경 자원이 과도하게 소모되기 때문입니다.'
        },
        {
            image: '/repeat.png',
            title: '신경전달물질의 변화',
            text: '도파민, 아세틸콜린, 노르아드레날린 등 주의 및 기억 유지에 관여하는 시스템이 숏폼 콘텐츠와같은 저강도 반복 자극으로 인해 오래 활성화되며 일시적인 불균형이 만들어집니다. 이는 전두엽-두정엽 네트워크 효율성을 떨어뜨려 인지적 피로로 이어집니다.'
        }
    ];

    return (
        <div className="repeatCarouselContainer">
            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={0}
                slidesPerView={1}
                className="repeatSwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="repeatSlide">
                            <div className="repeatSlideImage" style={{ backgroundImage: `url(${slide.image})` }}></div>
                            <div className="repeatSlideTitle">{slide.title}</div>
                            <div className="repeatSlideText">{slide.text}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
