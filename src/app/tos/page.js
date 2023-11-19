import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContentStyled from '../components/PageContentStyled'

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Terms Of Service" />
        <PageContentStyled>
          <PageTitle title="By commissioning the artist, Veria Art, you agree to the following:" />
        </PageContentStyled>
      </div>
    </div>
  )
}
