import React from 'react'

export default function ContactPage() {
  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-6">
            Have questions or feedback? We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
          </p>
          
          <div className="space-y-4 mt-8">
            <div>
              <h3 className="text-lg font-medium mb-1">Email</h3>
              <p className="text-primary-600">contact@example.com</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-1">Phone</h3>
              <p>(123) 456-7890</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-1">Address</h3>
              <p>123 Template Street<br />Sample City, ST 12345</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="btn-primary w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
