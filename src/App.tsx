import { BrowserRouter, Route, Routes, HashRouter, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";

import Navigation from "./components/Navigation";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import LoginPage from "./pages/LoginPage";
import Page404 from "./pages/404Page";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  return (
    <>
      <Navigation />
      <AnimatePresence mode="wait">
        <main className="from-teal-100 from-10%  to-teal-50 to-40% bg-gradient-to-b">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Toaster />
        </main>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default App;
