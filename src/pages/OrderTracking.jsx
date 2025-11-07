import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { QrCode, Search, Clock, CheckCircle, XCircle, Package } from 'lucide-react'

function OrderTracking() {
  const location = useLocation()
  const [orderId, setOrderId] = useState('')
  const [tableNumber, setTableNumber] = useState('')
  const [orderStatus, setOrderStatus] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (location.state?.orderId) {
      setOrderId(location.state.orderId)
      setTableNumber(location.state.tableNumber || '')
      // Auto-search for the order
      const orders = JSON.parse(localStorage.getItem('orders') || '[]')
      const foundOrder = orders.find(o => o.orderId === location.state.orderId)
      if (foundOrder) {
        setOrderStatus(foundOrder)
      }
    }
  }, [location.state])

  const handleSearch = (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Check localStorage for orders
    setTimeout(() => {
      const orders = JSON.parse(localStorage.getItem('orders') || '[]')
      let foundOrder = null
      
      if (orderId) {
        foundOrder = orders.find(o => o.orderId === orderId)
      } else if (tableNumber) {
        foundOrder = orders.find(o => o.tableNumber === tableNumber)
        // Get the most recent order for this table
        const tableOrders = orders.filter(o => o.tableNumber === tableNumber)
        if (tableOrders.length > 0) {
          foundOrder = tableOrders[tableOrders.length - 1]
        }
      }
      
      if (foundOrder) {
        setOrderStatus(foundOrder)
      } else {
        setOrderStatus({ status: 'not-found' })
      }
      setIsLoading(false)
    }, 1000)
  }

  const statusSteps = [
    { key: 'received', label: 'Order Received', icon: CheckCircle, completed: orderStatus?.status === 'received' || orderStatus?.status === 'preparing' || orderStatus?.status === 'ready' },
    { key: 'preparing', label: 'Preparing', icon: Package, completed: orderStatus?.status === 'preparing' || orderStatus?.status === 'ready' },
    { key: 'ready', label: 'Ready', icon: CheckCircle, completed: orderStatus?.status === 'ready' },
  ]

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-24 bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block mb-6">
            <div className="bg-coffee-900 text-white px-8 py-4 rounded-full inline-flex items-center gap-3 font-bold">
              <QrCode className="w-6 h-6" />
              <span>Order Tracking</span>
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-coffee-900 mb-6 leading-tight">
            Track Your Order
          </h1>
          <p className="text-xl md:text-2xl text-coffee-600 max-w-3xl mx-auto font-medium">
            Enter your order details to see real-time status updates
          </p>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSearch} className="bg-cream-50 rounded-3xl p-10 modern-shadow-lg mb-8 border border-coffee-200">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-coffee-900 mb-3">
                    Order ID (Optional)
                  </label>
                  <input
                    type="text"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    placeholder="e.g., ORD-1234"
                    className="w-full px-5 py-4 rounded-xl border border-coffee-200 bg-white text-coffee-900 placeholder-coffee-400 focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:border-coffee-500 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-coffee-900 mb-3">
                    Table Number (Optional) (1-10)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={tableNumber}
                    onChange={(e) => {
                      const value = e.target.value
                      if (value === '' || (parseInt(value) >= 1 && parseInt(value) <= 10)) {
                        setTableNumber(value)
                      }
                    }}
                    placeholder="e.g., 5"
                    className="w-full px-5 py-4 rounded-xl border border-coffee-200 bg-white text-coffee-900 placeholder-coffee-400 focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:border-coffee-500 font-medium"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading || (!orderId && !tableNumber)}
                  className="w-full px-6 py-5 bg-coffee-900 text-white rounded-xl font-bold text-lg modern-shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Clock className="w-5 h-5 animate-spin" />
                      <span>Searching...</span>
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5" />
                      <span>Track Order</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Order Not Found */}
            {orderStatus && orderStatus.status === 'not-found' && (
              <div className="bg-red-100 rounded-3xl p-10 text-center modern-shadow-lg border border-red-300 animate-fade-in">
                <XCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <p className="text-xl font-bold text-red-900 mb-2">Order Not Found</p>
                <p className="text-red-700 font-medium">
                  कृपया अपना Order ID या Table Number जांचें और फिर से कोशिश करें।
                </p>
              </div>
            )}

            {/* Order Status Display */}
            {orderStatus && orderStatus.status !== 'not-found' && (
              <div className="bg-white rounded-3xl p-10 modern-shadow-lg border border-coffee-200 animate-fade-in">
                {/* Order Header */}
                <div className="border-b border-coffee-200 pb-6 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl font-bold text-coffee-900">
                      Order #{orderStatus.orderId}
                    </h2>
                    <span className="px-4 py-2 bg-cream-100 text-coffee-700 rounded-full text-sm font-bold border border-coffee-200">
                      Table {orderStatus.tableNumber}
                    </span>
                  </div>
                  <p className="text-sm text-coffee-600">
                    Placed on {orderStatus.timestamp}
                  </p>
                </div>

                {/* Status Steps */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-coffee-900 mb-4">Order Status</h3>
                  <div className="space-y-4">
                    {statusSteps.map((step, index) => {
                      const Icon = step.icon
                      const isActive = orderStatus.status === step.key
                      const isCompleted = step.completed
                      
                      return (
                        <div key={step.key} className="flex items-center gap-4">
                          <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                            isCompleted
                              ? 'bg-green-600 text-white'
                              : isActive
                              ? 'bg-coffee-900 text-white'
                              : 'bg-cream-100 text-coffee-400 border border-coffee-200'
                          }`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <p className={`font-bold ${
                              isCompleted || isActive
                                ? 'text-coffee-900'
                                : 'text-coffee-600'
                            }`}>
                              {step.label}
                            </p>
                            {isActive && (
                              <p className="text-sm text-coffee-600 mt-1">
                                Estimated time: {orderStatus.estimatedTime}
                              </p>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Order Items */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-coffee-900 mb-4">Order Items</h3>
                  <div className="space-y-3">
                    {orderStatus.items.map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-coffee-200 last:border-0">
                        <div>
                          <p className="font-bold text-coffee-900">{item.name}</p>
                          <p className="text-sm text-coffee-600">Quantity: {item.quantity}</p>
                        </div>
                        <span className="font-bold text-coffee-700">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Total */}
                <div className="flex items-center justify-between pt-4 border-t border-coffee-200">
                  <span className="text-lg font-bold text-coffee-900">Total</span>
                  <span className="text-xl font-extrabold text-coffee-900">{orderStatus.total}</span>
                </div>
              </div>
            )}

            {/* Help Text */}
            {!orderStatus && (
              <div className="bg-cream-50 rounded-3xl p-10 text-center border border-coffee-200">
                <QrCode className="w-12 h-12 text-coffee-400 mx-auto mb-4" />
                <p className="text-coffee-600 font-medium">
                  Enter your order ID or table number to track your order status in real-time.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default OrderTracking
