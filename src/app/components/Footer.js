import Image from 'next/image'
import igIcon from '../media/icons/ig.png'
import ytIcon from '../media/icons/youtube.png'
import deviantIcon from '../media/icons/deviant.png'
const hotlinks = [
  {
    icon: igIcon,
    href: 'https://www.instagram.com/veria_art/',
  },
  {
    icon: ytIcon,
    href: 'https://www.youtube.com/channel/UCWzC1IKxuCLygjENFvSvXPA',
  },
  {
    icon: deviantIcon,
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
          <Image className="h-12 invert" src={item.icon} alt={item.href} width={50} height={50}></Image>
        </a>
      ))}
    </div>
  )
}
