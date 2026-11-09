import React, { useEffect, useRef, useState } from 'react';

export type TextRevealEffect =
  | 'blur'        // Effect A: Blur to Focus
  | 'fade-up'     // Effect B: Elegant Fade Up
  | 'words'       // Effect C: Word-by-Word Stagger
  | 'chars'       // Effect D: Character Precision Reveal
  | 'mask'        // Effect E: Mask Reveal (Clip-Path Slide)
  | 'soft-scale'  // Effect F: Soft Focus Scale
  | 'paragraph'   // Effect G: Staggered Paragraph Reveal
  | 'split';      // Effect H: Split Heading Reveal

interface TextRevealProps {
  children: React.ReactNode;
  effect?: TextRevealEffect;
  className?: string;
  delayMs?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

/**
 * TextReveal: Convertix_studio High-Performance Text Reveal Engine
 * Supports 8 distinct clinical visual animations with zero layout shift,
 * native IntersectionObserver triggering, and complete prefers-reduced-motion fallback.
 */
export const TextReveal: React.FC<TextRevealProps> = ({
  children,
  effect = 'fade-up',
  className = '',
  delayMs = 0,
  as: Component = 'div',
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If user prefers reduced motion, show immediately without observer delay
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    // Defensive check for IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentElem = ref.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, []);

  // For Effect C (Word-by-word) when children is a simple string
  if (effect === 'words' && typeof children === 'string') {
    const words = children.split(' ');
    return (
      <Component
        ref={ref as any}
        className={`${className} inline-block`}
        style={{ willChange: 'transform, opacity' }}
      >
        {words.map((word, idx) => (
          <span
            key={idx}
            className={`inline-block mr-[0.25em] ${
              isVisible ? 'ldc-anim-word' : 'opacity-0'
            }`}
            style={{
              animationDelay: isVisible ? `${delayMs + idx * 45}ms` : '0ms',
            }}
          >
            {word}
          </span>
        ))}
      </Component>
    );
  }

  // For Effect D (Character reveal) when children is a short string or acronym (e.g. MFSP™, BOSYNC™)
  if (effect === 'chars' && typeof children === 'string') {
    const chars = Array.from(children);
    return (
      <Component
        ref={ref as any}
        className={`${className} inline-block`}
        style={{ willChange: 'transform, opacity' }}
      >
        {chars.map((ch, idx) => (
          <span
            key={idx}
            className={`inline-block ${
              isVisible ? 'ldc-anim-char' : 'opacity-0'
            }`}
            style={{
              animationDelay: isVisible ? `${delayMs + idx * 30}ms` : '0ms',
            }}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </span>
        ))}
      </Component>
    );
  }

  // Animation CSS class mappings for Effects A, B, E, F, G, H
  const effectClassMap: Record<TextRevealEffect, string> = {
    blur: 'ldc-anim-blur',
    'fade-up': 'ldc-anim-fade-up',
    words: 'ldc-anim-word',
    chars: 'ldc-anim-char',
    mask: 'ldc-anim-mask',
    'soft-scale': 'ldc-anim-soft-scale',
    paragraph: 'ldc-anim-paragraph',
    split: 'ldc-anim-split',
  };

  const animClass = effectClassMap[effect] || 'ldc-anim-fade-up';

  return (
    <Component
      ref={ref as any}
      className={`${className} ${
        isVisible ? animClass : 'opacity-0'
      }`}
      style={{
        animationDelay: isVisible && delayMs > 0 ? `${delayMs}ms` : undefined,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </Component>
  );
};
