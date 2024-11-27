import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Login from "../pages/Login"
import Register from "../pages/Register"
import ForgotPassword from "../pages/ForgotPassword"
import About from "../pages/About"
import Cart from "../pages/Cart"
import Checkout from "../pages/Checkout"
const routes = [
        {
        path: "/", 
        page: Home,
        isLayout: true
    },
        {
        path: "*", 
        page: NotFound,
        isLayout: true
    },
        {
        path: "/login",
        page: Login,
        isLayout: true
    },
        {
        path: "/register",
        page: Register,
        isLayout: true
    },
        {
        path: "/forgot-password",
        page: ForgotPassword,
        isLayout: true
    },
        {
        path: "/about",
        page: About,
        isLayout: true
    },
        {
        path: "/cart",
        page: Cart,
        isLayout: true,
        children: [
            {
                path: "checkout",
                page: Checkout,
                isLayout: false
            }
        ]
    },
]

export default routes