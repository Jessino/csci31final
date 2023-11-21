'use client'

import { DocumentIcon } from '@heroicons/react/24/solid'

export default function Card({
  title = 'Temporary Title',
  description = 'Temporary Description',
  img = 'https://placehold.co/600x400',
  alt = '',
}) {
  function fullscreen() {
    var image = document.getElementById('FullscreenImageImage')
    image.src = img
    var fs = document.getElementById('FullscreenImage')
    fs.style.display = 'flex'
  }
  return (
    <div
      onClick={fullscreen}
      className="flex-column rounded outline outline-4 outline-white shadow-lg bg-white transition-all hover:scale-[1.02] cursor-pointer"
    >
      <img className="max-h-[500px]" src={img} alt={description} />
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2 text-indigo-700">{title}</div>
        <p className="text-gray-800 text-base w-full">{description}</p>
      </div>
      <div className="px-6 pb-4 flex">
        <h2 className="font-semibold text-blue-900 flex pl-2 pr-2">{}</h2>
      </div>
    </div>
  )
}
