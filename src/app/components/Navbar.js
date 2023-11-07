const menuItems = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
  { title: 'Services', href: '/services' },
  { title: 'Products', href: '/products' },
]

export default () => {
  return (
    <div className="flex justify-end gap-4 m-6">
      {menuItems.map((item) => (
        <a href={item.href} className="px-4 py-2 bg-gray-100 text-emerald-900 shadow-md rounded">
          {item.title}
        </a>
      ))}
    </div>
  )
}
