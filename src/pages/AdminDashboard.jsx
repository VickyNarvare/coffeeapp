import { useState, useEffect } from 'react'
import { Coffee, Clock, CheckCircle, AlertCircle, Table, TrendingUp } from 'lucide-react'

function AdminDashboard() {
  const [orders, setOrders] = useState([])

  const parseDate = (dateStr) => {
    if (!dateStr) return null
    // Try standard date first
    let date = new Date(dateStr)
    if (!isNaN(date.getTime())) return date

    // Try parsing DD/MM/YYYY, HH:MM:SS am/pm (en-IN format)
    try {
      const [datePart, timePart] = dateStr.split(', ')
      if (!datePart || !timePart) return null
      const [day, month, year] = datePart.split('/')
      let [time, modifier] = timePart.split(' ')
      let [hours, minutes, seconds] = time.split(':')

      if (modifier?.toLowerCase() === 'pm' && hours !== '12') hours = parseInt(hours) + 12
      if (modifier?.toLowerCase() === 'am' && hours === '12') hours = 0

      return new Date(year, month - 1, day, hours, minutes, seconds)
    } catch (e) {
      return null
    }
  }

  const getTimeAgo = (timestamp) => {
    const orderTime = parseDate(timestamp)
    if (!orderTime) return 'Just now'

    const now = new Date()
    const diffMs = now - orderTime
    const diffMins = Math.floor(diffMs / 60000)

    if (diffMins < 1) return 'Just now'
    if (diffMins < 60) return `${diffMins} min ago`
    const diffHours = Math.floor(diffMins / 60)
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`
    return `${Math.floor(diffHours / 24)} day${Math.floor(diffHours / 24) > 1 ? 's' : ''} ago`
  }

  const loadOrders = () => {
    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]')
    // Convert to admin format and sort by status (active first) then timestamp (newest first)
    const formattedOrders = savedOrders
      .map(order => ({
        id: order.orderId,
        table: order.tableNumber,
        items: order.items.map(item => `${item.name} x${item.quantity}`),
        status: order.status || 'received',
        time: getTimeAgo(order.timestamp),
        total: order.total,
        timestamp: order.timestamp,
      }))
      .sort((a, b) => {
        // Sort completed orders to the bottom
        if (a.status === 'completed' && b.status !== 'completed') return 1
        if (a.status !== 'completed' && b.status === 'completed') return -1
        // Then sort by timestamp
        const dateA = parseDate(a.timestamp) || new Date(0)
        const dateB = parseDate(b.timestamp) || new Date(0)
        return dateB - dateA
      })
    setOrders(formattedOrders)
  }

  useEffect(() => {
    loadOrders()
    // Refresh orders every 5 seconds
    const interval = setInterval(loadOrders, 5000)
    return () => clearInterval(interval)
  }, [])

  const stats = {
    activeOrders: orders.filter(o => o.status !== 'ready' && o.status !== 'completed').length,
    completedToday: orders.filter(o => o.status === 'ready' || o.status === 'completed').length,
    totalRevenue: `₹${orders.reduce((sum, order) => {
      const price = parseFloat(order.total.replace('₹', '').replace(/,/g, '')) || 0
      return sum + price
    }, 0).toFixed(2)}`,
    activeTables: new Set(orders.filter(o => o.status !== 'ready' && o.status !== 'completed').map(o => o.table)).size,
  }

  const updateOrderStatus = (orderId, newStatus) => {
    // Update in localStorage
    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]')
    const updatedOrders = savedOrders.map(order =>
      order.orderId === orderId ? { ...order, status: newStatus } : order
    )
    localStorage.setItem('orders', JSON.stringify(updatedOrders))

    // Update local state
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    ))
  }

  const completeOrder = (orderId) => {
    updateOrderStatus(orderId, 'completed')
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'received':
        return 'bg-blue-600 text-white'
      case 'preparing':
        return 'bg-yellow-600 text-white'
      case 'ready':
        return 'bg-green-600 text-white'
      default:
        return 'bg-coffee-600 text-white'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'received':
        return Clock
      case 'preparing':
        return Coffee
      case 'ready':
        return CheckCircle
      default:
        return AlertCircle
    }
  }

  return (
    <div className="pt-16 bg-cream-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-coffee-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-extrabold text-coffee-900">Admin Dashboard</h1>
              <p className="text-coffee-600 mt-1 font-medium">Manage orders and monitor café activity</p>
            </div>
            <div className="text-sm text-coffee-600 font-medium">
              {new Date().toLocaleString()}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 modern-shadow-lg border border-coffee-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-coffee-600 mb-1 font-medium">Active Orders</p>
                  <p className="text-3xl font-extrabold text-coffee-900">{stats.activeOrders}</p>
                </div>
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center modern-shadow">
                  <Coffee className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 modern-shadow-lg border border-coffee-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-coffee-600 mb-1 font-medium">Completed Today</p>
                  <p className="text-3xl font-extrabold text-coffee-900">{stats.completedToday}</p>
                </div>
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center modern-shadow">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 modern-shadow-lg border border-coffee-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-coffee-600 mb-1 font-medium">Total Revenue</p>
                  <p className="text-3xl font-extrabold text-coffee-900">{stats.totalRevenue}</p>
                </div>
                <div className="w-14 h-14 bg-yellow-600 rounded-xl flex items-center justify-center modern-shadow">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 modern-shadow-lg border border-coffee-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-coffee-600 mb-1 font-medium">Active Tables</p>
                  <p className="text-3xl font-extrabold text-coffee-900">{stats.activeTables}</p>
                </div>
                <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center modern-shadow">
                  <Table className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orders List */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl modern-shadow-lg overflow-hidden border border-coffee-200">
            <div className="px-8 py-6 border-b border-coffee-200">
              <h2 className="text-2xl font-extrabold text-coffee-900">Recent Orders</h2>
            </div>
            <div className="divide-y divide-coffee-200">
              {orders.length === 0 ? (
                <div className="p-12 text-center">
                  <Coffee className="w-16 h-16 text-coffee-400 mx-auto mb-4" />
                  <p className="text-xl text-coffee-600 font-medium mb-2">No Orders Yet</p>
                  <p className="text-coffee-500 text-sm">Orders placed by customers will appear here</p>
                </div>
              ) : (
                orders.map((order) => {
                  const StatusIcon = getStatusIcon(order.status)
                  return (
                    <div key={order.id} className={`p-8 hover:bg-cream-50 transition-colors ${order.status === 'completed' ? 'opacity-60 bg-gray-50' : ''}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center gap-2">
                              <Table className="w-5 h-5 text-coffee-600" />
                              <span className="font-bold text-coffee-900">Table {order.table}</span>
                            </div>
                            <span className="text-coffee-400">•</span>
                            <span className="text-coffee-700 font-medium">{order.id}</span>
                            <span className="text-coffee-400">•</span>
                            <span className="text-sm text-coffee-600">{order.time}</span>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {order.items.map((item, idx) => (
                              <span
                                key={idx}
                                className="px-4 py-2 bg-cream-100 text-coffee-700 rounded-full text-sm font-medium border border-coffee-200"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 modern-shadow ${getStatusColor(order.status)}`}>
                              <StatusIcon className="w-4 h-4" />
                              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </span>
                          </div>
                        </div>
                        <div className="ml-6 text-right">
                          <p className="text-2xl font-extrabold text-coffee-900 mb-4">{order.total}</p>
                          <div className="flex gap-2">
                            {order.status === 'received' && (
                              <button
                                onClick={() => updateOrderStatus(order.id, 'preparing')}
                                className="px-5 py-2.5 bg-coffee-900 text-white rounded-xl text-sm font-bold modern-shadow transition-all duration-300"
                              >
                                Start Preparing
                              </button>
                            )}
                            {order.status === 'preparing' && (
                              <button
                                onClick={() => updateOrderStatus(order.id, 'ready')}
                                className="px-5 py-2.5 bg-green-600 text-white rounded-xl text-sm font-bold modern-shadow transition-all duration-300"
                              >
                                Mark Ready
                              </button>
                            )}
                            {order.status === 'ready' && (
                              <button
                                onClick={() => completeOrder(order.id)}
                                className="px-5 py-2.5 bg-coffee-600 text-white rounded-xl text-sm font-bold modern-shadow transition-all duration-300"
                              >
                                Complete
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AdminDashboard
