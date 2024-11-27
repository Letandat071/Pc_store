import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import routes from "./routes"
import DefaultLayout from "./layout/DefaultLayout"
import { Fragment } from "react"

export function App() {
  const renderRoutes = (routes) => {
    return routes.map((route) => {
      const Page = route.page
      const Layout = route.isLayout ? DefaultLayout : Fragment
      
      return (
        <Route 
          key={route.path} 
          path={route.path} 
          element={<Layout><Page/></Layout>}
        >
          {route.children && renderRoutes(route.children)}
        </Route>
      )
    })
  }

  return (
    <div>
      <Router>
        <Routes>
          {renderRoutes(routes)}
        </Routes>
      </Router>
    </div>
  )
}

export default App