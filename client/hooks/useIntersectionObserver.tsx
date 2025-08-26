import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = ({
  threshold = 0.1,
  root = null,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true,
}: UseIntersectionObserverProps = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        
        if (isElementIntersecting && triggerOnce && !hasTriggered) {
          setIsIntersecting(true);
          setHasTriggered(true);
        } else if (!triggerOnce) {
          setIsIntersecting(isElementIntersecting);
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, root, rootMargin, triggerOnce, hasTriggered]);

  return { ref, isIntersecting };
};

export default useIntersectionObserver;
