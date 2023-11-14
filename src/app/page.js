import Image from 'next/image'
import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import PageContent from './components/PageContent'
import Card from './components/Card'

import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://ahsxmxdtdhqtdxcxadwp.supabase.co', process.env.SUPABASE_SECRET)
export const revalidate = 0

export default async function Home() {
  const { data: cards, error } = await supabase.from('cards').select()

  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Home" />
        <PageContent content="This is the home page of my React website. React is so cool, especially now that I know how powerful it is." />
        <div className="flex gap-6 flex-wrap">
          {cards.map((card, idx) => (
            <Card key={idx} title={card.title} description={card.description} img={card.img} />
          ))}
        </div>
        <PageContent />
      </div>
    </div>
  )
}
