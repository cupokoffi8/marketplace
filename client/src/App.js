import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; 
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Product } from "./pages/Product/Product";
import { Products } from "./pages/Products/Products"; 
import ShoppingCart from "./pages/Cart/Cart";
import "./App.scss"; 
import Contact from "./pages/Contact-Us/Contact-Us";

const Layout = () => {
  return (
    <div className="app">
      <Navbar /> 
        <br />
      <Outlet /> 
      <Footer /> 
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />, 
    children: [
      {
        path: "/", 
        element: <Home />,
      }, 
      {
        path: "/products/:id", 
        element: <Products />, 
      }, 
      {
        path: "/product/:id", 
        element: <Product />,
      }, 
      {
        path: "/cart",
        element: <ShoppingCart />
      }, 
      {
        path: "/contact", 
        element: <Contact /> 
      }
    ],
  }, 
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} /> 
    </div>
  );
}

export default App;
