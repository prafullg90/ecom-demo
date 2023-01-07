import Head from 'next/head';
import PageLayout from '../components/PageLayout';
export default function Home() {
  return (
    <>
      <Head>
        <title>My Cart</title>
        <meta name='description' content='My Cart Demo App' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageLayout />
    </>
  );
}
