import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../../components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h2>This is home page </h2>
      <Header></Header>
    </div>
    

  )
}
