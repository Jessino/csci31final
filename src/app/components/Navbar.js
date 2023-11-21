import { PaintBrushIcon } from '@heroicons/react/24/solid'

const menuItems = [
  { title: 'Home', href: '/' },
  { title: 'Gallery', href: '/gallery' },
  { title: 'Products', href: '/products' },
  { title: 'About', href: '/about' },
  { title: 'Terms', href: '/tos' },
]

export default function Navbar() {
  return (
    <div className="flex justify-between gap-4 m-12 items-center">
      <PaintBrushIcon className="h-12 w-12 text-indigo-700 text-opacity-0"></PaintBrushIcon>
      <div className="flex gap-4 flex-wrap">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="px-4 py-2 bg-indigo-600 text-violet-100 shadow-md rounded text-lg transition-all hover:scale-105 bg-indigo-700 active:bg-indigo-800"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  )
}
