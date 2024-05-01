import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

import { Suspense } from "react";
import SpinnerLoader from "./components/SpinnerLoader/SpinnerLoader";
import Products from "./pages/Products/Products";
import Walet from "./pages/Walet/Walet";

function App() {
  return (
  
      <Suspense fallback={<SpinnerLoader/>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:productId" element={<h1>Products Path</h1>} />
          <Route path="/walet" element={<Walet/>} />
          <Route path="/login" element={<h1>login Path</h1>} />
          <Route path="/register" element={<h1>login Path</h1>} />
          <Route path="/profile" element={<h1>login Path</h1>} />
          <Route path="/*" element={<SpinnerLoader/>} />
        </Routes>
      </BrowserRouter>

      </Suspense>
  );
}

export default App;
