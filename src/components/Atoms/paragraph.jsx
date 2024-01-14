import React from 'react';

export default function Paragraph({ children, fontSize, color, style, highlight }) {
  const highlightStyle = highlight
    ? `bg-gradient-to-r from-yellow-300 to-orange-500 text-transparent bg-clip-text`
    : '';

  return (
    <p
      className={`font-serif ${
        color ? color : "text-gray-700"
      } ${fontSize ? `text-${fontSize}` : "text-base"} leading-6 ${highlightStyle} ${style}`}
    >
      {children}
    </p>
  );
}
