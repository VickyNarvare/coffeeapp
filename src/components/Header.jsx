import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Coffee, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'

function Header({ onCartOpen }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { getTotalItems } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/our-story', label: 'Our Story' },
    { path: '/menu', label: 'Menu' },
    { path: '/track-order', label: 'Track Order' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-coffee-200'
        : 'bg-white/60 backdrop-blur-xl'
        }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 text-2xl font-extrabold text-coffee-900 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-coffee-900 flex items-center justify-center">
              <Coffee className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="tracking-tight block">Coffee Cup</span>
              <span className="text-xs font-normal text-coffee-600">Wake up to something special</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-all duration-300 ${location.pathname === link.path
                  ? 'text-coffee-900 border-b-2 border-coffee-900 pb-1'
                  : 'text-coffee-700 hover:text-coffee-900'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={onCartOpen}
              className="relative px-6 py-2.5 bg-coffee-900 text-white rounded-2xl modern-shadow transition-all duration-300 text-sm font-bold flex items-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Coffee Shop</span>
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-white text-coffee-900 rounded-full flex items-center justify-center text-xs font-bold">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button & Cart */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={onCartOpen}
              className="relative text-coffee-900"
            >
              <ShoppingBag className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-coffee-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {getTotalItems()}
                </span>
              )}
            </button>
            <button
              className="text-coffee-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in bg-white/95 backdrop-blur-xl rounded-lg border border-coffee-200 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 px-4 text-sm font-medium transition-colors ${location.pathname === link.path
                  ? 'text-coffee-900 bg-coffee-100 rounded-md'
                  : 'text-coffee-700 hover:text-coffee-900 hover:bg-coffee-50 rounded-md'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

