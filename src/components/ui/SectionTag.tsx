import React from 'react';

interface SectionTagProps {
  label: string;
  icon?: React.ReactNode;
  className?: string;
  variant?: 'light' | 'blue';
}

export const SectionTag: React.FC<SectionTagProps> = ({
  label,
  icon,
  className = '',
  variant = 'light',
}) => {
  const baseStyles =
    'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border';
  const variants = {
    light: 'bg-white border-gray-200 text-gray-700',
    blue: 'bg-blue-500/10 border-blue-400/20 text-white',
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {icon && <span className="w-4 h-4">{icon}</span>}
      {label}
    </div>
  );
};
