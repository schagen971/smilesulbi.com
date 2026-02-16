import React from 'react';
import { ListChecks } from 'lucide-react';
import { SectionTag } from './ui/SectionTag';
import Image from 'next/image';

const steps = [
  {
    num: '01',
    title: '무료 상담 & 긴급 출동',
    desc: '문제가 생긴 즉시 전화 주시면(010-7537-1414), 친절하게 상담 후 가장 빠른 시간에 현장으로 달려갑니다.',
  },
  {
    num: '02',
    title: '정밀 진단 & 원인 파악',
    desc: '도착 즉시 첨단 탐지 장비로 누수/막힘의 정확한 원인을 찾아냅니다. 원인을 못 찾으면 비용은 0원입니다.',
  },
  {
    num: '03',
    title: '확실한 시공 & 해결',
    desc: '과잉 시공 없이 꼭 필요한 작업만 진행합니다. 고압 세척과 배관 공사로 문제를 뿌리 뽑습니다.',
  },
  {
    num: '04',
    title: 'A/S 보장 & 보험 처리',
    desc: '작업 후 고객님 확인은 필수! 복잡한 누수 보험 청구 서류까지 꼼꼼하게 챙겨드리고 웃으며 철수합니다.',
  },
];

export const Process: React.FC = () => {
  return (
    <section
      className="py-20 px-4 md:px-8 max-w-[1400px] mx-auto my-8"
      id="pricing"
    >
      <div className="relative rounded-[3rem] overflow-hidden py-20 px-8 md:py-24 md:px-16 text-white min-h-[600px] flex flex-col justify-center">
        {/* Background Image - Clean Abstract Texture */}
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2670&auto=format&fit=crop"
          alt="Clean Abstract Background"
          fill
          className="object-cover"
        />

        {/* Premium Blue Overlay - Lighter for visibility */}
        <div className="absolute inset-0 bg-brand-blue/60 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-blue/40 to-transparent z-10"></div>

        <div className="relative z-20">
          <div className="max-w-2xl mb-16 md:pl-8">
            <SectionTag
              label="진행 과정"
              icon={<ListChecks className="w-4 h-4" />}
              variant="blue"
              className="mb-6 border-white/20 bg-white/10 text-white"
            />
            <h2 className="text-2xl md:text-4xl font-semibold mb-6 leading-[1.3]">
              복잡한 배관 문제,
              <br className="hidden md:block" />
              4단계로 시원하게 해결!
            </h2>
            <p className="text-blue-100 text-base leading-relaxed">
              다급한 전화 한 통이면 끝납니다.
              <br className="hidden md:block" />
              상담부터 마무리 보험 처리까지 스마일설비가 책임집니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-x-24 md:gap-y-16 md:pl-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col gap-4 group">
                <span className="text-6xl font-light text-blue-200/40 group-hover:text-white transition-colors duration-300">
                  {step.num}
                </span>
                <h3 className="text-2xl font-medium">{step.title}</h3>
                <p className="text-blue-100 leading-relaxed max-w-md">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
