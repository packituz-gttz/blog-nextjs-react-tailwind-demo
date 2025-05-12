import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Build beautiful websites with Next.js and Tailwind
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            A professionally designed, mobile-first starter template to help you build amazing websites quickly and easily.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/about" className="btn bg-white text-primary-700 hover:bg-neutral-100">
              Learn More
            </Link>
            <Link href="/contact" className="btn border border-white text-white hover:bg-white/10">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
