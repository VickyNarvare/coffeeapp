import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Cart from './Cart'

function Layout({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Header onCartOpen={() => setIsCartOpen(true)} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  )
}

export default Layout

