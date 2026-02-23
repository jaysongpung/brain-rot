# Brain Rot — 브레인롯

**옥스퍼드가 선정한 2024년 올해의 단어, '브레인롯'을 과학적으로 파헤친 인터랙티브 기사**

An interactive web article scientifically analyzing "Brain Rot" — Oxford's 2024 Word of the Year

[Live Demo](https://jaysongpung.github.io/brain-rot/)

---

## 한국어

### 개요

과학동아와 함께 제작한 **브레인롯(Brain Rot)** 인터랙티브 기사입니다. 소셜미디어의 추천 알고리즘이 어떻게 작동하는지, 반복적인 숏폼 콘텐츠 소비가 뇌에 어떤 영향을 미치는지 과학적으로 분석하고, 실제 26명의 참가자와 함께 4주간 숏폼을 끊는 챌린지를 진행한 결과를 담았습니다.

### 주요 기능

- **인터랙티브 스크롤링** — 패럴랙스 효과와 X-ray 마스크 기반의 독특한 스크롤 경험
- **3파트 구성** — 추천 알고리즘 분석 → 뇌과학 탐구 → 숏폼 끊기 챌린지 결과
- **뇌 영역 시각화** — 스크롤에 반응하는 뇌 이미지 인터랙션
- **뇌파 데이터 시각화** — 챌린지 전후 뇌파(세타파, TAR 지표) 변화 시각화
- **실시간 댓글** — Sanity CMS 기반 실시간 의견 수집 시스템
- **WebGL 셰이더** — 벡터 필드 기반 제너러티브 아트 배경
- **Lottie 애니메이션** — 모래시계 등 인터랙티브 애니메이션
- **스와이퍼 캐러셀** — 뇌 자극 반복 과정 슬라이드

### 기사 구조

| 파트 | 제목 | 내용 |
|------|------|------|
| Part 1 | 추천 알고리즘은 당신을 알고 있다 | 인스타그램, X, 유튜브의 추천 알고리즘 작동 원리 |
| Part 2 | 브레인롯의 뇌과학 | 작업기억과 주의, 뇌 영역 분석, 전문가 인터뷰 |
| Part 3 | 숏폼 4주 끊기 챌린지 | 26명의 참가자 뇌파 측정 결과 및 설문 분석 |

### 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

### 환경 변수

`.env.example`을 `.env`로 복사한 뒤 값을 채워주세요.

```bash
cp .env.example .env
```

| 변수 | 설명 |
|------|------|
| `NEXT_PUBLIC_SANITY_TOKEN` | Sanity CMS API 토큰 (댓글 시스템용) |
| `NEXT_PUBLIC_BASE_PATH` | 배포 경로 접두사 (GitHub Pages: `/brain-rot`) |

---

## English

### Overview

An interactive article produced with **Donga Science** (과학동아) that scientifically explores **Brain Rot** — Oxford's 2024 Word of the Year. The article dissects how social media recommendation algorithms work, examines the neuroscience behind repetitive short-form content consumption, and presents the results of a 4-week "quit short-form video" challenge conducted with 26 participants.

### Features

- **Interactive scrolling** — Unique parallax and X-ray mask-based scroll experience
- **3-part narrative** — Algorithm analysis → Brain science → Challenge results
- **Brain region visualization** — Scroll-responsive brain imagery interaction
- **EEG data visualization** — Pre/post challenge brainwave (theta, TAR) comparison
- **Real-time comments** — Live opinion collection via Sanity CMS
- **WebGL shader** — Vector field generative art background
- **Lottie animations** — Interactive hourglass animation and more
- **Swiper carousel** — Brain stimulation repetition process slides

### Article Structure

| Part | Title | Content |
|------|-------|---------|
| Part 1 | The Algorithm Knows You | How recommendation algorithms work on Instagram, X, and YouTube |
| Part 2 | The Neuroscience of Brain Rot | Working memory, attention, brain regions, expert interviews |
| Part 3 | 4-Week Short-Form Detox Challenge | EEG results and survey analysis from 26 participants |

### Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build
```

### Environment Variables

Copy `.env.example` to `.env` and fill in the values.

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SANITY_TOKEN` | Sanity CMS API token (for comment system) |
| `NEXT_PUBLIC_BASE_PATH` | Deployment path prefix (GitHub Pages: `/brain-rot`) |

---

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Static Export)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **CMS**: [Sanity](https://www.sanity.io/) (real-time comments)
- **Animation**: [Lottie](https://lottiefiles.com/) via `@lottiefiles/dotlottie-react`
- **Carousel**: [Swiper.js](https://swiperjs.com/)
- **Graphics**: WebGL (custom GLSL shaders)
- **Deployment**: GitHub Pages via GitHub Actions

## Project Structure

```
brain-rot/
├── app/
│   ├── layout.js              # Root layout, fonts, global metadata
│   ├── page.js                # Homepage — Background + Mask layers
│   ├── globals.css            # All styles (Tailwind + custom CSS)
│   ├── sanity/page.js         # Sanity comments page
│   └── shader/page.js         # WebGL shader visualization page
├── components/
│   ├── Background.js          # Background content layer (blurred text, placeholders)
│   ├── Mask.js                # Foreground mask — scroll physics, brain interaction, observers
│   ├── part1.js               # Part 1: Recommendation algorithms (videos, platform breakdowns)
│   ├── part2.js               # Part 2: Neuroscience (expert quotes, brain regions, carousel)
│   ├── part3.js               # Part 3: Challenge results (EEG, surveys, charts)
│   ├── RepeatCarousel.js      # Swiper carousel for brain stimulation slides
│   ├── addReplies.js          # Comment submission form (Sanity write)
│   ├── listReplies.js         # Comment list with pagination (Sanity read + realtime)
│   └── shader.js              # WebGL shader toy component (GLSL vector field)
├── public/                    # Static assets (images, videos, animations)
├── .github/workflows/
│   ├── deploy-pages.yml       # GitHub Pages deployment
│   └── deploy.yml             # Production server deployment (SSH)
├── next.config.mjs            # Next.js config (static export, basePath)
├── postcss.config.mjs         # PostCSS (Tailwind plugin)
└── package.json
```

## Architecture

The site uses a **dual-layer scroll architecture**:

1. **Background layer** (`Background.js`) — Contains blurred/masked text and placeholder elements that sync heights with the foreground
2. **Foreground layer** (`Mask.js`) — A fixed-position mask window that reveals the actual content with X-ray style decorations

Scrolling creates a parallax effect through `requestAnimationFrame`-based physics that applies resistance and spring-back to the foreground content position. `IntersectionObserver` instances trigger animations for chat bubbles, spiral text reveals, graph data, and sequential process steps.

Brain images appear in a fixed overlay when scroll position aligns with `data-brain-trigger` markers in the content, with border-draw and fade-in CSS animations.

## Credits

- **Planning & Reporting**: Taehee Kim, Soyeon Kim — Donga Science (과학동아)
- **Advisory**: Juhyun Kim (Korea Brain Research Institute), Chulhyun Cho (Korea University)
- **Development**: Studio Velcro
- **Support**: Korea Press Foundation (언론진흥재단)

## License

This project is licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).

You are free to share and adapt this work for non-commercial purposes with appropriate attribution.
