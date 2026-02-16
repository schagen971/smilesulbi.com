import React from 'react';
import { Star, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="relative rounded-[1.5rem] overflow-hidden bg-gray-900 h-[600px] md:h-[700px]">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="/about-bg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Light Black Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10"></div>

        {/* Content Wrapper */}
        <div className="absolute inset-0 flex items-end md:items-center z-30 pointer-events-none">
          <div className="w-full mx-auto px-8 md:px-16 py-12 md:py-0 grid md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4 md:mb-12 pointer-events-auto md:pl-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 w-fit mb-2">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                <span className="text-blue-100 text-sm font-medium">
                  Professional Service
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-[48px] font-semibold text-white leading-[1.3] tracking-tighter">
                스마일설비 <br />
                누수탐지 · 하수구막힘
              </h1>
              <p className="text-blue-100 text-base md:text-lg max-w-md leading-relaxed font-light">
                전문가의 손길로 배관/누수 고민을
                <br className="md:hidden" />
                한 번에 해결하세요.
                <br className="hidden md:block" />
                친절한 상담, 확실한 시공,
                <br className="md:hidden" />
                합리적인 비용을 약속드립니다.
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-4">
                <a
                  href="tel:010-7537-1414"
                  className="bg-white text-brand-blue hover:bg-blue-50 px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  전화문의 : 010-7537-1414
                </a>
                <Link
                  href="#services"
                  className="text-white hover:text-blue-200 transition-colors flex items-center gap-2 group"
                >
                  서비스 보기
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-3 mt-8 bg-black/20 backdrop-blur-md border border-white/5 p-4 rounded-2xl w-fit">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-blue-400 fill-blue-400" />
                  <span className="text-white font-bold">4.9</span>
                  <span className="text-blue-200/60 text-xs">
                    (4,234+ 리뷰)
                  </span>
                </div>
                <span className="text-blue-100/80 text-xs">
                  고객 만족도 1위 업체
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
