import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'


export default function Home() {
  return (
   <MainLayout>
    <div className="description">
          <h1>
            Ir a <Link href='/about'>About</Link>
          </h1>
          <p>
            Get started by editing&nbsp;
            <code className="code">pages/index.tsx</code>
          </p>
        </div>
   </MainLayout>
  )
}
