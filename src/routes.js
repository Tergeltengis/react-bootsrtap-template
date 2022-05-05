import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AddProduct } from "./AddProduct";

import { Layout } from "./Layout";
import { ProductList } from "./ProductList";

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
