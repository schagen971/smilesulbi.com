import React from 'react';
import { Facebook, Twitter, Instagram, Dribbble } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-8 px-4 md:px-8 overflow-hidden rounded-t-[3rem] mt-8 mx-2 md:mx-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-6">스마일설비</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              하수구막힘, 누수탐지, 배관공사 전문.
              <br />
              고객님의 고민을 신속하게 해결해 드립니다.
            </p>
          </div>

          <div className="col-span-1 md:col-span-3 grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-6">Company</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>상호명: 하수구막힘</li>
                <li>대표: 김성진</li>
                <li>사업자등록번호: 467-08-02089</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Contact</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>Tel: 010-7537-1414</li>
                <li>Email: haha7854@naver.com</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Address</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                경기도 김포시 풍무로68번길
                <br />
                한화유로메트로 211동 604호
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-16 left-0 right-0 flex justify-center opacity-10 pointer-events-none select-none">
          <span className="text-[12vw] md:text-[15vw] font-black leading-none tracking-tighter text-white/20">
            스마일설비
          </span>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center items-center text-xs text-gray-500">
          <p>©2025 스마일설비. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};
