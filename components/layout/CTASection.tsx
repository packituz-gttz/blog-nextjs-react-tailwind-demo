import React from 'react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-16 bg-neutral-100">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-2xl mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
              <p className="text-lg text-white/90 max-w-xl">
                Start building your next project with this template and focus on what matters most - your application logic.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="btn bg-white text-primary-600 hover:bg-neutral-100 font-medium shadow-sm"
              >
                Get Started
              </Link>
              <Link 
                href="/about" 
                className="btn border border-white text-white hover:bg-white/10 font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
