import React, { useState } from 'react'

const Dropdown = () => {
  const [isOpenSelect, setIsOpenSelect] = useState(false)
  const [selectedItem, setSelectedItem] = useState('React 19')
  const [isOpenUserMenu, setIsOpenUserMenu] = useState(false)

  const frameworks = ['React 19', 'Next.js 15', 'Vue 3.5', 'Svelte 5', 'Astro 4']

  return (
    <div className="max-w-4xl space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-3">
          <span>Components</span>
          <span>•</span>
          <span>Navigation & Selection</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Dropdown</h1>
        <p className="mt-2 text-base text-slate-400">
          Interactive contextual menus and select dropdowns built with pure React state.
        </p>
      </div>

      {/* Showcase Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Custom Select Dropdown */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="border-b border-slate-800 pb-3">
            <h3 className="font-semibold text-white text-base">Select Dropdown</h3>
            <p className="text-xs text-slate-400 mt-0.5">Click to choose an active technology.</p>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsOpenSelect(!isOpenSelect)}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 hover:border-slate-600 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                <span className="font-medium">{selectedItem}</span>
              </div>
              <svg
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpenSelect ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu Items */}
            {isOpenSelect && (
              <div className="absolute left-0 right-0 mt-2 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl p-1.5 z-20 space-y-1 animate-fadeIn">
                {frameworks.map((fw) => (
                  <button
                    key={fw}
                    onClick={() => {
                      setSelectedItem(fw)
                      setIsOpenSelect(false)
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      selectedItem === fw
                        ? 'bg-indigo-600 text-white'
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span>{fw}</span>
                    {selectedItem === fw && (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* User Account Menu Dropdown */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="border-b border-slate-800 pb-3">
            <h3 className="font-semibold text-white text-base">User Profile Menu</h3>
            <p className="text-xs text-slate-400 mt-0.5">Click the profile button to expand actions.</p>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsOpenUserMenu(!isOpenUserMenu)}
              className="flex items-center gap-3 px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 hover:border-slate-600 transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-xs font-bold text-white shadow-md">
                JD
              </div>
              <div className="text-left text-xs">
                <p className="font-semibold text-white leading-none">John Doe</p>
                <p className="text-slate-400 text-[11px] mt-1 leading-none">developer@react.dev</p>
              </div>
              <svg
                className={`w-4 h-4 text-slate-400 ml-2 transition-transform duration-200 ${isOpenUserMenu ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* User Dropdown */}
            {isOpenUserMenu && (
              <div className="absolute left-0 mt-2 w-56 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl p-1.5 z-20 space-y-1 animate-fadeIn">
                <div className="px-3 py-2 border-b border-slate-800/80 mb-1">
                  <p className="text-xs text-slate-400 font-medium">Signed in as</p>
                  <p className="text-xs font-semibold text-indigo-400">developer@react.dev</p>
                </div>
                <button
                  onClick={() => setIsOpenUserMenu(false)}
                  className="w-full text-left px-3 py-1.5 rounded-lg text-xs text-slate-300 hover:bg-slate-800 transition-colors"
                >
                  Account Settings
                </button>
                <button
                  onClick={() => setIsOpenUserMenu(false)}
                  className="w-full text-left px-3 py-1.5 rounded-lg text-xs text-slate-300 hover:bg-slate-800 transition-colors"
                >
                  API Keys & Tokens
                </button>
                <div className="border-t border-slate-800/80 pt-1 mt-1">
                  <button
                    onClick={() => setIsOpenUserMenu(false)}
                    className="w-full text-left px-3 py-1.5 rounded-lg text-xs text-rose-400 hover:bg-rose-500/10 transition-colors font-medium"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
