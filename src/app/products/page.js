import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import Footer from '../components/Footer'
import Commission from '../components/Commission'
import PageContentSlim from '../components/PageContentSlim'

export default function Products() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Products" />
        <PageContentSlim>
          <div className=" flex flex-col w-full items-center">
            <div className="max-w-xl flex flex-col  items-center content-center">
              <h1 className="text-2xl text-indigo-700 font-bold mb-3 italic">Commission info</h1>
              <h1 className="text-2xl text-indigo-700 font-bold mb-3 italic">Note:</h1>
              <p>
                By commissioning me, Veria Art, you have agreed to the{' '}
                <a className="underline" href="/tos">
                  terms of service
                </a>
                . I only accept Venmo and PayPal (USD) too. If you have any questions or concerns, please email me or
                message me on instagram
              </p>
              <Commission
                title="Bust"
                img="https://veriaart.carrd.co/assets/images/gallery02/3d89b20a_original.jpg?v=cf152a5c"
                sketchPrice="$10"
                basicPrice="$20"
                fullPrice="$35"
                additional="Background: $5 (simple) $10 (medium) Characters: $10 Animals: $10"
              />
              <Commission
                title="Half Body"
                img="https://veriaart.carrd.co/assets/images/gallery03/a79bce96_original.jpg?v=cf152a5c"
                sketchPrice="$25"
                basicPrice="$45"
                fullPrice="$65"
                additional="Background: $10 (simple) $20 (medium) Characters: $20 Animals: $15"
              />
              <Commission
                title="Full Body"
                img="https://veriaart.carrd.co/assets/images/gallery01/15148fcf_original.jpg?v=cf152a5c"
                sketchPrice="$40"
                basicPrice="$60"
                fullPrice="$85"
                additional="Background: $20 (simple) $30 (medium) Characters: $40 Animals: $20"
              />
            </div>
          </div>
        </PageContentSlim>
      </div>
      <Footer />
    </div>
  )
}
