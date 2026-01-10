import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import CategoryBar from "./components/CategoryBar";
import HeroBanner from "./components/HeroBanner";
import DealsSection from "./components/DealsSection";

import ProductDetail from "./pages/ProductDetail";
import Address from "./pages/Address";
import Payment from "./pages/Payment";
import OrderSummary from "./pages/OrderSummary";
import ScrollToTop from "./components/ScrollToTop"; 
function App() {
  return (
    <div className="App min-h-screen bg-gray-100 flex flex-col">
 {/* 🔥 SCROLL FIX */}
      <ScrollToTop />

      {/* ✅ SAME HEADER EVERY PAGE */}
      <Header />

      <Routes>
        {/* 🏠 HOME */}
        <Route
          path="/"
          element={
            <>
              <CategoryBar />
              <HeroBanner />
              <DealsSection />
            </>
          }
        />

        {/* 📦 PRODUCT */}
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* CHECKOUT */}
        <Route path="/address" element={<Address />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
