import {Link} from "react-router-dom"

export default function Header() {
  return (
    <header className="bg-gray-300 bg-opacity-15 fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          TESLA
        </Link>
        <ul className="hidden md:flex space-x-4">
          <li><Link to="/tesla/1" className="hover:text-gray-600">Model S</Link></li>
          <li><Link to="/tesla/2" className="hover:text-gray-600">Model 3</Link></li>
          <li><Link to="/tesla/3" className="hover:text-gray-600">Model X</Link></li>
          <li><Link to="/tesla/4" className="hover:text-gray-600">Model Y</Link></li>
        </ul>
      </nav>
    </header>
  )
}