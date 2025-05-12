import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-600">
              React Template
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 hover:text-blue-600">Home</Link>
            <Link to="/about" className="px-3 py-2 hover:text-blue-600">About</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
