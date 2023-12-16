'use client'

import { signOut } from 'next-auth/react'

export default function Logout() {
  return (
    <div className="flex w-full justify-left pl-6 pt-3">
      <span
        className="text-lg cursor-pointer bg-red-800 pr-6 pl-6 pt-2 rounded pb-2 text-white shadow-lg hover:scale-105 transition-all"
        onClick={() => {
          signOut()
        }}
      >
        Logout
      </span>
    </div>
  )
}
