'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  
  return (
    <nav>
      {/* Desktop navigation */}
      <div className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`text-sm font-medium transition-colors ${
              pathname === item.path
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-neutral-600 hover:text-primary-600'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      
      {/* Mobile navigation button */}
      <div className="md:hidden">
        <button
          type="button"
          className="p-2 text-neutral-600 hover:text-neutral-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open menu</span>
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 z-50 bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.path
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-neutral-600 hover:bg-neutral-100 hover:text-primary-600'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
