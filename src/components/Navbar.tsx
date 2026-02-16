'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: '홈', href: '#' },
  { label: '회사 소개', href: '#about' },
  { label: '서비스', href: '#services' },
  { label: '진행 과정', href: '#pricing' },
  { label: '고객 후기', href: '#testimonial' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 pt-4 md:px-8`}
    >
      <div
        className={`mx-auto max-w-7xl bg-brand-dark/90 backdrop-blur-md border border-white/5 rounded-full px-6 py-4 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'shadow-2xl translate-y-2' : ''}`}
      >
        <div className="flex items-center gap-2">
          <Link href="/">
            <span className="text-white font-bold text-xl tracking-wide cursor-pointer">
              스마일설비
            </span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="tel:010-7537-1414"
            className="bg-brand-blue hover:bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
          >
            전화문의 : 010-7537-1414
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-1"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-24 left-4 right-4 bg-brand-dark rounded-3xl p-6 md:hidden shadow-2xl animate-fade-in-down">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-white text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:010-7537-1414"
              className="bg-brand-blue text-center text-white px-6 py-3 rounded-full text-lg font-medium mt-4"
            >
              전화문의 : 010-7537-1414
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
