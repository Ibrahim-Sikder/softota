import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Places from '../../components/Places/Places'
import Travel from '../../components/Travel/Travel'
import Trending from '../../components/Trending/Trending'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Places></Places>
      <Travel></Travel>
      <Trending></Trending>
    </div>
    

  )
}
