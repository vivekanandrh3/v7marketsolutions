'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type TypewriterProps = {
  children: React.ReactNode;
  className?: string;
};

export function Typewriter({ children, className }: TypewriterProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const fullTextRef = useRef('');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Extract text content from children
    if (typeof children === 'string') {
      fullTextRef.current = children;
    } else {
      let text = '';
      React.Children.forEach(children, (child) => {
        if (typeof child === 'string') {
          text += child;
        } else if (React.isValidElement(child) && typeof child.props.children === 'string') {
          text += child.props.children;
        }
      });
      fullTextRef.current = text;
    }
    setDisplayedText(fullTextRef.current);
  }, [children]);

  useEffect(() => {
    if (isHovering) {
      let index = 0;
      setDisplayedText(''); // Clear text on hover start
      intervalRef.current = setInterval(() => {
        if (index < fullTextRef.current.length) {
          setDisplayedText((prev) => prev + fullTextRef.current[index]);
          index++;
        } else {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
        }
      }, 30);
    } else {
      // When not hovering, show the full text
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setDisplayedText(fullTextRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovering]);

  return (
    <p
      className={className}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering ? (
        <span className="font-bold italic">{displayedText}</span>
      ) : (
        children
      )}
    </p>
  );
}
