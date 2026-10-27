import React from 'react'
import routes from '../utils/routes'
import { NavLink, Outlet } from 'react-router-dom'

const Templates = () => {
  const elements = routes.filter((route) => route.title === "Templates")

  const getSubIcon = (title) => {
    switch (title) {
      case 'Dashboard':
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )
      case 'Chart':
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        )
      default:
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        )
    }
  }

  return (
    <div className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-slate-800/80 bg-slate-950/50 p-4 md:p-6 flex flex-col shrink-0">
        <div className="mb-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">Pre-built Layouts</p>
          <h3 className="text-sm font-semibold text-slate-300">Templates</h3>
        </div>

        <nav className="flex flex-row md:flex-col gap-1.5 overflow-x-auto pb-2 md:pb-0">
          {
            elements.map((child) => (
              child.children?.map((text) => (
                <NavLink
                  key={text.path}
                  to={text.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 whitespace-nowrap ${
                      isActive
                        ? 'bg-indigo-600/15 text-indigo-300 border border-indigo-500/30 font-semibold shadow-sm'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
                    }`
                  }
                >
                  <span className="text-slate-400">{getSubIcon(text.title)}</span>
                  <p>{text.title}</p>
                </NavLink>
              ))
            ))
          }
        </nav>

        <div className="mt-auto hidden md:block pt-6">
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
            <span className="font-semibold text-slate-200 block mb-1">Production Ready</span>
            Interactive templates designed for modern applications.
          </div>
        </div>
      </aside>

      {/* Main Page Content */}
      <main className="flex-1 p-5 sm:p-8 md:p-10 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default Templates
