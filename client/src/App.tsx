import { ReactElement, useCallback, useEffect } from 'react'

import LandingPage from './pages/Landing-Page/Landing'
import ProductPage from './Single-Product/SingleProduct'
import { Cart as CartPage } from './pages/Cart-Page/Cart'
import CategoryProductsPage from './pages/Categories-Page/Category'
import CheckoutTestPage from './Payment'
import OrderHistoryPage from './pages/Order-history-Page/OrderHistory'
import OrderDetailPage from './pages/Order-details-Page/OrderDetails'
import LoginPage from './pages/Login-Page/Login.js'
import RegisterPage from './pages/Register-Page/Register.js'
import { Route, Routes } from 'react-router-dom'
import Wishlist from './pages/Wishlist-Page/Wishlist'
import axios, { AxiosError } from 'axios'
import { useUserStore } from './zustand/userStore'
import Navbar from './components/Navbar/Navbar'
import CartSidebar from './components/Cart-Sidebar/CartSidebar'
import SearchResultsPage from './pages/Search-Results-Page/Search-Results'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

function App(): ReactElement {
  const setUser = useUserStore((state) => state.setUser)

  const getUser = useCallback(async () => {
    try {
      const { data } = await axios.get(
        'https://ecommerce-mern-backend-rdu7.onrender.com/api/v1/users/me',
        {
          withCredentials: true
        }
      )
      console.log(data)
      setUser(data.user)
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
      if (error instanceof AxiosError) {
        console.log(error.cause)
        console.log(error.message)
      }
    }
  }, [])
  useEffect(() => {
    getUser()
  }, [getUser])

  return (
    <div className="w-screen h-screen">
      <ToastContainer position="top-center" />

      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<CartSidebar />}>
            <Route path="/" element={<LandingPage />} />

            <Route
              path="/categories/products/:category"
              element={<CategoryProductsPage />}
            />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/productlist" element={<CategoryProductsPage />} />
            <Route path="/wishlist" element={<Wishlist />} />

            <Route path="/checkout" element={<CheckoutTestPage />} />

            {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
            <Route path="/orderhistory" element={<OrderHistoryPage />} />
            <Route path="/orderdetails" element={<OrderDetailPage />} />
          </Route>
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {/* <Example /> */}
      {/* <Nav /> */}
      {/* <Cart /> */}
      {/* <Page /> */}
      {/* <ExampleCategoryFilter /> */}
    </div>
  )
}

export default App
