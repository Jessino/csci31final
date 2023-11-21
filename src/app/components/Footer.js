const hotlinks = [
  {
    icon: 'https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-512.png',
    href: 'https://www.instagram.com/veria_art/',
  },
  {
    icon: 'https://cdn3.iconfinder.com/data/icons/picons-social/57/18-youtube-256.png',
    href: 'https://www.youtube.com/channel/UCWzC1IKxuCLygjENFvSvXPA',
  },
  {
    icon: 'https://cdn1.iconfinder.com/data/icons/picons-social/57/social_deviantart-256.png',
    href: 'https://www.deviantart.com/veriaart',
  },
]

export default function Footer() {
  return (
    <div className="rounded pt-6 mt-6 flex justify-center">
      {hotlinks.map((item, index) => (
        <a
          key={index}
          className="mr-5 ml-5 drop-shadow-lg cursor-pointer transition-all hover:scale-125"
          href={item.href}
          target="_blank"
        >
          <img className="h-12 invert" src={item.icon} alt={item.href}></img>
        </a>
      ))}
    </div>
  )
}
