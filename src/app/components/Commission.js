export default function Commission({
  title = 'Title',
  img = 'https://veriaart.carrd.co/assets/images/gallery02/3d89b20a_original.jpg?v=cf152a5c',
  sketchPrice = '$100',
  basicPrice = '$100',
  fullPrice = '$100',
  additional = 'Nil',
}) {
  return (
    <div className="flex w-full flex-row mb-6 mt-6">
      <div className="flex flex-col flex-1 items-center justify-center">
        <div className="text-xl mb-2 mt-2">{title}</div>
        <div className="flex w-full flex-row justify-around mb-2 mt-2">
          <div>
            <p>Sketch</p>
            <p>{sketchPrice}</p>
          </div>
          <div>
            <p>Basic</p>
            <p>{basicPrice}</p>
          </div>
          <div>
            <p>Full</p>
            <p>{fullPrice}</p>
          </div>
        </div>
        <div className="mt-2 mb-2">
          <p className="text-center">Aditional fees:</p>
          <p className="text-center">{additional}</p>
        </div>
      </div>
      <div className="flex-1">
        <img className="" src={img} alt={title} />
      </div>
    </div>
  )
}
