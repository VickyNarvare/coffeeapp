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
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularDrinks.map((drink, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg relative overflow-visible"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Product Image - Overlapping */}
                <div className="relative -mt-8 mb-4">
                  <img 
                    src={drink.image} 
                    alt={drink.name}
                    className="w-full h-48 object-cover rounded-2xl shadow-md"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.className = 'relative -mt-8 mb-4 h-48 bg-gradient-to-br from-coffee-200 to-coffee-300 rounded-2xl shadow-md flex items-center justify-center';
                      e.target.parentElement.innerHTML = `<div class="text-coffee-600 text-4xl font-bold">${drink.name.charAt(0)}</div>`;
                    }}
                  />
                </div>
                
                {/* Product Info */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-coffee-900">{drink.name}</h3>
                  <p className="text-sm text-coffee-600 font-medium">{drink.description}</p>
                  
                  {/* Icons */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => {
                        addToCart(drink)
                        showToast(`${drink.name} added to cart!`, 'success')
                      }}
                      className="w-12 h-12 rounded-full bg-coffee-900 text-white flex items-center justify-center shadow-lg hover:bg-coffee-800 hover:scale-110 active:scale-95 transition-all duration-300 group"
                    >
                      <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>
                    <button className="w-12 h-12 rounded-full border-2 border-coffee-600 flex items-center justify-center text-coffee-600 hover:bg-coffee-50 hover:scale-110 active:scale-95 transition-all duration-300">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                  
                  {/* Price Tag */}
                  <div className="pt-4">
                    <span className="inline-block px-6 py-3 bg-coffee-900 text-white rounded-2xl font-bold text-lg">
                      {drink.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 leading-tight">
              Lorem Ipsum is simply dummy text of
            </h2>
            <p className="text-coffee-600 leading-relaxed text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <Link
              to="/menu"
              className="inline-block px-6 py-3 bg-coffee-900 text-white rounded-xl font-semibold"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MenuPreview
