'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

export default function RegisterPage() {
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    })
    console.log({ response })
    if (!response.error) {
      router.push('/')
      router.refresh()
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mx-auto max-w-md mt-12">
      <input name="email" className="p-3 shadow-lg text-lg rounded" placeholder="email" type="email"></input>
      <input name="password" className="p-3 shadow-lg text-lg rounded" placeholder="password" type="password"></input>
      <button
        type="submit"
        className="bg-white p-3 text-left text-lg shadow-lg rounded mt-6 hover:scale-105 transition-all"
      >
        Login
      </button>
    </form>
  )
}
