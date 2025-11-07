import { Coffee, Heart, Users, Award } from 'lucide-react'

function OurStory() {
  const values = [
    {
      icon: Coffee,
      title: 'Premium Quality',
      description: 'We source only the finest coffee beans from sustainable farms around the world.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Every cup is crafted with love and attention to detail by our skilled baristas.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in bringing people together over great coffee and meaningful conversations.',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Combining traditional brewing methods with modern technology for the perfect experience.',
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-coffee-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-coffee-300 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="text-sm font-bold text-coffee-400 uppercase tracking-wider">Story</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-coffee-900 mb-6 leading-tight">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-coffee-600 leading-relaxed font-medium">
              Where tradition meets innovation, and every cup tells a story
            </p>
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-coffee-900 mb-6">
                  The Beginning
                </h2>
                <p className="text-lg md:text-xl text-coffee-600 mb-4 leading-relaxed font-medium">
                  BrewNow Café was born from a simple idea: what if ordering coffee could be as seamless as scanning a QR code? 
                  Founded in 2020, we set out to revolutionize the café experience by combining the warmth of traditional coffee 
                  culture with cutting-edge technology.
                </p>
                <p className="text-lg md:text-xl text-coffee-600 leading-relaxed font-medium">
                  Our founders, passionate coffee enthusiasts and tech innovators, envisioned a space where customers could 
                  enjoy premium coffee without the hassle of waiting in long lines or flagging down busy staff.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Café interior"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.className = 'bg-gradient-to-br from-coffee-200 to-cream-300 rounded-2xl p-12 h-64 flex items-center justify-center';
                    e.target.parentElement.innerHTML = '<Coffee className="w-32 h-32 text-coffee-600 opacity-30" />';
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Barista making coffee"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.className = 'order-2 md:order-1 bg-gradient-to-br from-coffee-200 to-cream-300 rounded-2xl p-12 h-64 flex items-center justify-center';
                    e.target.parentElement.innerHTML = '<Heart className="w-32 h-32 text-coffee-600 opacity-30" />';
                  }}
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-4xl md:text-5xl font-extrabold text-coffee-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg md:text-xl text-coffee-600 mb-4 leading-relaxed font-medium">
                  At BrewNow Café, we're committed to providing an exceptional coffee experience that's both convenient and 
                  personal. We believe that great coffee should be accessible, enjoyable, and sustainable.
                </p>
                <p className="text-lg md:text-xl text-coffee-600 leading-relaxed font-medium">
                  Every bean is carefully selected, every cup is perfectly brewed, and every customer interaction is designed 
                  to make you feel at home. We're not just serving coffee—we're creating moments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold text-coffee-400 uppercase tracking-wider">Values</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-coffee-900 mb-6 leading-tight">
              Our Values
            </h2>
            <p className="text-xl md:text-2xl text-coffee-600 max-w-3xl mx-auto font-medium">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-10 text-center modern-shadow-lg border border-coffee-200"
                >
                  <div className="w-20 h-20 bg-coffee-100 rounded-3xl flex items-center justify-center mx-auto mb-6 modern-shadow-lg border border-coffee-200">
                    <Icon className="w-10 h-10 text-coffee-700" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-coffee-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-coffee-600 leading-relaxed font-medium">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-coffee-900 mb-6 leading-tight">
            Join Us on This Journey
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-coffee-600 max-w-3xl mx-auto font-medium">
            Experience the perfect blend of tradition and innovation. Visit us today and scan your way to the perfect cup.
          </p>
          <a
            href="/menu"
            className="inline-block px-12 py-6 bg-coffee-900 text-white rounded-2xl font-bold text-lg modern-shadow-lg"
          >
            Explore Our Menu
          </a>
        </div>
      </section>
    </div>
  )
}

export default OurStory
