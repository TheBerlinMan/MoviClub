import { getCurrentYear } from '@/lib/functions'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-auto text-gray-500 text-sm text-center py-4">
      <hr className="border-gray-500 border-1 mb-4" />
      <div className="flex flex-col justify-between">
        <p>Data provided by <Link href="https://www.themoviedb.org/">TMDB</Link></p>
        <p>© {getCurrentYear()}</p>
      </div>
    </footer>
  )
}

export default Footer