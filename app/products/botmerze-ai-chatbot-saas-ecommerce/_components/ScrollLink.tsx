'use client';

import { ReactNode, CSSProperties } from 'react';

interface Props {
  href: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export default function ScrollLink({ href, className, style, children }: Props) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <a href={href} className={className} style={style} onClick={handleClick}>
      {children}
    </a>
  );
}
