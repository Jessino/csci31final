import Image from 'next/image'
import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import PageContent from './components/PageContent'
import Card from './components/Card'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Home" />
        <PageContent content="This is the home page of my React website. React so cool, especially now that I know how powerful it is." />
        <div class="flex gap-6">
          <Card title="My First Card" description="My first description" />
          <Card title="My Second Card" description="My second description" />
          <Card title="My Third Card" description="My third description" />
        </div>
        <PageContent />
      </div>
    </div>
  )
}
