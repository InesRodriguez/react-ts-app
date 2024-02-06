import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div>
        <head>
          <title>App React y Typescript</title>
          <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
        </head>
      </div>
      <main>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      </main>
      <footer></footer>
    </>
  );
}
