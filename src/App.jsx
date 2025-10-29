import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

// Import the new popup component
import SchemePopup from './components/SchemePopup';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Page Components
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Stories from './pages/Stories';
import Gallery from './pages/Gallery';
import Products from './pages/Products';
import ContactUs from './pages/ContactUs';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';

// Product Page Components
import Bath from './pages/products/Bath';
import Candle from './pages/products/Candle';
import Chutney from './pages/products/Chutney';
import Cups from './pages/products/Cups';
import Garden from './pages/products/Garden';
import Hanging from './pages/products/Hanging';
import Jewellery from './pages/products/Jewellery';
import Masala from './pages/products/Masala';
import Pickle from './pages/products/Pickle';
import Storage from './pages/products/Storage';
import Table from './pages/products/Table';
import Wall from './pages/products/Wall';

function App() {
  const [user, setUser] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for the popup

  useEffect(() => {
    // This effect runs only once when the app starts
    setIsPopupOpen(true);
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []); // The empty array ensures this runs only on the initial render

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      {/* Render the popup component conditionally */}
      <SchemePopup isOpen={isPopupOpen} onClose={closePopup} />

      <Navbar user={user} />
      <main>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/wishlist" element={<Wishlist />} />
          
          {/* Product Category Pages */}
          <Route path="/products/bath" element={<Bath />} />
          <Route path="/products/candles" element={<Candle />} />
          <Route path="/products/chutney" element={<Chutney />} />
          <Route path="/products/cups" element={<Cups />} />
          <Route path="/products/garden" element={<Garden />} />
          <Route path="/products/hanging" element={<Hanging />} />
          <Route path="/products/jewellery" element={<Jewellery />} />
          <Route path="/products/masala" element={<Masala />} />
          <Route path="/products/pickle" element={<Pickle />} />
          <Route path="/products/storage" element={<Storage />} />
          <Route path="/products/table" element={<Table />} />
          <Route path="/products/wall" element={<Wall />} />
          
          {/* Protected Route */}
          <Route 
            path="/checkout" 
            element={
              <ProtectedRoute user={user}>
                <Checkout />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;