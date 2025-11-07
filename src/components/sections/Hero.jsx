import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { QrCode, ArrowRight, Coffee, ShoppingBag, Heart } from 'lucide-react'

function Hero({ scrollY = 0 }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200">
      {/* Decorative Coffee Beans */}
      <div className="absolute top-20 right-20 w-32 h-32 opacity-10">
        <div className="absolute inset-0 bg-coffee-600 rounded-full blur-2xl"></div>
      </div>
      <div className="absolute bottom-20 left-20 w-40 h-40 opacity-10">
        <div className="absolute inset-0 bg-coffee-500 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-left animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-coffee-900 mb-6 leading-tight">
              Coffee The Best For You
            </h1>
            
            <Link
              to="/menu"
              className="inline-flex items-center gap-3 px-8 py-4 bg-coffee-900 text-white rounded-2xl font-bold text-lg shadow-lg mb-8"
            >
              <span>View Menu</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            {/* Icons Row */}
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full border-2 border-coffee-600 flex items-center justify-center">
                <Coffee className="w-6 h-6 text-coffee-600" />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-coffee-600 flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-coffee-600" />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-coffee-600 flex items-center justify-center">
                <QrCode className="w-6 h-6 text-coffee-600" />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-coffee-600 flex items-center justify-center">
                <Heart className="w-6 h-6 text-coffee-600" />
              </div>
            </div>
          </div>

          {/* Right Side - Coffee Image */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Coffee with latte art"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.className = 'relative w-full max-w-md mx-auto h-96 bg-gradient-to-br from-coffee-200 to-coffee-300 rounded-3xl shadow-2xl flex items-center justify-center';
                  e.target.parentElement.innerHTML = '<Coffee className="w-32 h-32 text-coffee-600 opacity-50" />';
                }}
              />
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-coffee-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-coffee-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
