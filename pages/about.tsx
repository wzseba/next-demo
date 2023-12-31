
import Link from 'next/link'

import { MainLayout } from '@/components/layouts/MainLayout'
import { OtroLayout } from '@/components/layouts/OtroLayout'


export default function About() {
  return (
   
      <div className="description">
          <h1>
            Ir a <Link href='/'>Home</Link>
          </h1>
          <p>
            Get started by editing&nbsp;
            <code className="code">pages/about.tsx</code>
          </p>
      </div>
 
  )
}

About.getLayout = function getLayout(page: JSX.Element){
  return(
    <MainLayout>
      <OtroLayout>
        {page}
      </OtroLayout>
    </MainLayout>
  )
}
