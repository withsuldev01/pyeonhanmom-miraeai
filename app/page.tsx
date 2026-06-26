import Image from "next/image";
import type { ReactNode } from "react";
import {
  MotionButtonLink,
  Reveal,
  RevealArticle,
  RevealGroup,
} from "./components/Motion";

const ASSESSMENT_URL =
  "https://child-developmental-assessment-form-sage.vercel.app/";

const supportCards = [
  {
    title: "현재 상태를 정확히 이해합니다",
    body: "언어, 인지, 감각, 운동, 사회성 발달을 종합적으로 살펴 어떤 도움이 필요한지 확인합니다.",
  },
  {
    title: "아이에게 맞는 목표를 세웁니다",
    body: "발달 수준과 생활 속 어려움에 맞춰 무리하지 않고 이어갈 수 있는 치료교육 방향을 계획합니다.",
  },
  {
    title: "일상으로 이어지는 변화를 돕습니다",
    body: "치료 과정에서 확인된 변화를 보호자와 공유하고 가정과 기관 생활까지 연결합니다.",
  },
];

const trustItems = [
  "원장 초진",
  "다영역 발달 평가",
  "보호자 해석상담",
  "1회 치료 경험",
];

const programs = [
  {
    icon: "speech",
    title: "언어치료",
    body: "말을 이해하고 표현하는 힘을 키우며 자연스러운 소통을 도와줍니다.",
    tags: ["표현", "이해", "소통"],
  },
  {
    icon: "sensory",
    title: "감각통합치료",
    body: "감각 자극을 조절하고 몸을 안정적으로 사용할 수 있도록 돕습니다.",
    tags: ["감각 조절", "몸 사용"],
  },
  {
    icon: "cognition",
    title: "인지치료",
    body: "주의집중, 문제해결, 기억, 기초학습 능력을 단계적으로 확장합니다.",
    tags: ["주의집중", "기초학습"],
  },
  {
    icon: "play",
    title: "놀이치료",
    body: "놀이를 통해 감정 표현, 관계 맺기, 자기조절 능력을 자연스럽게 이끕니다.",
    tags: ["정서 표현", "관계"],
  },
  {
    icon: "art",
    title: "미술치료",
    body: "그림과 만들기 활동으로 감정을 표현하고 정서적 안정감을 기릅니다.",
    tags: ["감정 표현", "안정감"],
  },
  {
    icon: "pair",
    title: "짝치료",
    body: "또래와 차례 기다리기, 주고받기, 공동 활동을 경험합니다.",
    tags: ["또래 상호작용", "차례 기다리기"],
  },
  {
    icon: "group",
    title: "그룹치료",
    body: "규칙 이해, 협력, 표현 방법을 배우며 사회적 자신감을 높입니다.",
    tags: ["협력", "사회성"],
  },
  {
    icon: "aba",
    title: "ABA 치료",
    body: "아동의 행동을 체계적으로 관찰하고, 긍정적인 행동과 의사소통·사회성 발달을 단계적으로 돕는 치료 프로그램입니다.",
    tags: ["행동 관찰", "의사소통", "사회성"],
  },
] as const;

type ProgramIconName = (typeof programs)[number]["icon"];

const processSteps = [
  {
    title: "원장님 초진 및 발달 확인",
    body: "아이의 현재 상태와 보호자 상담 내용을 바탕으로 전반적인 발달 흐름을 확인합니다.",
  },
  {
    title: "발달 전문가 심층 검사",
    body: "언어, 인지, 감각, 운동, 사회성 등 아이에게 필요한 발달 영역을 세밀하게 평가합니다.",
  },
  {
    title: "검사 결과 해석상담",
    body: "검사 결과를 바탕으로 아이의 발달 특성과 현재 수준, 필요한 치료 방향을 안내합니다.",
  },
  {
    title: "1회 치료 경험",
    body: "검사 결과에 따라 필요한 치료를 경험해보고 실제 적합성과 향후 진행 방향을 확인합니다.",
  },
];

