import { MapPin, Clock, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react'

function Contact() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ]

  const hours = [
    { day: 'Monday - Friday', time: '7:00 AM - 8:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 9:00 PM' },
    { day: 'Sunday', time: '8:00 AM - 7:00 PM' },
  ]

  return (
    <section className="py-24 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold text-coffee-400 uppercase tracking-wider">Contact</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-coffee-900 mb-6 leading-tight">
            Visit Us
          </h2>
          <p className="text-xl md:text-2xl text-coffee-600 max-w-3xl mx-auto font-medium">
            Come experience the warmth and aroma of BrewNow Café
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-10 modern-shadow-lg border border-coffee-200">
              <h3 className="text-2xl font-bold text-coffee-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-coffee-100 rounded-xl flex items-center justify-center flex-shrink-0 border border-coffee-200">
                    <MapPin className="w-7 h-7 text-coffee-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-coffee-900 mb-1">Address</h4>
                    <p className="text-coffee-600">
                      123 Coffee Street<br />
                      Brew City, BC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-coffee-100 rounded-xl flex items-center justify-center flex-shrink-0 border border-coffee-200">
                    <Phone className="w-7 h-7 text-coffee-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-coffee-900 mb-1">Phone</h4>
                    <p className="text-coffee-600">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-coffee-100 rounded-xl flex items-center justify-center flex-shrink-0 border border-coffee-200">
                    <Mail className="w-7 h-7 text-coffee-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-coffee-900 mb-1">Email</h4>
                    <p className="text-coffee-600">hello@brewnowcafe.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-3xl p-10 modern-shadow-lg border border-coffee-200">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-7 h-7 text-coffee-700" />
                <h3 className="text-2xl font-bold text-coffee-900">Opening Hours</h3>
              </div>
              <div className="space-y-3">
                {hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-coffee-200 last:border-0">
                    <span className="font-bold text-coffee-900">{schedule.day}</span>
                    <span className="text-coffee-600">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl p-10 modern-shadow-lg border border-coffee-200">
              <h3 className="text-2xl font-bold text-coffee-900 mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-14 h-14 bg-coffee-100 rounded-xl flex items-center justify-center border border-coffee-200"
                    >
                      <Icon className="w-7 h-7 text-coffee-700" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-3xl p-10 modern-shadow-lg border border-coffee-200">
            <h3 className="text-2xl font-bold text-coffee-900 mb-6">Find Us</h3>
            <div className="aspect-square bg-cream-100 rounded-2xl flex items-center justify-center relative overflow-hidden border border-coffee-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-coffee-400 mx-auto mb-4" />
                  <p className="text-coffee-900 font-bold">Interactive Map</p>
                  <p className="text-sm text-coffee-600 mt-2">123 Coffee Street, Brew City</p>
                </div>
              </div>
              {/* Map would be integrated here with Google Maps or similar */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

