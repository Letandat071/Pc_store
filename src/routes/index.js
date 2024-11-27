import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Login from "../pages/Login"
import Register from "../pages/Register"
import ForgotPassword from "../pages/ForgotPassword"
import About from "../pages/About"
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
}
   
]

export default routes