'use client'
export default function RegisterPage() {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password'),
      }),
    })
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mx-auto max-w-md mt-12">
      <input name="email" className="border border-black" placeholder="email..." type="email"></input>
      <input name="password" className="border border-black" placeholder="password..." type="password"></input>
      <button type="submit">Register</button>
    </form>
  )
}
