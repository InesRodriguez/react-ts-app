import { RandomFox } from '@/components/RandomFox';
import Head from 'next/head';
import { useState } from 'react';

const random = (): number => Math.floor(Math.random() * 123) + 1;
export default function Home() {
  const [images, setImages] = useState<string[]>([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`
  ]);
  return (
    <div>
      <Head>
        <title>React app</title>
      </Head>
      <main>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
        {images.map((image, index) => (
          <div key={index} className='p-4'>
            <RandomFox image={image} />
          </div>
        ))}
      </main>
      <footer></footer>
    </div>
  );
}
