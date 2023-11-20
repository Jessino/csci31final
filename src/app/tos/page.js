import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContentStyled from '../components/PageContentStyled'
import Footer from '../components/Footer'

export default function TOS() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Terms Of Service" />
        <PageContentStyled>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-2xl text-indigo-700 font-bold mb-3">
                By commissioning the artist, Veria Art, you agree to the following:
              </h1>
              <h2 className="text-l font-bold">I, as the Artist, . . .</h2>
              <p className="mb-3">
                I maintain the rights to post my work in any form. I maintain the rights to advertise my work unless
                you, as the commissioner, request for it not to be used. I may turn down a commission due to violation
                of my terms of service.
              </p>
              <h2 className="text-l font-bold">You, as the Client, . . .</h2>
              <p className="mb-3">
                May not cancel the commission in the midst of it. Please stay in contact with me throughout the process.
                After 48 hours of no response or warning after last communication, your order will be cancelled. You are
                not allowed to take your commission and use it to profit. Do not claim the work as yours. You can repost
                it along side with credit and watermark (if it&apos;s personal use, the watermark will be excluded)! The
                commission can be printed out for your own personal use only!
              </p>
              <h2 className="text-l font-bold">About commisions, . . .</h2>
              <p className="mb-3">
                <strong> Ways to contact: </strong>Please contact me on Instagram or gmail, officialveria.art@gmail.com!
                <strong> Expectations: </strong> The final piece will be watermarked and unmarked (for personal use
                only). Any additional characters or backgrounds will have additional charges to the commission as stated
                in commission info. Estimated due date would be around 1-2 weeks! I will notify you if I need more time.
                <strong> What to Include: </strong> Please include the commission type (bust, half-body, or full-body),
                background (simple or medium detail), references & descriptions (poses, props, characteristics,
                personality, etc.), whether you have social media (public) or private. If you have social media,
                I&apos;d love to @ you after the completion of the commission if I had permission to post.
                <strong> Do&apos;s and Dont&apos;s: </strong> I am able to comfortably illustrate original characters,
                couples, some animals, humans with animalistic features (ears, tails, etc.), semi-details on armor, soft
                gore (nose bleed, etc.) and basic to medium backgrounds. I WILL NOT draw sexually explicit content,
                furries, hard gore, or full armor or background details. <strong> Payment Process: </strong> I will
                utilize Venmo only. NO REFUNDS! As the client, you will pay half up front and pay the rest after the
                commission has been completed. I will contact you within 48 hours of receiving the email or message.
                Commission cancellation will occur if the half payment isn&apos;t paid for after 48 hours of our
                agreement to begin the commission process. <strong> During the Process: </strong> We will stay in
                contact and communicate on the piece. Please be prepared and clear with an idea and come in with the
                details needed. I will continuously send W.I.Ps to show you my process and feel free to give me
                feedback! I will send the beginning sketches to give you options of what you want and will need an
                approval of you want (final draft). After completion, I will send the watermarked + unmarked (upon
                request) image.
              </p>
            </div>
          </div>
        </PageContentStyled>
        <Footer />
      </div>
    </div>
  )
}
