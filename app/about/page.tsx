import React from 'react'

export default function AboutPage() {
  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Welcome to our Next.js and Tailwind CSS template. This page demonstrates a simple about page layout that you can customize for your own content.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Story</h2>
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="mb-6">
          Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-24 h-24 bg-neutral-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-center">Team Member {i}</h3>
              <p className="text-neutral-600 text-center">Position</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
