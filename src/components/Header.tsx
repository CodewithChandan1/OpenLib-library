import {  Book, Users, BookOpen, Clock, List } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Book className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">OpenLib library</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/authors"
              className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600"
            >
              <Users className="h-4 w-4" />
              <span>Authors</span>
            </Link>
            <Link
              to="/subjects"
              className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600"
            >
              <BookOpen className="h-4 w-4" />
              <span>Subjects</span>
            </Link>
            <Link
              to="/reading-lists"
              className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600"
            >
              <List className="h-4 w-4" />
              <span>Reading Lists</span>
            </Link>
            <Link
              to="/recent"
              className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600"
            >
              <Clock className="h-4 w-4" />
              <span>Recent Changes</span>
            </Link>
          </nav>

          <button className="md:hidden">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
