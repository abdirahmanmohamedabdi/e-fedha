import Image from 'next/image'
import { Inter } from 'next/font/google'
import Example from './Navbar2'
import Navbar1 from './components/Navbar1'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar1/>
{/* <Example/> */}
    </div>
  )
}
