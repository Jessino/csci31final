export default function Label({ htmlFor, label }) {
  return (
    <label className="text-xl text-violet-800" htmlFor={htmlFor}>
      {label}
    </label>
  )
}
