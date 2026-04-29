// components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-4 h-16 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold text-red-500">GYM PRO</h1>

      <div className="space-x-6 text-lg">
        <Link to="/" className="hover:text-red-400">
          Home
        </Link>
        <Link to="/exercises" className="hover:text-red-400">
          Exercises
        </Link>
        <Link to="/bodypart/chest" className="hover:text-red-400">
          Body Parts
        </Link>
        <Link to="#" className="hover:text-red-400">
          About
        </Link>
      </div>
    </nav>
  );
}
