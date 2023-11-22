'use client'
export default function Fullscreen({ image = 'https://placehold.co/600x400' }) {
  function close() {
    var image = document.getElementById('FullscreenImage')
    image.style.display = 'none'
  }
  return (
    <div
      id="FullscreenImage"
      className="flex bg-black object-top hidden fixed w-screen h-screen justify-center z-50 bg-opacity-50"
    >
      <button onClick={close} className="text-gray-100 fixed">
        Close
      </button>
      <img id="FullscreenImageImage" className="object-contain" src={image}></img>
    </div>
  )
}
