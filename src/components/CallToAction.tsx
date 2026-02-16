import React from 'react';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-8 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="relative rounded-[2.5rem] overflow-hidden h-[500px] md:h-[600px] group">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop"
          alt="Clean home"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent">
          <div className="h-full flex flex-col justify-center p-8 md:p-16 max-w-4xl md:pl-28">
            <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6 leading-[1.3]">
              골치 아픈 배관 문제, <br />
              지금 바로 끝내드리겠습니다
            </h2>
            <p className="text-gray-200 text-base mb-8 max-w-xl leading-relaxed">
              정확한 원인 파악부터 확실한 시공, 그리고 보험 처리 지원까지.
              <br className="hidden md:block" />
              스마일설비가 고객님의 고민을 완벽하게 해결해 드립니다.
            </p>
            <a
              href="tel:010-7537-1414"
              className="bg-brand-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full font-medium w-fit transition-all hover:scale-105"
            >
              전화문의 : 010-7537-1414
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
