import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { ToastProvider } from './context/ToastContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import OurStory from './pages/OurStory'
import Menu from './pages/Menu'
import OrderTracking from './pages/OrderTracking'
import AdminDashboard from './pages/AdminDashboard'

function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/track-order" element={<OrderTracking />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </Layout>
        </Router>
      </CartProvider>
    </ToastProvider>
  )
}

export default App