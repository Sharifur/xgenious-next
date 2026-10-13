'use client';

import { useEffect, useRef, useState } from 'react';

// True while the referenced element is within `rootMargin` of the viewport.
// Used to pause looping mockup animations (setInterval → React re-render) while off-screen.
export function useInView<T extends Element>(rootMargin = '200px') {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin });
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return { ref, inView };
}
