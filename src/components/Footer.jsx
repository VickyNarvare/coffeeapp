import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter } from 'lucide-react'

function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
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

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-extrabold mb-4 text-coffee-900">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-coffee-600 hover:text-coffee-900 transition-colors text-sm font-medium">
                  Pricing
                </a>
              </li>
              <li>
                <Link to="/track-order" className="text-coffee-600 hover:text-coffee-900 transition-colors text-sm font-medium">
                  Tracking
                </Link>
              </li>
              <li>
                <a href="#" className="text-coffee-600 hover:text-coffee-900 transition-colors text-sm font-medium">
                  Report a Bug
                </a>
              </li>
              <li>
                <a href="#" className="text-coffee-600 hover:text-coffee-900 transition-colors text-sm font-medium">
                  Terms of Services
                </a>
              </li>
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h3 className="text-xl font-extrabold mb-4 text-coffee-900">Our Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-coffee-600 hover:text-coffee-900 transition-colors text-sm font-medium">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-coffee-600 hover:text-coffee-900 transition-colors text-sm font-medium">
                  Tracking
                </a>
              </li>
              <li>
                <a href="#" className="text-coffee-600 hover:text-coffee-900 transition-colors text-sm font-medium">
                  Report a Bug
                </a>
              </li>
              <li>
                <a href="#" className="text-coffee-600 hover:text-coffee-900 transition-colors text-sm font-medium">
                  Terms of Services
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-extrabold mb-4 text-coffee-900">Address</h3>
            <p className="text-coffee-600 text-sm leading-relaxed font-medium mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 rounded-xl bg-coffee-100 flex items-center justify-center border border-coffee-200"
                  >
                    <Icon className="w-6 h-6 text-coffee-700" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-coffee-200 mt-8 pt-8 text-center text-sm text-coffee-600">
          <p>&copy; 2025 BrewNow Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
