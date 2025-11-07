import { useState } from 'react'
import { Coffee, Thermometer, Snowflake, ShoppingBag, Plus } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'

function Menu() {
  const [activeCategory, setActiveCategory] = useState('All')
  const { addToCart } = useCart()
  const { showToast } = useToast()

  const categories = ['All', 'Espresso', 'Latte', 'Cold Brew', 'Specialty', 'Tea']

  const menuItems = [
    { name: 'Espresso', price: '₹280', description: 'Rich, bold, and intense', category: 'Espresso', temp: 'hot', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Double Espresso', price: '₹400', description: 'Double shot of pure intensity', category: 'Espresso', temp: 'hot', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Americano', price: '₹320', description: 'Espresso with hot water', category: 'Espresso', temp: 'hot', image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Ristretto', price: '₹350', description: 'Concentrated espresso shot', category: 'Espresso', temp: 'hot', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Cappuccino', price: '₹360', description: 'Espresso with steamed milk foam', category: 'Latte', temp: 'hot', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Latte', price: '₹400', description: 'Smooth espresso with steamed milk', category: 'Latte', temp: 'hot', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Vanilla Latte', price: '₹460', description: 'Latte with vanilla syrup', category: 'Latte', temp: 'hot', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Caramel Macchiato', price: '₹480', description: 'Espresso with caramel and vanilla', category: 'Latte', temp: 'hot', image: 'https://images.unsplash.com/photo-1571925569727-b23bf0e16257?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Hazelnut Latte', price: '₹470', description: 'Latte with hazelnut syrup', category: 'Latte', temp: 'hot', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Coconut Latte', price: '₹450', description: 'Latte with coconut milk', category: 'Latte', temp: 'hot', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Cold Brew', price: '₹380', description: 'Smooth, refreshing cold coffee', category: 'Cold Brew', temp: 'cold', image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Iced Latte', price: '₹420', description: 'Espresso over ice with milk', category: 'Cold Brew', temp: 'cold', image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Iced Americano', price: '₹340', description: 'Espresso with cold water over ice', category: 'Cold Brew', temp: 'cold', image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Iced Cappuccino', price: '₹400', description: 'Cold cappuccino over ice', category: 'Cold Brew', temp: 'cold', image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Frappuccino', price: '₹480', description: 'Blended coffee with ice', category: 'Cold Brew', temp: 'cold', image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Nitro Cold Brew', price: '₹450', description: 'Smooth nitro-infused cold brew', category: 'Cold Brew', temp: 'cold', image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Mocha', price: '₹440', description: 'Espresso with chocolate and milk', category: 'Specialty', temp: 'hot', image: 'https://images.unsplash.com/photo-1571925569727-b23bf0e16257?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Flat White', price: '₹420', description: 'Double espresso with microfoam', category: 'Specialty', temp: 'hot', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Cortado', price: '₹380', description: 'Espresso with equal parts warm milk', category: 'Specialty', temp: 'hot', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Affogato', price: '₹500', description: 'Espresso over vanilla ice cream', category: 'Specialty', temp: 'hot', image: 'https://images.unsplash.com/photo-1571925569727-b23bf0e16257?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Irish Coffee', price: '₹520', description: 'Coffee with Irish whiskey and cream', category: 'Specialty', temp: 'hot', image: 'https://images.unsplash.com/photo-1571925569727-b23bf0e16257?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Pumpkin Spice Latte', price: '₹490', description: 'Seasonal spiced latte', category: 'Specialty', temp: 'hot', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Green Tea', price: '₹280', description: 'Premium Japanese green tea', category: 'Tea', temp: 'hot', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Chai Latte', price: '₹400', description: 'Spiced tea with steamed milk', category: 'Tea', temp: 'hot', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Iced Tea', price: '₹300', description: 'Refreshing iced tea', category: 'Tea', temp: 'cold', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Earl Grey', price: '₹320', description: 'Classic bergamot black tea', category: 'Tea', temp: 'hot', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Matcha Latte', price: '₹450', description: 'Japanese matcha with steamed milk', category: 'Tea', temp: 'hot', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Herbal Tea', price: '₹260', description: 'Soothing herbal blend', category: 'Tea', temp: 'hot', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ]

  const filteredItems = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-24 bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-bold text-coffee-400 uppercase tracking-wider">Menu</span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-coffee-900 mb-6 leading-tight">
            Our Menu
          </h1>
          <p className="text-xl md:text-2xl text-coffee-600 max-w-3xl mx-auto font-medium">
            Handcrafted beverages made with premium ingredients
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-coffee-900 text-white modern-shadow-lg scale-105'
                    : 'bg-cream-100 text-coffee-700 hover:bg-cream-200 modern-shadow border border-coffee-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden modern-shadow-lg border border-coffee-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.className = 'relative h-48 bg-gradient-to-br from-coffee-200 to-cream-300 flex items-center justify-center';
                      e.target.parentElement.innerHTML = `<div class="text-coffee-600 text-4xl font-bold">${item.name.charAt(0)}</div>`;
                    }}
                  />
                  <div className="absolute top-3 right-3">
                    {item.temp === 'hot' ? (
                      <Thermometer className="w-6 h-6 text-red-500 bg-white/90 backdrop-blur-xl rounded-full p-1 border border-coffee-200" />
                    ) : (
                      <Snowflake className="w-6 h-6 text-blue-500 bg-white/90 backdrop-blur-xl rounded-full p-1 border border-coffee-200" />
                    )}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-coffee-900 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-coffee-600 mb-2">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-xl font-bold text-coffee-700 ml-4">
                      {item.price}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="px-4 py-2 bg-cream-100 text-coffee-700 rounded-full text-xs font-bold border border-coffee-200">
                      {item.category}
                    </span>
                    <button 
                      onClick={() => {
                        addToCart(item)
                        showToast(`${item.name} added to cart!`, 'success')
                      }}
                      className="px-6 py-3 bg-coffee-900 text-white rounded-xl text-sm font-bold modern-shadow transition-all duration-300 hover:bg-coffee-800 hover:scale-105 active:scale-95 flex items-center gap-2 group"
                    >
                      <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>Add to Cart</span>
                      <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12 bg-cream-50 rounded-3xl border border-coffee-200">
              <Coffee className="w-16 h-16 text-coffee-400 mx-auto mb-4" />
              <p className="text-xl text-coffee-600 font-medium">No items in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-coffee-900 mb-6 leading-tight">
            Ready to Order?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-coffee-600 max-w-3xl mx-auto font-medium">
            Scan the QR code at your table to start your order
          </p>
          <button className="px-12 py-6 bg-coffee-900 text-white rounded-2xl font-bold text-lg modern-shadow-lg">
            Scan QR Code
          </button>
        </div>
      </section>
    </div>
  )
}

export default Menu

