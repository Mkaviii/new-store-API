import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // ✅ Import Outlet
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

/* Layout component */
const Layout = () => {
  return (
    <CartProvider>
      <Navbar />
      <main>
        <Outlet /> {/* Child routes will render here */}
      </main>
    </CartProvider>
  );
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Products /> },
        { path: "cart", element: <Cart /> },
        { path: "*", element: <h2>Page Not Found</h2> },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);

const App = () => {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      }}
    />
  );
};

export default App;
