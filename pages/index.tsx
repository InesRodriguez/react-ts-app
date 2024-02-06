import { RandomFox } from '@/components/RandomFox';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>React app</title>
      </Head>
      <main>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
        <RandomFox />
      </main>
      <footer></footer>
    </div>
  );
}
