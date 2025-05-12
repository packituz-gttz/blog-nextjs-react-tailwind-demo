function Footer() {
  return (
    <footer className="bg-white shadow dark:bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-500">
          &copy; {new Date().getFullYear()} React + Tailwind Template. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
