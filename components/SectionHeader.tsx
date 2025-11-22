import React from 'react';

interface Props {
  title: string;
  number: string;
}

export const SectionHeader: React.FC<Props> = ({ title, number }) => {
  return (
    <div className="flex items-baseline justify-between mb-8 border-b border-neutral-900 dark:border-neutral-700 pb-4 transition-colors duration-300">
      <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 dark:text-neutral-100 uppercase tracking-tight transition-colors duration-300">
        {title}
      </h2>
      <span className="font-mono text-sm md:text-base text-neutral-500 dark:text-neutral-400 transition-colors duration-300">
        {number}
      </span>
    </div>
  );
};