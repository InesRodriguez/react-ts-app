import { RandomFox } from '@/components/RandomFox';
import Head from 'next/head';

const random = (): number => Math.floor(Math.random() * 123) + 1;
export default function Home() {
  return (
    <div>
      <Head>
        <title>React app</title>
      </Head>
      <main>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
        <RandomFox image={`https://randomfox.ca/images/${random()}.jpg`} />
      </main>
      <footer></footer>
    </div>
  );
}