const reviews = [
  {
    title: "처음엔 낯설어하던 아이가 치료 시간을 기다려요.",
    body: "아이의 속도에 맞춰 천천히 이끌어주셔서 안정적으로 적응했습니다.",
  },
  {
    title: "말로 표현하는 일이 조금씩 늘고 있어요.",
    body: "집에서도 원하는 것을 말로 표현하려는 모습이 보여요.",
  },
  {
    title: "초진 후 상담까지 이어져 안심됐어요.",
    body: "치료 방향을 구체적으로 설명해주셔서 이해하기 쉬웠습니다.",
  },
  {
    title: "막막했던 치료 방향이 잡혔어요.",
    body: "아이에게 필요한 목표를 함께 세울 수 있어 좋았습니다.",
  },
];

const teamCards = [
  {
    title: "원장님 초진",
    body: "아이의 발달 흐름과 보호자 상담 내용을 함께 살핍니다.",
  },
  {
    title: "언어 발달 지원",
    body: "이해와 표현, 상호작용의 힘을 차근차근 키웁니다.",
  },
  {
    title: "감각과 운동 지원",
    body: "몸의 안정감과 일상 적응을 위한 경험을 설계합니다.",
  },
  {
    title: "놀이와 정서 지원",
    body: "관계, 감정 표현, 자기조절을 편안한 활동 안에서 돕습니다.",
  },
];

const therapistProfiles = [
  {
    name: "김00 선생님",
    field: "언어치료",
    intro: "천천히 말해도 괜찮도록 아이의 표현을 기다립니다.",
    image: "/assets/therapists/teacher-01.svg",
  },
  {
    name: "이00 선생님",
    field: "감각통합치료",
    intro: "몸이 편안해지는 경험을 통해 일상 적응을 돕습니다.",
    image: "/assets/therapists/teacher-02.svg",
  },
  {
    name: "박00 선생님",
    field: "인지치료",
    intro: "아이의 생각하는 힘을 작은 성공 경험으로 확장합니다.",
    image: "/assets/therapists/teacher-03.svg",
  },
  {
    name: "정00 선생님",
    field: "놀이치료",
    intro: "놀이 속에서 감정과 관계의 언어를 함께 찾아갑니다.",
    image: "/assets/therapists/teacher-04.svg",
  },
  {
    name: "최00 선생님",
    field: "미술치료",
    intro: "말로 다 하지 못한 마음도 색과 그림으로 표현하도록 돕습니다.",
    image: "/assets/therapists/teacher-05.svg",
  },
  {
    name: "한00 선생님",
    field: "짝치료",
    intro: "또래와 주고받는 경험이 편안해지도록 곁에서 안내합니다.",
    image: "/assets/therapists/teacher-06.svg",
  },
  {
    name: "오00 선생님",
    field: "그룹치료",
    intro: "함께 기다리고 표현하는 과정에서 사회성을 키웁니다.",
    image: "/assets/therapists/teacher-07.svg",
  },
  {
    name: "문00 선생님",
    field: "ABA 치료",
    intro: "아이의 행동을 세심하게 관찰하고 필요한 변화를 계획합니다.",
    image: "/assets/therapists/teacher-08.svg",
  },
];

function AssessmentLink({
  children,
  className,
  "aria-label": ariaLabel,
}: Readonly<{
  children: ReactNode;
  className: string;
  "aria-label"?: string;
}>) {
  return (
    <MotionButtonLink
      aria-label={ariaLabel}
      className={className}
      href={ASSESSMENT_URL}
    >
      {children}
    </MotionButtonLink>
  );
}

