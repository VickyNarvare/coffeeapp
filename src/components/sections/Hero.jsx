import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { QrCode, ArrowRight, Coffee, ShoppingBag, Heart, Sparkles, Star, Clock, Users } from 'lucide-react'

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

  const stats = [
    { icon: Coffee, value: '28+', label: 'Coffee Varieties' },
    { icon: Users, value: '1000+', label: 'Happy Customers' },
    { icon: Star, value: '4.9', label: 'Rating' },
  ]

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200">
      {/* Animated Background Elements */}
      <div
        className="absolute top-10 right-10 w-96 h-96 bg-coffee-400 rounded-full opacity-20 blur-3xl animate-float"
        style={{ animationDelay: '0s' }}
      ></div>
      <div
        className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-coffee-500 rounded-full opacity-15 blur-3xl animate-float"
        style={{ animationDelay: '1.5s' }}
      ></div>
      <div
        className="absolute top-1/3 right-1/4 w-64 h-64 bg-coffee-300 rounded-full opacity-10 blur-3xl animate-float"
        style={{ animationDelay: '3s' }}
      ></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-left space-y-6 animate-fade-in">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-md rounded-full border-2 border-coffee-200 shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
              <Sparkles className="w-5 h-5 text-coffee-600 animate-pulse" />
              <span className="text-sm font-bold text-coffee-900">✨ Premium Coffee Experience</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.95] tracking-tight">
                <span className="block bg-gradient-to-r from-coffee-700 via-coffee-600 to-coffee-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] mb-2">
                  Scan. Sip.
                </span>
                <span className="block bg-gradient-to-r from-coffee-900 via-coffee-800 to-coffee-700 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] mb-2">
                  Smile.
                </span>
                <span className="block text-coffee-600 text-4xl md:text-5xl lg:text-6xl mt-2">
                  Your Perfect Coffee
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-coffee-700 max-w-xl leading-relaxed font-medium">
              Experience the future of coffee ordering.
              <span className="text-coffee-900 font-bold"> Scan, customize, and enjoy</span> premium beverages crafted just for you.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/menu"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-coffee-900 to-coffee-800 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-coffee-900/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-coffee-800 to-coffee-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Coffee className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10">Explore Menu</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
              </Link>

              <Link
                to="/track-order"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/90 backdrop-blur-md text-coffee-900 rounded-2xl font-bold text-lg border-2 border-coffee-300 hover:border-coffee-500 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <Clock className="w-5 h-5" />
                <span>Track Order</span>
              </Link>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="text-center p-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-coffee-200 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
                  >
                    <Icon className="w-7 h-7 text-coffee-600 mx-auto mb-1" />
                    <div className="text-2xl font-extrabold text-coffee-900">{stat.value}</div>
                    <div className="text-xs text-coffee-600 font-semibold">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Side - Coffee Image */}
          <div className="relative animate-slide-up lg:pl-8" style={{ animationDelay: '0.3s' }}>
            <div className="relative group">
              {/* Animated Glow Ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-coffee-400/40 to-coffee-600/40 rounded-full blur-3xl group-hover:blur-[100px] transition-all duration-700 animate-pulse"></div>

              {/* Main Image Container */}
              <div className="relative">
                {/* Decorative Ring */}
                <div className="absolute inset-0 rounded-full border-4 border-coffee-200/30 scale-110 animate-float"></div>

                <img
                  src="https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Premium Coffee with Latte Art"
                  className="relative w-full max-w-md mx-auto rounded-full shadow-2xl transform group-hover:scale-105 transition-all duration-700 border-8 border-white/80 aspect-square object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.className = 'relative w-full max-w-md mx-auto h-96 bg-gradient-to-br from-coffee-200 to-coffee-400 rounded-full shadow-2xl flex items-center justify-center border-8 border-white/80';
                    e.target.parentElement.innerHTML = '<div class="text-coffee-600 text-6xl">☕</div>';
                  }}
                />
              </div>

              {/* Floating Elements */}
              {/* Price Badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-white to-cream-100 rounded-3xl px-6 py-4 shadow-2xl border-2 border-coffee-200 animate-bounce-subtle z-10">
                <div className="text-center">
                  <div className="text-xs text-coffee-600 font-semibold mb-1">Starting from</div>
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-coffee-700 to-coffee-500 bg-clip-text text-transparent">₹320</div>
                </div>
              </div>

              {/* Rating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-white to-cream-100 rounded-2xl px-5 py-3 shadow-2xl border-2 border-coffee-200 z-10">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <div>
                    <div className="text-xl font-extrabold text-coffee-900">4.9</div>
                    <div className="text-xs text-coffee-600 font-semibold">Rating</div>
                  </div>
                </div>
              </div>

              {/* Decorative Coffee Beans */}
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-coffee-400 rounded-full opacity-20 blur-2xl animate-float"></div>
              <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-coffee-500 rounded-full opacity-20 blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
