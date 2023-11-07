import Image from 'next/image'
import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import PageContent from './components/PageContent'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Home" />
        <PageContent content="This is the home page of my React website. React so cool, especially now that I know how powerful it is." />
      </div>
    </div>
  )
}
