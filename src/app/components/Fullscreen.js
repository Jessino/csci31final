'use client'
export default function Fullscreen({ image = 'https://placehold.co/600x400' }) {
  function close() {
    var image = document.getElementById('FullscreenImage')
    image.style.display = 'none'
  }
  return (
    <div
      id="FullscreenImage"
      className="top-0 bg-black object-cover w-full h-full hidden fixed justify-center z-50 bg-opacity-50"
    >
      <button onClick={close} className="text-gray-100 fixed opacity-25 m-3">
        Close
      </button>
      <img id="FullscreenImageImage" className="object-contain " src={image}></img>
      <p onClick={close} className="text-gray-100 bottom-0 fixed opacity-5 m-3">
        Veria Art
      </p>
    </div>
  )
}
