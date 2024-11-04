import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/home/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import CartPage from '../pages/books/CartPage'
import CheckoutPage from '../pages/books/CheckoutPage'
import SingleBook from '../pages/books/SingleBook'
import PrivateRoute from './PrivateRoute'
import OrderPage from '../pages/books/OrderPage'
import AdminRoute from './AdminRoute'
import AdminLogin from '../components/AdminLogin'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/orders',
                element: (
                    <PrivateRoute>
                        <OrderPage />
                    </PrivateRoute>
                ),
            },
            {
                path: '/about',
                element: <div>About</div>,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/cart',
                element: <CartPage />,
            },
            {
                path: '/checkout',
                element: (
                    <PrivateRoute>
                        <CheckoutPage />
                    </PrivateRoute>
                ),
            },
            {
                path: '/books/:id',
                element: <SingleBook />,
            },
        ],
    },
    {
        path: '/admin',
        element: <AdminLogin />,
    },
    {
        path: '/dashboard',
        element: (
            <AdminRoute>
                <div>Dashboard</div>
            </AdminRoute>
        ),
        children: [
            {
                path: '',
                element: (
                    <AdminRoute>
                        <div>Dashboard Home</div>
                    </AdminRoute>
                ),
            },
            {
                path: 'add-new-book',
                element: (
                    <AdminRoute>
                        <div>add-new-book</div>
                    </AdminRoute>
                ),
            },
            {
                path: 'edit-book/:id',
                element: (
                    <AdminRoute>
                        <div>edit-book</div>
                    </AdminRoute>
                ),
            },
            {
                path: 'manage-books',
                element: (
                    <AdminRoute>
                        <div>manage-books</div>
                    </AdminRoute>
                ),
            },
        ],
    },
])

export default router
