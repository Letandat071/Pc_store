import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Login from "../pages/Login"
import Register from "../pages/Register"
import ForgotPassword from "../pages/ForgotPassword"
import About from "../pages/About"
import Cart from "../pages/Cart"
import Checkout from "../pages/Checkout"
import Profile from "../pages/Profile"
import Tracking from "../pages/Tracking"
import Support from "../pages/Support"
import Products from "../pages/Products"
import BuildPC from "../pages/BuildPC"
import Promotion from "../pages/Promotion"
import News from "../pages/News"
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
        {
        path: "/profile",
        page: Profile,
        isLayout: true
    },
        {
        path: "/tracking",
        page: Tracking,
        isLayout: true
    },
        {
        path: "/support",
        page: Support,
        isLayout: true
    },
        {
        path: "/products",
        page: Products,
        isLayout: true,
        children: [
            {
                path: "category/:categorySlug",
                page: Products,
                isLayout: false
            }
        ]
    },
        {
        path: "/build-pc",
        page: BuildPC,
        isLayout: true
    },
        {
        path: "/promotion",
        page: Promotion,
        isLayout: true
    },
        {
        path: "/news",
        page: News,
        isLayout: true
    },
]

export default routes