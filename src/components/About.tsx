import React from 'react';
import { Calendar, ShieldCheck, Coins, Smile, FileText } from 'lucide-react';
import { SectionTag } from './ui/SectionTag';
import Image from 'next/image';

export const About: React.FC = () => {
  const features = [
    { text: '실패 없는 완벽 시공', icon: ShieldCheck },
    { text: '부담 없는 합리적 가격', icon: Coins },
    { text: '친절하고 꼼꼼한 서비스', icon: Smile },
    { text: '복잡한 보험처리 해결', icon: FileText },
  ];

  return (
    <section
      className="py-20 px-4 md:px-8 max-w-[1400px] mx-auto my-8"
      id="about"
    >
      <div className="relative rounded-[3rem] overflow-hidden py-20 px-8 md:py-24 md:px-16 text-white min-h-[600px] flex items-center">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2940&auto=format&fit=crop"
          alt="Clean Modern Bathroom"
          fill
          className="object-cover"
          sizes="100vw"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 z-10"></div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center w-full relative z-20">
          {/* Left: Text Content */}
          <div className="space-y-6 md:pl-8">
            <SectionTag
              label="회사 소개"
              icon={<Calendar className="w-4 h-4" />}
              variant="blue"
              className="mb-2 border-white/20 bg-white/10 text-white"
            />

            <h2 className="text-2xl md:text-4xl font-semibold leading-[1.3]">
              골치 아픈 배관 문제,
              <br />
              <span className="text-blue-200">확실한 기술</span>로<br />
              해결합니다
            </h2>

            <p className="text-blue-100 text-base leading-relaxed">
              스마일설비는 단순한 수리가 아닌,
              <br className="hidden md:block" />
              고객님의 쾌적한 일상을 되찾아 드립니다.
            </p>

            <p className="text-blue-100 text-base leading-relaxed">
              타 업체가 포기한 현장도 해결하는 전문성, 거품 없는 정직한 가격,
              <br className="hidden md:block" />
              그리고 꼼꼼하고 친절한 서비스로 보답하겠습니다.
            </p>
          </div>

          {/* Right: Features Grid */}
          <div className="grid grid-cols-1 gap-8 md:pl-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <feature.icon className="w-8 h-8 text-blue-200 group-hover:text-white transition-colors duration-300" />
                  <span className="text-white font-medium text-lg group-hover:text-blue-200 transition-colors duration-300">
                    {feature.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
