import { useState } from "react";
import { Menu, X, ShoppingCart, Phone, Mail } from "lucide-react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom"; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full bg-white text-gray-900 z-50 shadow-md border-b border-gray-200"
      style={{ fontFamily: "'Work Sans', sans-serif" }}
    >
      <div className="container mx-auto">
        {/* Top Bar */}
        <div className="bg-green-800 text-white px-4 py-2 text-sm flex justify-end items-center">
          <div className="flex items-center space-x-6">
            <a
              href="tel:+919519797775"
              className="flex items-center hover:text-yellow-300 transition-colors font-medium"
            >
              <Phone size={16} className="mr-1" />
              +91 9519797775
            </a>
            <a
              href="mailto:hello@vallabhiindia.com"
              className="flex items-center hover:text-yellow-300 transition-colors font-medium"
            >
              <Mail size={16} className="mr-1" />
              hello@vallabhiindia.com
            </a>
          </div>
        </div>

        {/* Main Header */}
        <div className="px-4 py-2 flex justify-between items-center bg-white ">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img src={Logo} alt="MSJ Masale Logo" className="h-20 w-auto" />
            <p className="text-yellow-500 ml-2 text-4xl font-bold ml-8">masale | spices</p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-0 ml-4 mr-30 gap-12">
            <Link to="/" className="px-3 py-3 text-xl font-semibold text-gray-800 hover:text-yellow-600 hover:bg-green-50 transition-colors">
              Home
            </Link>
            <Link to="/about-us" className="px-3 py-3 text-xl font-semibold text-gray-800 hover:text-yellow-600 hover:bg-green-50 transition-colors">
              About
            </Link>
            <Link to="/product" className="px-3 py-3 text-xl font-semibold text-gray-800 hover:text-yellow-600 hover:bg-green-50 transition-colors">
              Products
            </Link>
            <Link to="/faq" className="px-3 py-3 text-xl font-semibold text-gray-800 hover:text-yellow-600 hover:bg-green-50 transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="px-3 py-3 text-xl font-semibold text-gray-800 hover:text-yellow-600 hover:bg-green-50 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X size={28} className="text-green-800" />
              ) : (
                <Menu size={28} className="text-green-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <nav className="px-4 py-3 space-y-1">
          <Link
            to="/"
            className="block px-4 py-4 text-lg font-semibold text-gray-800 hover:bg-green-50 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="block px-4 py-4 text-lg font-semibold text-gray-800 hover:bg-green-50 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/product"
            className="block px-4 py-4 text-lg font-semibold text-gray-800 hover:bg-green-50 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/faq"
            className="block px-4 py-4 text-lg font-semibold text-gray-800 hover:bg-green-50 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-4 text-lg font-semibold text-gray-800 hover:bg-green-50 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}