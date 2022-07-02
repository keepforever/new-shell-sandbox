import React from "react";

type Args = {
  ref: React.RefObject<HTMLDivElement>;
  callback: (entries: IntersectionObserverEntry[]) => void;
};

export const useStickyHasStuck = ({ ref, callback }: Args) => {
  React.useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      threshold: [1],
    });
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
};
