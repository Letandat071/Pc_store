import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import routes from "./routes"
import DefaultLayout from "./layout/DefaultLayout"
import { Fragment } from "react"
export function App() {
 

  return (
    <div>
     <Router>
      <Routes>
				{/* Map router da cau hinh */}
        {routes.map((route) => {
          const Page = route.page
          const Layout = route.isLayout ? DefaultLayout : Fragment
          return (
          <Route path={route.path} element= {<Layout><Page/></Layout>}/>
          
          )
        })}
      </Routes>
     </Router>
    </div>
  )
}
export default App