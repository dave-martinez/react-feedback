import Head from 'next/head';
import auth from 'firebase/auth';
import { useAuth } from '../lib/auth';
import styles from '../styles/Home.module.css';

const Home = () => {
  const auth = useAuth();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>React Feedback!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        {auth?.user ? (
          <button onClick={() => auth.signOut()}>Sign out</button>
        ) : (
          <button onClick={() => auth.signInWithGithub()}>Sign in</button>
        )}

        <p>{auth?.user?.email}</p>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
