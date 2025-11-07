import { Link } from 'react-router-dom'
import { QrCode, ArrowRight, Clock, CheckCircle } from 'lucide-react'

function TrackOrder() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div>
              <div className="inline-block mb-6">
                <span className="text-sm font-bold text-coffee-400 uppercase tracking-wider">Tracking</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-coffee-900 mb-6 leading-tight">
                Track Your Order
              </h2>
              <p className="text-xl text-coffee-600 mb-10 leading-relaxed font-medium">
                Already placed an order? Enter your table number or order ID to see the real-time status of your coffee.
              </p>
              <Link
                to="/track-order"
                className="inline-flex items-center gap-3 px-10 py-5 bg-coffee-900 text-white rounded-2xl font-bold text-lg modern-shadow-lg group"
              >
                <QrCode className="w-6 h-6" />
                <span>Check Order Status</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Right Side - Visual */}
            <div className="relative">
              <div className="bg-cream-100 rounded-3xl p-10 modern-shadow-lg border border-coffee-200">
                <div className="bg-white rounded-2xl p-8 mb-6 modern-shadow border border-coffee-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 bg-coffee-900 rounded-2xl flex items-center justify-center modern-shadow">
                      <QrCode className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-coffee-900">Order #1234</h3>
                      <p className="text-sm text-coffee-600">Table 5</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-coffee-900">Order Received</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-coffee-900">Preparing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-coffee-400" />
                      <span className="text-sm text-coffee-600">Ready Soon</span>
                    </div>
                  </div>
                </div>
                <div className="text-center text-sm text-coffee-600">
                  Estimated time: 5-7 minutes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrackOrder

