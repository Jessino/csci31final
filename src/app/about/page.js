import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import CardForm from '../components/CardForm'
import MyTable from '../components/MyTable'
import { findCards } from '../utils/supabase-client'
import PageContentStyled from '../components/PageContentStyled'

export const revalidate = 0

const cardTableColums = [
  {
    title: 'Title',
    key: 'title',
  },
  {
    title: 'Description',
    key: 'description',
  },
  {
    title: 'Image',
    key: 'img',
  },
]

export default async function About() {
  const cards = await findCards()
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="About" />
        <PageContent content="This page contains everything you need to know about my website" />
        <CardForm />
        <PageContentStyled>
          <MyTable columns={cardTableColums} records={cards} />
        </PageContentStyled>
      </div>
    </div>
  )
}
