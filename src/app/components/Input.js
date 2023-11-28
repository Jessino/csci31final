export default function Input({ type = 'text', placeholder = 'enter text here...', name, id }) {
  return (
    <input
      className="p-3 rounded-md shadow-md mb-4 outline outline-1 outline-violet-800"
      name={name}
      id={id}
      type={type}
      placeholder={placeholder}
    />
  )
}
