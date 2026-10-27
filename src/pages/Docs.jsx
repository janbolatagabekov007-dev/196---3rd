import React from 'react'
import routes from '../utils/routes'
import { NavLink, Outlet } from 'react-router-dom'

const Docs = () => {
  const elements = routes.filter((route) => route.title === "Docs")

  const getSubIcon = (title) => {
    switch (title) {
      case 'Install':
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        )
      case 'Cdn':
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        )
      default:
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        )
    }
  }

  return (
    <div className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-slate-800/80 bg-slate-950/50 p-4 md:p-6 flex flex-col shrink-0">
        <div className="mb-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">Documentation</p>
          <h3 className="text-sm font-semibold text-slate-300">Getting Started</h3>
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
            <span className="font-semibold text-slate-200 block mb-1">Quick Note</span>
            Nested routing powered by <code className="text-indigo-400">&lt;Outlet /&gt;</code>.
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

export default Docs