function ProgramIcon({ name }: Readonly<{ name: ProgramIconName }>) {
  const common = {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
  } as const;

  return (
    <div className="mb-5 flex h-18 w-18 items-center justify-center rounded-full bg-[#e4f5f3] ring-1 ring-[#c9e8e4]">
      <svg
        aria-hidden="true"
        className="h-12 w-12"
        viewBox="0 0 80 80"
      >
        {name === "speech" ? (
          <>
            <path
              d="M18 33c0-11 10-19 23-19s23 8 23 19-10 19-23 19c-4 0-8-.7-11.3-2L19 56l3.3-10.4A17.4 17.4 0 0 1 18 33Z"
              stroke="#173b75"
              fill="#ffffff"
              {...common}
            />
            <path d="M32 33h.2M41 33h.2M50 33h.2" stroke="#0b817f" {...common} />
            <path d="M61 22c4 2.8 6.5 6.8 7 11.8M66 16c6.2 4.5 9.8 10.7 10.7 18" stroke="#42a88e" {...common} />
          </>
        ) : null}
        {name === "sensory" ? (
          <>
            <path d="M36 18h10l5 9-7 7H31l-7-7 5-9h7Z" fill="#f2c85b" stroke="#173b75" {...common} />
            <path d="M36 34 29 56M44 34l8 22M31 45h18" stroke="#173b75" {...common} />
            <path d="M18 56h20M46 56h16" stroke="#0b817f" {...common} />
            <path d="M18 42c4-5 8-5 12 0M50 18c5-4 10-3 13 2" stroke="#d85253" {...common} />
            <circle cx="18" cy="42" r="4" fill="#77bfd3" stroke="#173b75" {...common} />
            <circle cx="63" cy="20" r="4" fill="#77bfd3" stroke="#173b75" {...common} />
          </>
        ) : null}
        {name === "cognition" ? (
          <>
            <path
              d="M28 57c-9-4-14-12-14-22 0-12 9-21 21-21 4 0 8 1.2 11 3.3A18 18 0 0 1 68 35c0 10-7 19-17 22"
              fill="#ffffff"
              stroke="#173b75"
              {...common}
            />
            <path d="M38 20v44M27 31h22M29 45h15M49 28h10M50 43h12" stroke="#0b817f" {...common} />
            <path d="M36 20c-3 4-3 8 0 12M47 18c4 4 5 9 2 14M34 64c2-5 7-7 13-5" stroke="#d85253" {...common} />
            <circle cx="58" cy="43" r="5" fill="#f2c85b" stroke="#173b75" {...common} />
          </>
        ) : null}
        {name === "play" ? (
          <>
            <path d="M17 42h18v20H17z" fill="#77bfd3" stroke="#173b75" {...common} />
            <path d="M35 30h18v32H35z" fill="#f2c85b" stroke="#173b75" {...common} />
            <path d="M53 42h14v20H53z" fill="#d85253" stroke="#173b75" {...common} />
            <path d="M37 30 44 18l9 12" fill="#ffffff" stroke="#173b75" {...common} />
            <path d="M23 42v-9h9" stroke="#0b817f" {...common} />
          </>
        ) : null}
        {name === "art" ? (
          <>
            <path
              d="M16 40c0-13 11-24 25-24 13 0 23 8 23 19 0 5-3 8-8 8h-5c-4 0-6 3-5 7 1 6-3 12-10 12-11 0-20-10-20-22Z"
              fill="#ffffff"
              stroke="#173b75"
              {...common}
            />
            <circle cx="31" cy="31" r="4" fill="#77bfd3" stroke="#173b75" {...common} />
            <circle cx="43" cy="27" r="4" fill="#f2c85b" stroke="#173b75" {...common} />
            <circle cx="52" cy="36" r="4" fill="#d85253" stroke="#173b75" {...common} />
            <path d="M55 60 68 31M60 62l8-18" stroke="#0b817f" {...common} />
          </>
        ) : null}
        {name === "pair" ? (
          <>
            <circle cx="29" cy="25" r="8" fill="#ffffff" stroke="#173b75" {...common} />
            <circle cx="53" cy="25" r="8" fill="#ffffff" stroke="#173b75" {...common} />
            <path d="M18 58c1-12 8-19 19-19M64 58c-1-12-8-19-19-19" stroke="#173b75" {...common} />
            <path d="M35 45c5 6 9 6 14 0M22 22c2-6 8-9 14-6M46 16c6-3 13 0 16 6" stroke="#0b817f" {...common} />
            <path d="M36 35h10M39 31l4 4-4 4" stroke="#d85253" {...common} />
          </>
        ) : null}
        {name === "group" ? (
          <>
            <circle cx="40" cy="23" r="8" fill="#ffffff" stroke="#173b75" {...common} />
            <circle cx="23" cy="35" r="7" fill="#ffffff" stroke="#173b75" {...common} />
            <circle cx="57" cy="35" r="7" fill="#ffffff" stroke="#173b75" {...common} />
            <path d="M27 63c1-13 6-21 13-21s12 8 13 21M10 62c1-10 6-16 13-16 4 0 7 1.6 10 4M70 62c-1-10-6-16-13-16-4 0-7 1.6-10 4" stroke="#173b75" {...common} />
            <path d="M29 19c3-7 11-10 18-6M18 30c2-4 6-6 11-4M51 26c5-2 9 0 12 4" stroke="#0b817f" {...common} />
            <path d="M35 53h10" stroke="#f2c85b" {...common} />
          </>
        ) : null}
        {name === "aba" ? (
          <>
            <path d="M22 15h34l8 8v42H22z" fill="#ffffff" stroke="#173b75" {...common} />
            <path d="M56 15v10h8" stroke="#173b75" {...common} />
            <path d="M31 32h3l4 5 10-12M31 48h3l4 5 10-12" stroke="#0b817f" {...common} />
            <path d="M51 34h5M51 50h5" stroke="#d85253" {...common} />
            <circle cx="29" cy="32" r="3" fill="#f2c85b" />
            <circle cx="29" cy="48" r="3" fill="#f2c85b" />
          </>
        ) : null}
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#122044]">
      <header className="sticky top-0 z-30 border-b border-[#dde8ee] bg-white/92 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3 sm:px-8">
          <a href="#top" className="shrink-0" aria-label="페이지 처음으로 이동">
            <Image
              src="/assets/logo.png"
              alt="편한몸 의원 부설 미래아이 심리발달 클리닉"
              width={300}
              height={60}
              priority
              className="h-auto w-[190px] sm:w-[250px]"
            />
          </a>
          <nav
            aria-label="주요 메뉴"
            className="hidden items-center gap-7 text-sm font-semibold text-[#2e4f7f] lg:flex"
          >
            <a href="#programs" className="transition hover:text-[#0b817f]">
              프로그램
            </a>
            <a href="#process" className="transition hover:text-[#0b817f]">
              치료 과정
            </a>
            <a href="#reviews" className="transition hover:text-[#0b817f]">
              후기
            </a>
            <a href="#contact" className="transition hover:text-[#0b817f]">
              문의
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <MotionButtonLink
              href="#contact"
              aria-label="전화번호 준비 중 안내 영역으로 이동"
              className="hidden rounded-full border border-[#bdd2df] px-4 py-2 text-sm font-bold text-[#173b75] transition hover:border-[#173b75] sm:inline-flex"
            >
              문의 안내
            </MotionButtonLink>
            <AssessmentLink
              aria-label="초기 상담 평가지 작성 페이지로 이동"
              className="rounded-full bg-[#173b75] px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-[#102f61]"
            >
              상담 신청
            </AssessmentLink>
          </div>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-16 pt-12 sm:px-8 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <p className="mb-5 inline-flex rounded-full bg-[#e4f5f3] px-4 py-2 text-sm font-bold text-[#0b817f]">
              아동 발달 평가와 맞춤 치료교육
            </p>
            <h1 className="max-w-2xl text-4xl font-black leading-[1.18] tracking-normal text-[#10265a] sm:text-5xl lg:text-6xl">
              아이의 발달을
              <span className="block text-[#1d86b7]">더 넓고 깊게 살핍니다</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4d5f73]">
              아이의 발달은 한 가지 영역만으로 설명되지 않습니다. 언어,
              인지, 운동, 감각, 사회성 등 전반적인 발달 상태를 체계적으로
              평가하고 아이에게 필요한 맞춤 치료교육을 통해 건강한 성장을
              함께 만들어갑니다.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <AssessmentLink
                aria-label="초기 상담 평가지 작성 페이지로 이동"
                className="inline-flex h-13 items-center justify-center rounded-full bg-[#173b75] px-7 text-base font-extrabold text-white shadow-sm transition hover:bg-[#102f61]"
              >
                상담 신청
              </AssessmentLink>
              <MotionButtonLink
                href="#contact"
                aria-label="전화번호 준비 중 안내 영역으로 이동"
                className="inline-flex h-13 items-center justify-center rounded-full border border-[#bdd2df] bg-white px-7 text-base font-extrabold text-[#173b75] transition hover:border-[#173b75]"
              >
                문의 안내
              </MotionButtonLink>
            </div>
          </Reveal>

          <Reveal className="relative" delay={0.08} distance={16} scale={0.98}>
            <div className="relative min-h-[360px] overflow-hidden rounded-[8px] border border-[#dde8ee] bg-white shadow-[0_18px_50px_rgba(18,32,68,0.12)] sm:min-h-[460px] lg:min-h-[560px]">
              <Image
                src="/assets/center-lobby2.jpeg"
                alt="미래아이 심리발달 클리닉 로비"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute bottom-5 left-5 max-w-[260px] rounded-[8px] bg-white/94 p-4 shadow-[0_16px_40px_rgba(18,32,68,0.16)]">
              <p className="text-sm font-extrabold text-[#173b75]">
                편한몸, 편한마음으로 시작하는 발달치료
              </p>
              <p className="mt-2 text-sm leading-6 text-[#5b6777]">
                상담 전 5분 문진으로 아이의 현재 상태를 먼저 알려주세요.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[#d8e6ed] bg-white">
        <Reveal className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0b817f]">
                Initial Assessment
              </p>
              <h2 className="mt-3 text-2xl font-black text-[#10265a] sm:text-3xl">
                상담 전, 간단한 문진으로 아이의 상태를 먼저 알려주세요
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[#56677a]">
                약 5분 정도 소요되는 아동 발달 초기 상담 평가지입니다.
                작성 내용은 상담 목적에만 사용되며, 제출 후 상담과 평가 방향을
                잡는 참고 자료로 활용됩니다.
              </p>
            </div>
            <AssessmentLink
              aria-label="초기 상담 평가지 작성 페이지로 이동"
              className="inline-flex h-13 items-center justify-center rounded-full bg-[#f2a51f] px-7 text-base font-extrabold text-[#122044] transition hover:bg-[#e19616]"
            >
              초기 상담 평가지 작성하기
            </AssessmentLink>
          </div>
          <div className="mt-8 grid gap-3 border-t border-[#d8e6ed] pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item}
                className="rounded-[8px] border border-[#d8e6ed] bg-[#fbfaf7] px-4 py-3 text-sm font-extrabold text-[#173b75]"
              >
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:py-24">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0b817f]">
            Support
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#10265a] sm:text-4xl">
            아이에게 필요한 발달 지원을 함께 찾아갑니다
          </h2>
        </Reveal>
        <RevealGroup className="mt-10 grid gap-4 md:grid-cols-3">
          {supportCards.map((card, index) => (
            <RevealArticle
              key={card.title}
              className="rounded-[8px] border border-[#d8e6ed] bg-white p-6 shadow-sm"
            >
              <span className="text-sm font-black text-[#1d86b7]">
                0{index + 1}
              </span>
              <h3 className="mt-6 text-xl font-black text-[#10265a]">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[#56677a]">
                {card.body}
              </p>
            </RevealArticle>
          ))}
        </RevealGroup>
      </section>

      <section id="programs" className="scroll-mt-24 bg-[#eff8f7]">
        <div className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0b817f]">
              Program
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#10265a] sm:text-4xl">
              아이마다 다른 가능성, 미래아이가 함께 키워갑니다
            </h2>
            <p className="mt-5 text-base leading-7 text-[#56677a]">
              아이의 강점과 발달 속도에 맞춘 다양한 치료 프로그램을 통해
              스스로 성장할 수 있는 힘을 길러줍니다.
            </p>
          </Reveal>
          <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <RevealArticle
                key={program.title}
                className="flex min-h-[300px] flex-col rounded-[8px] border border-[#d8e6ed] bg-white p-6 shadow-sm"
              >
                <ProgramIcon name={program.icon} />
                <h3 className="text-xl font-black text-[#10265a]">
                  {program.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#56677a]">
                  {program.body}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {program.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#e4f5f3] px-3 py-1 text-xs font-extrabold text-[#0b817f]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </RevealArticle>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0b817f]">
              Therapist
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#10265a] sm:text-4xl">
              아이를 함께 바라보는 선생님들
            </h2>
            <p className="mt-5 text-base leading-7 text-[#56677a]">
              원장님과 분야별 치료사가 함께 아이의 말, 감각, 생각, 놀이와
              관계를 살핍니다. 원장 초진과 분야별 치료팀이 아이의 발달 흐름을
              함께 살피고, 평가 결과에 맞춰 필요한 치료교육 방향을 안내합니다.
            </p>
          </Reveal>
          <RevealGroup className="grid gap-4 sm:grid-cols-2" delayChildren={0.08}>
            {teamCards.map((card) => (
              <RevealArticle
                key={card.title}
                className="rounded-[8px] border border-[#d8e6ed] bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-black text-[#10265a]">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#56677a]">
                  {card.body}
                </p>
              </RevealArticle>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="border-y border-[#d8e6ed] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0b817f]">
              Therapist
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#10265a] sm:text-4xl">
              미래아이 선생님을
              <span className="block">소개합니다</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-[#56677a]">
              아이의 말, 감각, 생각, 놀이와 관계를 함께 살피는 선생님들입니다.
            </p>
          </Reveal>
          <RevealGroup
            className="-mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 [scrollbar-color:#bdd2df_transparent] [scrollbar-width:thin] sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0"
            delayChildren={0.08}
          >
            {therapistProfiles.map((therapist) => (
              <RevealArticle
                key={therapist.name}
                className="flex w-[258px] shrink-0 snap-start flex-col rounded-[8px] border border-[#d8e6ed] bg-[#fbfaf7] p-4 shadow-sm sm:w-[292px]"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] border border-[#d8e6ed] bg-white">
                  <Image
                    src={therapist.image}
                    alt={`${therapist.name} 임시 프로필 이미지`}
                    fill
                    unoptimized
                    sizes="292px"
                    className="object-cover"
                  />
                </div>
                <span className="mt-5 inline-flex w-fit rounded-full bg-[#e4f5f3] px-3 py-1 text-xs font-extrabold text-[#0b817f]">
                  {therapist.field}
                </span>
                <h3 className="mt-3 text-xl font-black text-[#10265a]">
                  {therapist.name}
                </h3>
                <p className="mt-3 text-base leading-7 text-[#56677a]">
                  {therapist.intro}
                </p>
              </RevealArticle>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:py-24">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0b817f]">
              Process
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#10265a] sm:text-4xl">
              아이에게 필요한 치료 방향을 함께 찾아갑니다
            </h2>
          </Reveal>
          <RevealGroup className="mt-12 grid gap-5 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <RevealArticle
                key={step.title}
                className="rounded-[8px] border border-[#d8e6ed] bg-[#fbfaf7] p-6"
              >
                <span className="text-sm font-black text-[#d71f39]">
                  STEP {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-black text-[#10265a]">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#56677a]">
                  {step.body}
                </p>
              </RevealArticle>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:py-24">
        <Reveal className="rounded-[8px] bg-[#173b75] p-7 text-white sm:p-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-8" distance={16}>
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#f2c85b]">
              Assessment Package
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              편한몸, 편한마음으로 시작하는 발달치료
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[#dbe7f2]">
              아이의 발달이 걱정되는 순간, 부모님이 망설이지 않고 상담과
              평가를 시작할 수 있도록 초기 발달 평가 패키지를 제공합니다.
            </p>
            <p className="mt-7 text-xl font-black leading-9 text-white">
              원장님 초진 + 보호자 체크리스트 + 심층 검사 + 해석상담 + 1회 치료
            </p>
            <p className="mt-2 text-3xl font-black text-[#f2c85b]">
              총 60,000원
            </p>
            <p className="mt-3 text-sm font-bold leading-6 text-[#dbe7f2]">
              구성과 금액은 상담 시 최종 안내됩니다.
            </p>
          </div>
          <AssessmentLink
            aria-label="초기 상담 평가지 작성 페이지로 이동"
            className="mt-8 inline-flex h-13 items-center justify-center rounded-full bg-white px-7 text-base font-extrabold text-[#173b75] transition hover:bg-[#f4f7fb] lg:mt-0"
          >
            상담 신청
          </AssessmentLink>
        </Reveal>
      </section>

      <section id="reviews" className="scroll-mt-24 bg-[#fbf2eb]">
        <div className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:py-24">
          <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0b817f]">
                Review
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#10265a] sm:text-4xl">
                아이의 변화를 함께 확인한 보호자 이야기
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#56677a]">
              보호자들이 자주 궁금해하는 변화와 상담 경험을 예시로 정리했습니다.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map((review) => (
              <RevealArticle
                key={review.title}
                className="rounded-[8px] border border-[#ead8ce] bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-black leading-7 text-[#10265a]">
                  {review.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#56677a]">
                  {review.body}
                </p>
              </RevealArticle>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-18 text-center sm:px-8 lg:py-24">
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0b817f]">
          Contact
        </p>
        <h2 className="mt-4 text-3xl font-black leading-tight text-[#10265a] sm:text-5xl">
          아이의 작은 신호에도,
          <span className="block">함께 마음을 기울입니다</span>
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#56677a]">
          원장님과 다양한 치료사들이 함께 아이를 바라보며 보호자님의 마음까지
          다정하게 헤아립니다.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <AssessmentLink
            aria-label="초기 상담 평가지 작성 페이지로 이동"
            className="inline-flex h-13 items-center justify-center rounded-full bg-[#173b75] px-8 text-base font-extrabold text-white shadow-sm transition hover:bg-[#102f61]"
          >
            상담 신청하기
          </AssessmentLink>
          <span className="inline-flex h-13 items-center justify-center rounded-full border border-[#bdd2df] bg-white px-8 text-base font-extrabold text-[#173b75]">
            전화번호 준비 중
          </span>
        </div>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#56677a]">
          전화번호 확정 전까지 상담 신청서를 남겨주시면 확인 후 상담 안내를
          도와드립니다.
        </p>
      </section>

      <footer className="border-t border-[#d8e6ed] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm leading-6 text-[#56677a] sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-bold text-[#10265a]">
            편한몸 의원 부설 미래아이 심리발달 클리닉
          </p>
          <p>주소, 운영 시간, 전화번호는 확정 후 반영 예정입니다.</p>
        </div>
      </footer>
    </main>
  );
}
