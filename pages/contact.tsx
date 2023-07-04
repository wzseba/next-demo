import Head from 'next/head'

import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <h1>
            Ir a <Link href='/'>Home</Link>
          </h1>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/contact.tsx</code>
          </p>
        </div>
      </main>
    </>
  )
}