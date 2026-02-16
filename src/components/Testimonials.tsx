import React from 'react';
import { MessageSquare, Star } from 'lucide-react';
import { SectionTag } from './ui/SectionTag';

const testimonials = [
  {
    quote:
      '아랫집 천장이 젖었다고 연락 와서 식겁했는데... 사장님이 오셔서 누수 지점 딱 잡아주셨습니다. 일상배상책임 보험 청구 서류까지 알아서 싹 만들어주셔서 돈 굳었네요. 감사합니다.',
    name: '김포 풍무동 김*수 님',
    rating: 5.0,
  },
  {
    quote:
      '싱크대 물이 역류해서 며칠 고생하다 불렀어요. 내시경으로 배관 속 기름 덩어리 확인시켜 주시고 고압세척으로 뻥 뚫어주셨습니다. 속이 다 시원합니다.',
    name: '서울 강서구 이*진 님',
    rating: 5.0,
  },
  {
    quote:
      '동네 업체 불렀다가 원인 못 찾겠다고 출장비만 받고 갔는데, 스마일설비는 장비가 좋아서 금방 찾으시네요. 뒷정리랑 마감까지 깔끔하게 해주셔서 만족합니다.',
    name: '인천 서구 박*호 님',
    rating: 5.0,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section
      className="py-20 px-4 md:px-8 max-w-[1400px] mx-auto my-8"
      id="testimonial"
    >
      <div className="bg-white rounded-[3rem] py-20 px-8 md:py-24 md:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:pl-8">
          <div>
            <SectionTag
              label="고객 후기"
              icon={<MessageSquare className="w-4 h-4" />}
              className="mb-6"
            />
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-4 leading-[1.3]">
              고객 후기
            </h2>
            <p className="text-gray-500 max-w-lg text-base leading-relaxed">
              "스마일설비를 이용하신 고객님들의
              <br />
              100% 솔직한 이야기입니다."
            </p>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-full">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="font-bold text-gray-900">4.9 / 5.0</span>
            </div>
            <span className="text-gray-500 text-sm">(520+ 실제 시공 건수)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:pl-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="mb-8">
                <p className="text-gray-800 text-base font-normal leading-relaxed">
                  "{item.quote}"
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-bold text-gray-900 text-sm mb-2">
                  {item.name}
                </h4>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 text-orange-400 fill-orange-400"
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">
                    {item.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
