import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="About" />
        <PageContent content="This page contains everything you need to know about my website" />
      </div>
    </div>
  )
}
