import React from 'react'
import routes from '../utils/routes'
import { NavLink, Outlet } from 'react-router-dom'

const Components = () => {
  const elements = routes.filter((route) => route.title === "Components")

  const getSubIcon = (title) => {
    switch (title) {
      case 'Button':
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
        )
      case 'Dropdown':
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )
      default:
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )
    }
  }

  return (
    <div className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-slate-800/80 bg-slate-950/50 p-4 md:p-6 flex flex-col shrink-0">
        <div className="mb-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">UI Elements</p>
          <h3 className="text-sm font-semibold text-slate-300">Components</h3>
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
            <span className="font-semibold text-slate-200 block mb-1">Reusable UI</span>
            Components with interactive previews and code samples.
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

export default Components
