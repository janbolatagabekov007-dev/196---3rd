import React from 'react'
import Navbar from './components/Navbar'
import routes from './utils/routes'
import { Routes, Route, Navigate } from 'react-router-dom'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />

      <main className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<Navigate to="/docs" replace />} />

          {
            routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.elemnet || route.element}>
                {route.children && route.children.length > 0 && (
                  <Route index element={<Navigate to={route.children[0].path} replace />} />
                )}
                {
                  route.children?.map((routeChild) => (
                    <Route key={routeChild.path} path={routeChild.path} element={routeChild.element} />
                  ))
                }
              </Route>
            ))
          }
        </Routes>
      </main>
    </div>
  )
}

export default App
