export default function Card({
  title = 'Temporary Title',
  description = 'Temporary Description',
  img = 'https://placehold.co/600x400',
  alt = '',
}) {
  return (
    <div className="flex-column rounded shadow-lg bg-gray-100 transition-all hover:scale-105 cursor-pointer">
      <img className="max-h-[500px]" src={img} alt={description} />
      <div className="px-6 py-4 bg-gray-100">
        <div className="font-bold text-xl mb-2 text-indigo-700">{title}</div>
        <p className="text-gray-800 text-base w-full">{description}</p>
      </div>
      <div className="px-6 pb-4 flex bg-gray-100">
        <h2 className="font-semibold text-blue-900 bg-gray-200 flex pl-2 pr-2">{}</h2>
      </div>
    </div>
  )
}
