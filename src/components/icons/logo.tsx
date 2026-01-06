import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2 L2 12 L12 22 L22 12 Z" fill="hsl(var(--primary))" />
      <path d="M7 12 L12 7 L17 12 L12 17 Z" stroke="hsl(var(--primary-foreground))" />
    </svg>
  );
}
