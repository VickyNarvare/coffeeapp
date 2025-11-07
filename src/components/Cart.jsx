import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'
import { X, Plus, Minus, ShoppingBag, CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Cart({ isOpen, onClose }) {
  const {
    cart,
    tableNumber,
    setTableNumber,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    placeOrder,
  } = useCart()
  const { showToast } = useToast()
  const [isPlacingOrder, setIsPlacingOrder] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const navigate = useNavigate()

  const handlePlaceOrder = () => {
    if (!tableNumber) {
      showToast('कृपया अपना Table Number दर्ज करें', 'error')
      return
    }
    setIsPlacingOrder(true)
    setTimeout(() => {
      const order = placeOrder()
      if (order) {
        showToast('Order placed successfully!', 'success')
        setOrderPlaced(true)
        setTimeout(() => {
          onClose()
          setOrderPlaced(false)
          navigate('/track-order', { state: { orderId: order.orderId, tableNumber: order.tableNumber } })
        }, 2000)
      }
      setIsPlacingOrder(false)
    }, 1000)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 flex flex-col border-l border-coffee-200">
        {/* Header */}
        <div className="p-6 border-b border-coffee-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-coffee-900" />
            <h2 className="text-2xl font-bold text-coffee-900">Your Order</h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-lg bg-cream-100 hover:bg-cream-200 flex items-center justify-center transition-colors border border-coffee-200"
          >
            <X className="w-5 h-5 text-coffee-900" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-coffee-400 mx-auto mb-4" />
              <p className="text-coffee-600 font-medium">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.name}
                  className="bg-cream-50 rounded-xl p-4 border border-coffee-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-coffee-900 mb-1">{item.name}</h3>
                      <p className="text-sm text-coffee-600">{item.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.name)}
                      className="w-8 h-8 rounded-lg bg-cream-200 hover:bg-red-100 flex items-center justify-center transition-colors border border-coffee-200"
                    >
                      <X className="w-4 h-4 text-coffee-900" />
                    </button>
                  </div>
                  <div className="flex items-center gap-2 bg-white rounded-xl p-1 border border-coffee-200">
                    <button
                      onClick={() => updateQuantity(item.name, item.quantity - 1)}
                      className="w-9 h-9 rounded-lg bg-cream-100 hover:bg-red-100 active:scale-95 flex items-center justify-center transition-all duration-200 border border-coffee-200 hover:border-red-300 group"
                    >
                      <Minus className="w-4 h-4 text-coffee-900 group-hover:scale-110 transition-transform" />
                    </button>
                    <span className="text-coffee-900 font-extrabold text-lg w-10 text-center bg-white rounded-lg py-1 border border-coffee-200">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.name, item.quantity + 1)}
                      className="w-9 h-9 rounded-lg bg-cream-100 hover:bg-green-100 active:scale-95 flex items-center justify-center transition-all duration-200 border border-coffee-200 hover:border-green-300 group"
                    >
                      <Plus className="w-4 h-4 text-coffee-900 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-coffee-200 space-y-4">
            {/* Table Number Input */}
            <div>
              <label className="block text-sm font-bold text-coffee-900 mb-2">
                Table Number * (1-10)
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
                placeholder="Enter table number (1-10)"
                className="w-full px-4 py-3 rounded-xl border border-coffee-200 bg-white text-coffee-900 placeholder-coffee-400 focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:border-coffee-500 font-medium"
              />
            </div>

            {/* Total */}
            <div className="flex items-center justify-between py-4 border-t border-coffee-200">
              <span className="text-lg font-bold text-coffee-900">Total</span>
              <span className="text-2xl font-extrabold text-coffee-900">
                ₹{getTotalPrice().toFixed(2)}
              </span>
            </div>

            {/* Place Order Button */}
            {orderPlaced ? (
              <div className="bg-green-100 rounded-xl p-4 text-center border border-green-300">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-green-900 font-bold">Order Placed Successfully!</p>
              </div>
            ) : (
              <button
                onClick={handlePlaceOrder}
                disabled={isPlacingOrder || !tableNumber}
                className="w-full px-6 py-4 bg-coffee-900 text-white rounded-xl font-bold text-lg modern-shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPlacingOrder ? 'Placing Order...' : 'Place Order'}
              </button>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default Cart
