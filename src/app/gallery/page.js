import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import Card from '../components/Card'
import Footer from '../components/Footer'
import PageContentStyled from '../../../csci31final/src/app/components/PageContentStyled'

import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://ahsxmxdtdhqtdxcxadwp.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)
export const revalidate = 3000

export default async function Gallary() {
  const { data: cards, error } = await supabase.from('cards').select()

  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Gallary" />
        <div className="flex gap-4 flex-wrap justify-center">
          {cards.map((card, idx) => (
            <Card key={idx} title={card.title} description={card.description} img={card.img} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  )
}
