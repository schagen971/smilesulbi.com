'use client';

import React, { useEffect, useRef, useState } from 'react';

const stats = [
  {
    value: '100%',
    label: '해결 보장',
    desc: '원인을 찾지 못하거나 뚫지 못하면 비용을 받지 않습니다. 타 업체가 포기한 현장도 끝까지 추적하여 확실하게 해결합니다.',
    bgImage: '/responsive_light.webp',
  },
  {
    value: 'No.1',
    label: '거품 없는 견적',
    desc: '과잉 진단은 절대 하지 않습니다. 꼭 필요한 시공만 제안하여 고객님의 부담을 덜어드리는 최저가 맞춤 설비를 약속합니다.',
    bgImage: '/seo_optimization.webp',
  },
  {
    value: 'OK',
    label: '완벽한 보험 지원',
    desc: '복잡한 누수 공사비와 아래층 피해 복구 비용, 가지고 계신 일상생활배상책임보험으로 해결되도록 모든 서류를 준비해 드립니다.',
    bgImage: '/shop_admin_page.webp',
  },
];

export const Stats: React.FC = () => {
  const [activeIndices, setActiveIndices] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Determine threshold based on device width - center trigger
    const options = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Triggers when element is in the middle 20% of viewport
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      // Only apply scroll trigger on mobile
      if (window.innerWidth >= 768) return;

      entries.forEach((entry) => {
        const index = Number(entry.target.getAttribute('data-index'));
        if (entry.isIntersecting) {
          setActiveIndices((prev) => new Set(prev).add(index));
        } else {
          setActiveIndices((prev) => {
            const newSet = new Set(prev);
            newSet.delete(index);
            return newSet;
          });
        }
      });
    }, options);

    elementsRef.current.forEach((el) => {
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section className="py-8 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => {
          const isActive = activeIndices.has(idx);
          return (
            <div
              key={idx}
              ref={(el) => {
                elementsRef.current[idx] = el;
              }}
              data-index={idx}
              className={`group relative p-8 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200 h-[320px] flex flex-col justify-end ${
                isActive ? 'shadow-2xl' : ''
              }`}
            >
              {/* Background Image */}
              <div
                className={`absolute inset-0 z-0 transition-opacity duration-500 ${
                  isActive
                    ? 'opacity-100'
                    : 'opacity-40 group-hover:opacity-100'
                }`}
                style={{
                  backgroundImage: `url(${stat.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />

              {/* White/Blue Overlay */}
              <div
                className={`absolute inset-0 z-10 transition-colors duration-500 ${
                  isActive
                    ? 'bg-brand-blue/75'
                    : 'bg-white/90 group-hover:bg-brand-blue/75'
                }`}
              />

              {/* Content */}
              <div
                className={`relative z-20 transition-transform duration-500 ${
                  isActive
                    ? 'translate-y-0'
                    : 'translate-y-2 group-hover:translate-y-0'
                }`}
              >
                <h3
                  className={`text-4xl font-bold mb-2 transition-colors duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-900 group-hover:text-white'
                  }`}
                >
                  {stat.value}
                </h3>
                <h4
                  className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
                    isActive
                      ? 'text-blue-100'
                      : 'text-gray-800 group-hover:text-blue-100'
                  }`}
                >
                  {stat.label}
                </h4>
                <p
                  className={`text-sm leading-relaxed font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-white/90'
                      : 'text-gray-600 group-hover:text-white/90'
                  }`}
                >
                  {stat.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
