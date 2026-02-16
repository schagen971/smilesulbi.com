import React from 'react';
import { Sparkles } from 'lucide-react';
import { SectionTag } from './ui/SectionTag';

const services = [
  {
    title: '고압 세척 · 하수구 뚫음',
    desc: '기름때와 슬러지로 꽉 막힌 배관을 강력한 고압수로 뻥 뚫어드립니다. 타 업체가 포기한 현장도 환영합니다.',
    buttonText: '무료 견적 문의',
    image:
      'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?fm=jpg&q=60&w=3000&auto=format&fit=crop',
  },
  {
    title: '초정밀 누수 탐지',
    desc: '청음식·가스식 최신 장비로 미세한 누수 지점을 정확히 포착합니다. 못 찾으면 비용을 받지 않겠습니다.',
    buttonText: '보험 처리 상담',
    image:
      'https://images.unsplash.com/photo-1513827574967-e763dd0bc329?fm=jpg&q=60&w=3000&auto=format&fit=crop',
  },
  {
    title: '각종 배관 설비공사',
    desc: '노후 배관 교체, 언수도 녹임, 수전 교체 등 모든 설비 작업. 거품 없는 정직한 가격으로 튼튼하게 시공합니다.',
    buttonText: '전화 상담 연결',
    image:
      'https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2684&auto=format&fit=crop',
  },
];

export const Services: React.FC = () => {
  return (
    <section
      className="py-20 px-4 md:px-8 max-w-[1400px] mx-auto my-8"
      id="services"
    >
      <div className="bg-white rounded-[3rem] py-20 px-8 md:py-24 md:px-16">
        <div className="max-w-3xl mb-16 md:pl-8">
          <SectionTag
            label="서비스"
            icon={<Sparkles className="w-4 h-4" />}
            className="mb-6"
          />
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-6 leading-[1.3] tracking-tight">
            믿고 맡길 수 있는
            <br />
            완벽한 설비 솔루션
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            스마일설비는 가정집부터 상가까지, 물이 새거나 막힌 곳이라면
            <br className="hidden md:block" />
            어디든 달려갑니다. 최신 장비와 실패 없는 기술로
            <br className="hidden md:block" />
            문제를 근본적으로 해결해 드립니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:pl-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative h-[500px] rounded-[1.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Darker, richer overlay with Blue tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20 opacity-95 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Subtle border for premium feel */}
              <div className="absolute inset-0 border border-white/10 rounded-[1.5rem] pointer-events-none"></div>

              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-bold text-white mb-3 shadow-sm tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <a
                  href="tel:010-7537-1414"
                  className="bg-brand-blue/90 hover:bg-brand-blue text-white backdrop-blur-md border border-white/10 px-6 py-4 rounded-xl text-sm font-semibold transition-all w-full flex items-center justify-center gap-2 group/btn shadow-lg"
                >
                  {service.buttonText}
                  <Sparkles className="w-4 h-4 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
