import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import CategoryBar from "./components/CategoryBar";
import HeroBanner from "./components/HeroBanner";
import DealsSection from "./components/DealsSection";
import Footer from "./components/Footer";

import ProductDetail from "./pages/ProductDetail";
import Address from "./pages/Address";
import Payment from "./pages/Payment";
import OrderSummary from "./pages/OrderSummary";

function App() {
  return (
    <div className="App min-h-screen bg-gray-100 flex flex-col">
      {/* COMMON HEADER */}
      <Header />
      <CategoryBar />

      {/* ROUTES */}
      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <HeroBanner />
              <DealsSection />
            </>
          }
        />

        {/* PRODUCT DETAIL PAGE */}
        <Route path="/product/:id" element={<ProductDetail />} />
<Route path="/address" element={<Address />} />
<Route path="/payment" element={<Payment />} />
<Route path="/order-summary" element={<OrderSummary />} />

 </Routes>
      {/* COMMON FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
