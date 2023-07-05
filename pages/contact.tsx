import Head from 'next/head'

import { Inter } from 'next/font/google'

import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { MainLayout } from '@/components/layouts/MainLayout'



export default function Contact() {
  return (
    <MainLayout>
      <div className="description">
          <h1>
            Ir a <Link href='/'>Home</Link>
          </h1>
          <p>
            Get started by editing&nbsp;
            <code className="code">pages/contact.tsx</code>
          </p>
        </div>
    </MainLayout>
  )
}