import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Fullscreen from '../components/Fullscreen'

import { findCards } from '../utils/supabase-client'

// Create a single supabase client for interacting with your database
export const revalidate = 0

export default async function Gallary() {
  const cards = await findCards()
  return (
    <div>
      <Fullscreen />
      <Navbar />
      <div className="m-12">
        <PageTitle title="Gallary" />
        <div className="flex gap-4 mt-12 flex-wrap justify-center">
          {cards.map((card, idx) => (
            <Card key={idx} title={card.title} description={card.description} img={card.img} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  )
}
