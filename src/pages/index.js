import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Places from '../../components/Places/Places'
import Travel from '../../components/Travel/Travel'
import Trending from '../../components/Trending/Trending'
import Mission from '../../components/Mission/Mission'
import Customer from '../../components/Customer/Customer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Places></Places>
      <Travel></Travel>
      <Trending></Trending>
      <Mission></Mission>
      <Customer></Customer>
      
    </div>
    

  )
}
