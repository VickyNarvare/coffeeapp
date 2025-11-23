import { Link } from 'react-router-dom'
import { Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react'

function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/VickyNarvare', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/vickynarvare', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/vickynarvare', label: 'Instagram' },
  ]

  return (
    <footer className="bg-white text-coffee-900 mt-20 border-t border-coffee-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-extrabold mb-2 text-coffee-900">BrewNow Café</h3>
            <p className="text-xs font-normal text-coffee-600 mb-4">Wake up to something special</p>
            <p className="text-coffee-600 text-sm leading-relaxed font-medium">
              Experience the perfect blend of tradition and technology.
              Order your favorite coffee with a simple scan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-extrabold mb-4 text-coffee-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-coffee-600 hover:text-coffee-900 transition-colors text-sm font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-coffee-600 hover:text-coffee-900 transition-colors text-sm font-medium">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="text-coffee-600 hover:text-coffee-900 transition-colors text-sm font-medium">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="text-coffee-600 hover:text-coffee-900 transition-colors text-sm font-medium">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-extrabold mb-4 text-coffee-900">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-coffee-600 hover:text-coffee-900 transition-colors text-sm font-medium">
                  QR Code Ordering
                </a>
              </li>
              <li>
                <a href="#" className="text-coffee-600 hover:text-coffee-900 transition-colors text-sm font-medium">
                  Real-time Tracking
                </a>
              </li>
              <li>
                <a href="#" className="text-coffee-600 hover:text-coffee-900 transition-colors text-sm font-medium">
                  Custom Orders
                </a>
              </li>
              <li>
                <a href="#" className="text-coffee-600 hover:text-coffee-900 transition-colors text-sm font-medium">
                  Loyalty Program
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-extrabold mb-4 text-coffee-900">Contact Us</h3>
            <div className="space-y-3 mb-4">
              <a
                href="mailto:vickynarvare2005@gmail.com"
                className="flex items-center gap-2 text-coffee-600 hover:text-coffee-900 transition-colors text-sm font-medium"
              >
                <Mail className="w-4 h-4" />
                vickynarvare2005@gmail.com
              </a>
              <a
                href="tel:+916267607029"
                className="flex items-center gap-2 text-coffee-600 hover:text-coffee-900 transition-colors text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                +91 6267607029
              </a>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-coffee-100 hover:bg-coffee-200 flex items-center justify-center border border-coffee-200 transition-all hover:scale-110"
                  >
                    <Icon className="w-5 h-5 text-coffee-700" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-coffee-200 mt-8 pt-8 text-center">
          <p className="text-sm text-coffee-600 mb-2">
            &copy; 2025 BrewNow Café. All rights reserved.
          </p>
          <p className="text-xs text-coffee-500">
            Developed with ❤️ by <span className="font-semibold text-coffee-700">Vicky Narvare</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
