import { ReactNode } from 'react';
import Head from 'next/head';
import styles from './MainLaayout.module.css';
import { Navbar } from '../Navbar';


type Props = {
  children: ReactNode
}

export const MainLayout = ({children}: Props) => {
    return (
        <>
          <Head>
            <title>Home Sebastian</title>
            <meta name="description" content="Home page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar/>
          <main className={styles.main}>
            {children}
          </main>
        </>
      )
}
