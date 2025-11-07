import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { QrCode, Coffee, CheckCircle, ArrowRight, MapPin, Clock } from 'lucide-react'
import Hero from '../components/sections/Hero'
import HowItWorks from '../components/sections/HowItWorks'
import MenuPreview from '../components/sections/MenuPreview'
import TrackOrder from '../components/sections/TrackOrder'
import Contact from '../components/sections/Contact'

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="pt-16 relative overflow-hidden bg-gradient-to-b from-cream-50 via-cream-100 to-cream-50">
      <Hero scrollY={scrollY} />
      <HowItWorks />
      <MenuPreview />
      <TrackOrder />
      <Contact />
    </div>
  )
}

export default Home

