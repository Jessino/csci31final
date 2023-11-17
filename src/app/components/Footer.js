const igIcon = 'https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-512.png'
const ytIcon = 'https://cdn3.iconfinder.com/data/icons/picons-social/57/18-youtube-256.png'
const devientIcon = 'https://cdn1.iconfinder.com/data/icons/picons-social/57/social_deviantart-256.png'

const igPage = 'https://www.instagram.com/veria_art/'
const ytPage = 'https://www.youtube.com/channel/UCWzC1IKxuCLygjENFvSvXPA'
const devientPage = 'https://www.deviantart.com/veriaart'

export default function Footer() {
  return (
    <div className="rounded pt-6 mt-6 flex justify-center">
      <a
        className="mr-5 ml-5 drop-shadow-lg cursor-pointer transition-all hover:scale-125"
        href={igPage}
        target="_blank"
      >
        <img className="h-12 invert" src={igIcon}></img>
      </a>
      <a
        className="mr-5 ml-5 drop-shadow-lg cursor-pointer transition-all hover:scale-125 "
        href={ytPage}
        target="_blank"
      >
        <img className="h-12 invert" src={ytIcon}></img>
      </a>
      <a
        className="mr-5 ml-5 drop-shadow-lg cursor-pointer transition-all hover:scale-125"
        href={devientPage}
        target="_blank"
      >
        <img className="h-12 invert" src={devientIcon}></img>
      </a>
    </div>
  )
}
