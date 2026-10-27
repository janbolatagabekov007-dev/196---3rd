import React, { useState } from 'react'

const Install = () => {
  const [activeTab, setActiveTab] = useState('npm')
  const [copied, setCopied] = useState(false)

  const commands = {
    npm: 'npm install react-router-dom',
    yarn: 'yarn add react-router-dom',
    pnpm: 'pnpm add react-router-dom',
    bun: 'bun add react-router-dom',
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(commands[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-4xl space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
          <span>Documentation</span>
          <span>•</span>
          <span>Setup</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Installation</h1>
        <p className="mt-2 text-base text-slate-400">
          Install React Router and get started building single page applications with nested client-side routing.
        </p>
      </div>

      {/* Package Manager Command Box */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 overflow-hidden shadow-xl shadow-black/40">
        <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2.5 bg-slate-950/60">
          <div className="flex items-center gap-1.5">
            {['npm', 'yarn', 'pnpm', 'bun'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            {copied ? (
              <>
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        <div className="p-4 font-mono text-sm flex items-center gap-3 text-slate-200">
          <span className="text-indigo-400 select-none">$</span>
          <span>{commands[activeTab]}</span>
        </div>
      </div>

      {/* Step by step guide */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span>Quick Setup Guide</span>
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 transition-all">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-sm mb-3 border border-indigo-500/20">
              1
            </div>
            <h3 className="font-semibold text-white mb-1.5">Wrap in BrowserRouter</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Import <code className="text-xs font-mono text-indigo-300 bg-slate-800/70 px-1.5 py-0.5 rounded">BrowserRouter as Router</code> in <code className="text-xs font-mono text-slate-300">src/main.jsx</code> and wrap your root component.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 transition-all">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold text-sm mb-3 border border-purple-500/20">
              2
            </div>
            <h3 className="font-semibold text-white mb-1.5">Map Routes with Outlet</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Use <code className="text-xs font-mono text-purple-300 bg-slate-800/70 px-1.5 py-0.5 rounded">&lt;Routes&gt;</code> and <code className="text-xs font-mono text-purple-300 bg-slate-800/70 px-1.5 py-0.5 rounded">&lt;Route&gt;</code> in <code className="text-xs font-mono text-slate-300">App.jsx</code>, and embed <code className="text-xs font-mono text-purple-300 bg-slate-800/70 px-1.5 py-0.5 rounded">&lt;Outlet /&gt;</code> in layout pages.
            </p>
          </div>
        </div>

        {/* Code Example Preview */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2.5">
            <span className="font-mono">src/main.jsx</span>
            <span className="text-indigo-400">React 19 + React Router 7</span>
          </div>
          <pre className="font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed">
{`import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
)`}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default Install
