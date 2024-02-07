import { RandomFox } from '@/components/RandomFox';
import Head from 'next/head';
import { MouseEventHandler, useState } from 'react';

const random = (): number => Math.floor(Math.random() * 123) + 1;
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15);
};
type ImageItem = { id: string; url: string };
const randomImg = () => `https://randomfox.ca/images/${random()}.jpg`;
export default function Home() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    const newImageItem: ImageItem = {
      id: generateId(),
      url: randomImg()
    };
    setImages((images) => [newImageItem, ...images]);
  };
  return (
    <div>
      <Head>
        <title>React app</title>
      </Head>
      <main>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
        <button onClick={addNewFox}>Add new fox</button>
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
