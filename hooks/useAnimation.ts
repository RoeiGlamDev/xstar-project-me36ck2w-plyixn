import { useEffect, useRef } from 'react';

/
 * Custom hook for handling animations in the luxury LRP cosmetics website.
 * This hook provides a way to create elegant and luxurious animations
 * that enhance the user experience while browsing our high-end cosmetics.
 *
 * @returns {Object} - An object containing animation properties and methods.
 */
export interface AnimationProps {
  isVisible: boolean;
  ref: React.RefObject<HTMLDivElement>;
  animate: () => void;
}

export const useAnimation = (): AnimationProps => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useRef<boolean>(false);

  /
   * Triggers the animation when the component is in view.
   */
  const animate = () => {
    if (ref.current) {
      isVisible.current = true;
      ref.current.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      ref.current.style.transform = 'translateY(0)';
      ref.current.style.opacity = '1';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top } = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the element is in view
        if (top < windowHeight * 0.8 && !isVisible.current) {
          animate();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isVisible: isVisible.current, ref, animate };
};