import { useEffect, useRef, useState } from 'react';

type Props = { image: string };
export const RandomFox = ({ image }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [src, setsrc] = useState(
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
  );
  useEffect(() => {
    /**The IntersectionObserver is used to detect when the observed element enters or exits the viewport. */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setsrc(image);
        }
      });
    });
    if (node.current) observer.observe(node.current);
    // disconected
    return () => {
      observer.disconnect();
    };
  }, [image]);

  return <img ref={node} src={src} width={320} height='auto' className='rounded bg-gray-300' />;
};
