import type { NextPage } from 'next';
import Head from 'next/head';

import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>KZJournal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <Header />
    </div>
  );
};

export default Home;
