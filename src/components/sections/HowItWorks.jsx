import { useState, useEffect, useRef } from 'react'
import { QrCode, Coffee, Smile } from 'lucide-react'

function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState([false, false, false])
  const stepRefs = [useRef(null), useRef(null), useRef(null)]

  useEffect(() => {
    const observers = stepRefs.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setVisibleSteps((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          }
        },
        { threshold: 0.3 }
      )
      if (ref.current) {
        observer.observe(ref.current)
      }
      return observer
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const steps = [
    {
      icon: QrCode,
      number: '1',
      title: 'Scan QR',
      description: 'Find the QR code on your table and scan it with your phone camera.',
    },
    {
      icon: Coffee,
      number: '2',
      title: 'Choose Coffee',
      description: 'Browse our digital menu and select your favorite coffee or beverage.',
    },
    {
      icon: Smile,
      number: '3',
      title: 'Enjoy!',
      description: 'Sit back and relax. We\'ll prepare your order and bring it to your table.',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold text-coffee-400 uppercase tracking-wider">Process</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-coffee-900 mb-6 leading-tight">
            How It Works
          </h2>
          <p className="text-xl md:text-2xl text-coffee-600 max-w-3xl mx-auto font-medium">
            Three simple steps to your perfect cup of coffee
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                ref={stepRefs[index]}
                className={`relative transition-all duration-1000 ${
                  visibleSteps[index] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                {/* Connection Line (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-24 left-full w-full h-0.5 bg-coffee-200 transform translate-x-4 z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-coffee-400 rounded-full"></div>
                  </div>
                )}

                <div className="relative bg-white rounded-3xl p-10 text-center shadow-lg border border-coffee-100">
                  {/* Step Number */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-coffee-900 text-white rounded-2xl flex items-center justify-center font-extrabold text-2xl shadow-lg border-4 border-white z-10">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-8 flex justify-center">
                    <div className="w-24 h-24 bg-coffee-100 rounded-3xl flex items-center justify-center shadow-md">
                      <Icon className="w-12 h-12 text-coffee-700" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-3xl font-extrabold text-coffee-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-coffee-600 leading-relaxed text-lg font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
