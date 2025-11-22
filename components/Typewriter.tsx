import React from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 15, delay = 0 }) => {
  return (
    <span className="inline-block">
      {text.split('').map((char, index) => (
        <span
          key={index}
          style={{
            animationName: 'fadeInChar',
            animationDuration: '0.1s',
            animationFillMode: 'forwards',
            animationDelay: `${delay + index * speed}ms`,
            opacity: 0,
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};