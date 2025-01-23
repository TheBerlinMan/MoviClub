import SignIn from '@/app/(auth)/components/sign-in'
import SignOut from '@/app/(auth)/components/sign-out'
import { auth } from '@/auth'
import Link from 'next/link'
import React from 'react'

const Header = async () => {
    const session = await auth()
    console.log(session)
  return (
    <header >
        <div className="flex justify-between items-center">

      <h1 className="text-2xl font-bold">MoviClub</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          {session ? <li><SignOut /></li> : <li><SignIn /></li>}
        </ul>
      </nav>
        </div>
        <hr className="border-gray-500 border-1 mb-4 mt-4" />
    </header>
  )
}

export default Header