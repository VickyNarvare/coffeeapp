import { Link } from 'react-router-dom'
import { ArrowRight, ShoppingBag, Heart } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { useToast } from '../../context/ToastContext'

function MenuPreview() {
  const { addToCart } = useCart()
  const { showToast } = useToast()

  const popularDrinks = [
    {
      name: 'Americano',
      price: '₹320',
      description: '100% Natural Arabica or Robusta, 30 ml cup',
      category: 'Hot',
      image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Cappuccino',
      price: '₹360',
      description: 'Coffee 50%, milk 50%, 280 ml',
      category: 'Hot',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Latte',
      price: '₹400',
      description: 'Smooth espresso with steamed milk',
      category: 'Hot',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Cold Brew',
      price: '₹380',
      description: 'Smooth, refreshing cold coffee',
      category: 'Cold',
      image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-cream-50 to-cream-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Product Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {popularDrinks.map((drink, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 modern-shadow-lg hover-lift relative overflow-visible border border-coffee-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-coffee-900 text-white text-xs font-bold rounded-full shadow-lg">
                    {drink.category}
                  </span>
                </div>

                {/* Product Image - Overlapping */}
                <div className="relative -mt-12 mb-6 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-coffee-400/20 to-coffee-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <img
                    src={drink.image}
                    alt={drink.name}
                    className="relative w-full h-56 object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition-all duration-500 border-2 border-white"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.className = 'relative -mt-12 mb-6 h-56 bg-gradient-to-br from-coffee-200 to-coffee-300 rounded-2xl shadow-xl flex items-center justify-center border-2 border-white';
                      e.target.parentElement.innerHTML = `<div class="text-coffee-600 text-5xl font-bold">${drink.name.charAt(0)}</div>`;
                    }}
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-extrabold text-coffee-900 mb-2">{drink.name}</h3>
                    <p className="text-sm text-coffee-600 font-medium leading-relaxed">{drink.description}</p>
                  </div>

                  {/* Price and Actions */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-3xl font-extrabold text-gradient">
                      {drink.price}
                    </span>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => {
                          addToCart(drink)
                          showToast(`${drink.name} added to cart!`, 'success')
                        }}
                        className="w-12 h-12 rounded-xl bg-coffee-900 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 group coffee-glow-hover"
                      >
                        <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </button>
                      <button className="w-12 h-12 rounded-xl border-2 border-coffee-300 bg-coffee-50 flex items-center justify-center text-coffee-600 hover:bg-coffee-100 hover:border-coffee-400 hover:scale-110 active:scale-95 transition-all duration-300">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-coffee-900 leading-tight">
              Discover Our <span className="text-gradient">Premium Coffee</span> Collection
            </h2>
            <p className="text-coffee-600 leading-relaxed text-lg">
              From classic espresso to refreshing cold brews, each drink is crafted with precision and passion.
              We use only the finest Arabica and Robusta beans, sourced from sustainable farms around the world.
              Experience the perfect blend of tradition and innovation in every sip.
            </p>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-8 py-4 bg-coffee-900 text-white rounded-2xl font-bold text-lg hover:bg-coffee-800 transition-all hover:scale-105 shadow-2xl coffee-glow-hover"
            >
              Explore Full Menu
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MenuPreview
