'use client'
export default function Fullscreen({ image = 'https://placehold.co/600x400' }) {
  function close() {
    var image = document.getElementById('FullscreenImage')
    image.style.display = 'none'
  }
  return (
    <div id="FullscreenImage" className="object-top hidden flex fixed w-full h-full justify-center">
      <button onClick={close} className="w-full text-gray-100 fixed">
        Close
      </button>
      <img id="FullscreenImageImage" className="h-full" src={image}></img>
    </div>
  )
}
