export default function Button({ children, onClick, type = 'button' }) {
  return (
    <button
      className="px-6 py-3 bg-violet-500 rounded-md text-white transition-all shadow-md hover:bg-violet-600 active:bg-violet-700"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
