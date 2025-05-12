import React from 'react'
import Link from 'next/link'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container-custom flex justify-between items-center py-4">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-primary-600">NextTemplate</span>
        </Link>
        <Navbar />
      </div>
    </header>
  )
}
