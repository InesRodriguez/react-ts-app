import { RandomFox } from '@/components/RandomFox';
import Head from 'next/head';
import { useState } from 'react';

const random = (): number => Math.floor(Math.random() * 123) + 1;
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15);
};
type ImageItem = { id: string; url: string };
export default function Home() {
  const [images, setImages] = useState<ImageItem[]>([
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` }
  ]);
  return (
    <div>
      <Head>
        <title>React app</title>
      </Head>
      <main>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
        {images.map(({ url, id }) => (
          <div key={id} className='p-4'>
            <RandomFox image={url} />
          </div>
        ))}
      </main>
      <footer></footer>
    </div>
  );
}
