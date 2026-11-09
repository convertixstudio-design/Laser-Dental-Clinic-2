import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'aside' | 'span' | 'p' | 'h1' | 'h2' | 'h3';
}

/**
 * Hook for intersection observer triggering
 */
export function useInView(options = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsInView(true);
      return;
    }
    if (!('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }
    const elem = ref.current;
    if (!elem) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(elem);
      }
    }, options);

    observer.observe(elem);
    return () => {
      if (elem) observer.unobserve(elem);
    };
  }, []);

  return { ref, isInView };
}

/**
 * Category A: Page Load Route Transition Animation
 * Applied to route page root wrappers to animate content on route entrance.
 */
export const PageReveal: React.FC<AnimationProps> = ({
  children,
  className = '',
  as: Component = 'div',
}) => {
  const location = useLocation();

  return (
    <Component
      key={location.pathname}
      className={`ldc-anim-page ${className}`}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </Component>
  );
};

/**
 * Category A: Progressive Scroll Reveal
 * Progressively reveals sections with smooth upward movement as user scrolls.
 */
export const ScrollReveal: React.FC<AnimationProps> = ({
  children,
  className = '',
  delayMs = 0,
  as: Component = 'section',
}) => {
  const { ref, isInView } = useInView();

  return (
    <Component
      ref={ref as any}
      className={`${className} ${isInView ? 'ldc-anim-scroll-section' : 'opacity-0'}`}
      style={{
        animationDelay: isInView && delayMs > 0 ? `${delayMs}ms` : undefined,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </Component>
  );
};

/**
 * Category B: Page Load and Pop-up Animation
 * Controlled, elegant pop-up with soft scale and opacity for notices, cards, and highlights.
 */
export const PopupCard: React.FC<AnimationProps> = ({
  children,
  className = '',
  delayMs = 0,
  as: Component = 'div',
}) => {
  const { ref, isInView } = useInView({ threshold: 0.1, rootMargin: '0px' });

  return (
    <Component
      ref={ref as any}
      className={`${className} ${isInView ? 'ldc-anim-popup' : 'opacity-0'}`}
      style={{
        animationDelay: isInView && delayMs > 0 ? `${delayMs}ms` : undefined,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </Component>
  );
};

/**
 * Category C: Zoom Out and Zoom In Animation
 * Controlled optical scaling for clinical visuals, photography, and interactive media.
 */
interface ZoomVisualProps extends AnimationProps {
  direction?: 'in' | 'out';
  interactiveHover?: boolean;
}

export const ZoomVisual: React.FC<ZoomVisualProps> = ({
  children,
  direction = 'in',
  interactiveHover = true,
  className = '',
  delayMs = 0,
  as: Component = 'div',
}) => {
  const { ref, isInView } = useInView({ threshold: 0.15, rootMargin: '0px' });
  const animClass = direction === 'out' ? 'ldc-anim-zoom-out' : 'ldc-anim-zoom-in';

  return (
    <Component
      ref={ref as any}
      className={`${className} ${isInView ? animClass : 'opacity-0'} ${
        interactiveHover ? 'ldc-interactive-zoom' : ''
      }`}
      style={{
        animationDelay: isInView && delayMs > 0 ? `${delayMs}ms` : undefined,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </Component>
  );
};

/**
 * Category D: Fade In and Scale Animation
 * Gradual opacity and gentle scale for headings, text blocks, CTA buttons, and key banners.
 */
export const FadeScale: React.FC<AnimationProps> = ({
  children,
  className = '',
  delayMs = 0,
  as: Component = 'div',
}) => {
  const { ref, isInView } = useInView({ threshold: 0.1, rootMargin: '0px' });

  return (
    <Component
      ref={ref as any}
      className={`${className} ${isInView ? 'ldc-anim-fade-scale' : 'opacity-0'}`}
      style={{
        animationDelay: isInView && delayMs > 0 ? `${delayMs}ms` : undefined,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </Component>
  );
};

/**
 * Category E & F: Stagger Container
 * Orchestrates sequential appearance with controlled delay between siblings.
 * variant='drop-down' -> Category E (subtle drop-down movement)
 * variant='scale'     -> Category F (controlled scaling & opacity)
 */
interface StaggerGroupProps extends AnimationProps {
  variant?: 'drop-down' | 'scale';
  staggerMs?: number; // 100–160ms recommendation
}

export const StaggerGroup: React.FC<StaggerGroupProps> = ({
  children,
  variant = 'scale',
  staggerMs = 120,
  className = '',
  delayMs = 0,
  as: Component = 'div',
}) => {
  const { ref, isInView } = useInView({ threshold: 0.1, rootMargin: '0px' });
  const animClass = variant === 'drop-down' ? 'ldc-anim-drop-down' : 'ldc-anim-stagger-scale';

  return (
    <Component ref={ref as any} className={className}>
      {React.Children.map(children, (child, idx) => {
        if (!React.isValidElement(child)) return child;
        const totalDelay = delayMs + idx * staggerMs;

        return (
          <div
            className={`${isInView ? animClass : 'opacity-0'}`}
            style={{
              animationDelay: isInView ? `${totalDelay}ms` : undefined,
              willChange: 'transform, opacity',
            }}
          >
            {child}
          </div>
        );
      })}
    </Component>
  );
};
