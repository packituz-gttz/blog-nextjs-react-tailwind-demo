import Button from '../components/Button'

function HomePage() {
  return (
    <div className="space-y-6">
      <section className="card">
        <h1 className="text-3xl font-bold mb-4">Welcome to React + Tailwind Template</h1>
        <p className="mb-4">
          This is a starter template for building React applications with Tailwind CSS.
          It includes a clean project structure and essential configurations.
        </p>
        <Button>Get Started</Button>
      </section>
      
      <section className="card">
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>React 18 with Hooks</li>
          <li>Tailwind CSS for styling</li>
          <li>React Router for navigation</li>
          <li>Vite for fast development</li>
          <li>Organized folder structure</li>
        </ul>
      </section>
    </div>
  )
}

export default HomePage
