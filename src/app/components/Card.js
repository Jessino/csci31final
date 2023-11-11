export default function Card({
  title = 'Temporary Title',
  description = 'Temporary Description',
  img = 'https://placehold.co/600x400',
  alt = '',
}) {
  return (
    <div class="basis-1/3 rounded shadow-lg bg-gray-100 transition-all hover:scale-105 cursor-pointer">
      <img class="w-full" src={img} />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 text-gray-900">{title}</div>
        <p class="text-gray-800 text-base w-full">{description}</p>
      </div>
      <div class="px-6 pb-4 flex">
        <h2 class="font-semibold text-blue-900 bg-gray-200 flex pl-2 pr-2">{}</h2>
      </div>
    </div>
  )
}
