import Image from 'next/image'
import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import Footer from './components/Footer'
import ContentImage from './components/ContentImage'
import PageContentStyled from './components/PageContentStyled'
const i1 =
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6e1bccfe-471d-4240-bca3-3197be28e887/dfyxv6f-2272533c-9bb8-40f0-819e-f63dfb84f678.png/v1/fit/w_828,h_1174,q_70,strp/princess_peach_by_veriaart_dfyxv6f-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgxNiIsInBhdGgiOiJcL2ZcLzZlMWJjY2ZlLTQ3MWQtNDI0MC1iY2EzLTMxOTdiZTI4ZTg4N1wvZGZ5eHY2Zi0yMjcyNTMzYy05YmI4LTQwZjAtODE5ZS1mNjNkZmI4NGY2NzgucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.TNtVIrlnDRs6XR5UK8xPmr5AqZ2PCrvSvSjjwJPX4GI'
const i2 =
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6e1bccfe-471d-4240-bca3-3197be28e887/dfx55q7-889c5abf-17de-4a8a-82b2-e1d224d48fb8.png/v1/fit/w_828,h_1104,q_70,strp/mesmerizing_siren_by_veriaart_dfx55q7-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcwNyIsInBhdGgiOiJcL2ZcLzZlMWJjY2ZlLTQ3MWQtNDI0MC1iY2EzLTMxOTdiZTI4ZTg4N1wvZGZ4NTVxNy04ODljNWFiZi0xN2RlLTRhOGEtODJiMi1lMWQyMjRkNDhmYjgucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ndlfUzLOYzlmW8dpgBzKNqYEUNBn9jEVtOrAQ4qSay0'
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Home" />
        <ContentImage
          title="View my creations!"
          paragraph="View all of my digital art peices."
          buttonText="Go to Gallery"
          imageOne={i1}
          imageTwo={i2}
          link="./gallery"
        />
      </div>

      <Footer />
    </div>
  )
}
