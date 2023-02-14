import Head from 'next/head'
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const style = {
    mainHeading:"text-2xl mt-10",
    subHeading:""
  }

  return (
    <main>
      <h2 className={style.mainHeading}>Upgrade your web development today</h2>
      <h3 className={style.subHeading}>Learn web development using the latest tech</h3>
    </main>
  )
}
