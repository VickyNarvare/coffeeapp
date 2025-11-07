# ☕ BrewNow Café - Modern Coffee Shop Website

A modern, elegant, and fully responsive coffee shop website built with React.js and Tailwind CSS. Features a seamless QR code ordering system, real-time order tracking, and a beautiful warm beige theme design.

![BrewNow Café](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?logo=vite)

## ✨ Features

### 🎨 Design
- **Modern Warm Beige Theme** - Elegant color palette with coffee browns, beige, and cream tones
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations** - Fade-ins, slide-ups, and interactive hover effects
- **Glassmorphism Effects** - Modern UI with backdrop blur and transparency
- **Clean Typography** - Poppins font family for a professional look

### 🛒 E-Commerce Features
- **Shopping Cart** - Add items to cart with quantity management
- **Order Placement** - Place orders with table number (1-10)
- **Real-time Order Tracking** - Track order status in real-time
- **Toast Notifications** - Beautiful notifications for user actions
- **LocalStorage Persistence** - Orders saved locally

### 📱 Pages & Sections
- **Homepage** - Hero section, "How it Works", menu preview, and contact
- **Menu Page** - Full menu with category filters (Espresso, Latte, Cold Brew, Specialty, Tea)
- **Our Story** - Café history, mission, and values
- **Order Tracking** - Track orders by Order ID or Table Number
- **Admin Dashboard** - Manage orders, view stats, and update order status

### 🎯 Key Functionality
- **28+ Menu Items** - Wide variety of coffee, tea, and specialty drinks
- **Category Filtering** - Filter menu by category
- **Price in Indian Rupees (₹)** - All prices displayed in INR
- **Table Number Validation** - Restricted to tables 1-10
- **Order Status Management** - Received → Preparing → Ready workflow

## 🚀 Tech Stack

- **Frontend Framework:** React.js 18.3.1
- **Build Tool:** Vite 5.4.2
- **Styling:** Tailwind CSS 4.1.17
- **Routing:** React Router DOM 6.26.0
- **Icons:** Lucide React 0.427.0
- **State Management:** React Context API
- **Image Source:** Unsplash CDN

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd brewnow-cafe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
brewnow-cafe/
├── public/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── MenuPreview.jsx
│   │   │   ├── TrackOrder.jsx
│   │   │   └── Contact.jsx
│   │   ├── Cart.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── Layout.jsx
│   ├── context/
│   │   ├── CartContext.jsx
│   │   └── ToastContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Menu.jsx
│   │   ├── OurStory.jsx
│   │   ├── OrderTracking.jsx
│   │   └── AdminDashboard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Color Palette

### Coffee Colors
- `coffee-50` to `coffee-900` - Various shades of brown
- Primary: `coffee-900` (#4a3426) - Dark brown for text and buttons

### Cream Colors
- `cream-50` to `cream-500` - Warm beige and cream tones
- Background: `cream-50`, `cream-100`, `cream-200`

## 🎯 Usage

### For Customers

1. **Browse Menu**
   - Visit the Menu page to see all available items
   - Filter by category (Espresso, Latte, Cold Brew, Specialty, Tea)
   - Click "Add to Cart" to add items

2. **Place Order**
   - Open cart from header
   - Enter table number (1-10)
   - Click "Place Order"
   - Get redirected to order tracking

3. **Track Order**
   - Enter Order ID or Table Number
   - View real-time order status
   - See estimated time

### For Admins

1. **Access Dashboard**
   - Navigate to `/admin`
   - View all active orders
   - Update order status:
     - Received → Start Preparing
     - Preparing → Mark Ready
     - Ready → Complete

2. **View Statistics**
   - Active Orders count
   - Completed Today count
   - Total Revenue
   - Active Tables count

## 🎨 Design Features

### Animations
- **Fade-in** - Smooth content appearance
- **Slide-up** - Elements slide up on scroll
- **Float** - Floating animations for decorative elements
- **Scale-in** - Scale animations for interactive elements

### Interactive Elements
- Hover effects on buttons and cards
- Smooth transitions (300ms)
- Active states for buttons
- Parallax effects on scroll

## 📱 Responsive Design

- **Mobile:** Optimized for screens 320px and above
- **Tablet:** Perfect layout for 768px and above
- **Desktop:** Full experience on 1024px and above

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS v4 with custom theme configuration in `src/index.css`:
- Custom color palette (coffee, cream)
- Custom animations
- Utility classes for shadows and effects

### Vite Configuration
Located in `vite.config.js`:
- React plugin
- Tailwind CSS plugin

## 📝 Features in Detail

### Shopping Cart
- Add/remove items
- Update quantities
- Table number input (1-10 validation)
- Total price calculation
- Order placement with localStorage persistence

### Order Tracking
- Search by Order ID or Table Number
- Real-time status updates
- Order history display
- Estimated time display

### Admin Dashboard
- Real-time order updates (refreshes every 5 seconds)
- Order status management
- Statistics dashboard
- Complete order workflow

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Key Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.26.0",
  "tailwindcss": "^4.1.17",
  "@tailwindcss/vite": "^4.1.17",
  "lucide-react": "^0.427.0",
  "vite": "^5.4.2"
}
```

## 🎯 Future Enhancements

- [ ] User authentication
- [ ] Payment integration
- [ ] Email notifications
- [ ] Backend API integration
- [ ] Real-time order updates via WebSocket
- [ ] QR code generator
- [ ] Multi-language support
- [ ] Dark mode toggle

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please open an issue in the repository.

---

**Made with ☕ and ❤️ for coffee lovers**
