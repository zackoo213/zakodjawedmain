import React from 'react';

export const ThreeStarsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg className="" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Large Left Star */}
    <path d="M9 2L10.5 7.5L16 9L10.5 10.5L9 16L7.5 10.5L2 9L7.5 7.5L9 2Z" />
    {/* Medium Top Right Star */}
    <path d="M19 4L19.8 6.2L22 7L19.8 7.8L19 10L18.2 7.8L16 7L18.2 6.2L19 4Z" />
    {/* Medium Bottom Right Star */}
    <path d="M17 14L17.8 16.2L20 17L17.8 17.8L17 20L16.2 17.8L14 17L16.2 16.2L17 14Z" />
  </svg>
);

export const OneStarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
  </svg>
);

export const TwoStarsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Large Star */}
    <path d="M8 4L10 10L16 12L10 14L8 20L6 14L0 12L6 10L8 4Z" />
    {/* Small Star */}
    <path d="M19 9L19.8 11.2L22 12L19.8 12.8L19 15L18.2 12.8L16 12L18.2 11.2L19 9Z" />
  </svg>
);
