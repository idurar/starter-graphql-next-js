import type { NextPage } from 'next';

import Head from 'next/head';

import styles from '@/styles/Home.module.css';
import PlaceList from '@/components/PlaceList';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>updated main page</h1>
        <PlaceList />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className={styles.logo}></span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
