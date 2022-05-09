import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AddProduct } from "./components/AddProduct";

import { Layout } from "./layouts/Layout";
import { ProductList } from "./components/ProductList";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/products" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Route>
        <Route path="*" element={<Navigate to="/products" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
