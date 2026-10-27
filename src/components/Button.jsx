import React, { useState } from 'react'

const Button = () => {
  const [clickCount, setClickCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const toggleLoading = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1500)
  }

  const sampleCode = `<button className="px-5 py-2.5 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 transition-all">
  Click Me
</button>`

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-4xl space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
          <span>Components</span>
          <span>•</span>
          <span>Inputs</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Button</h1>
        <p className="mt-2 text-base text-slate-400">
          Versatile button elements with multiple variants, states, sizes, and micro-interactions.
        </p>
      </div>

      {/* Interactive Showcase Box */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-6">
        <h2 className="text-lg font-bold text-white">Button Variants</h2>

        <div className="flex flex-wrap items-center gap-3">
          {/* Primary */}
          <button className="px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white shadow-lg shadow-indigo-500/25 active:scale-95 transition-all">
            Primary
          </button>

          {/* Secondary */}
          <button className="px-4 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 active:scale-95 transition-all">
            Secondary
          </button>

          {/* Success */}
          <button className="px-4 py-2.5 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/25 active:scale-95 transition-all">
            Success
          </button>

          {/* Danger */}
          <button className="px-4 py-2.5 rounded-xl text-sm font-semibold bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/25 active:scale-95 transition-all">
            Danger
          </button>

          {/* Outline */}
          <button className="px-4 py-2.5 rounded-xl text-sm font-semibold bg-transparent hover:bg-indigo-600/10 text-indigo-400 border border-indigo-500/40 active:scale-95 transition-all">
            Outline
          </button>

          {/* Ghost */}
          <button className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-400 hover:text-white hover:bg-slate-800/60 active:scale-95 transition-all">
            Ghost
          </button>
        </div>
      </div>

      {/* Interactive States & Actions */}
      <div className="grid sm:grid-cols-2 gap-4">
        {/* Click counter */}
        <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-white">Interactive State Demo</h3>
            <p className="text-xs text-slate-400 mt-1">Tests React state changes inside this subroute.</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setClickCount((prev) => prev + 1)}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md active:scale-95 transition-all"
            >
              Click me
            </button>
            <span className="text-xs font-mono text-slate-300">
              Count: <span className="text-indigo-400 font-bold">{clickCount}</span>
            </span>
            {clickCount > 0 && (
              <button
                onClick={() => setClickCount(0)}
                className="text-[11px] text-slate-500 hover:text-slate-300 underline"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Loading Spinner */}
        <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-white">Async Loading State</h3>
            <p className="text-xs text-slate-400 mt-1">Click to trigger simulation with spinner.</p>
          </div>

          <div>
            <button
              disabled={isLoading}
              onClick={toggleLoading}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 flex items-center gap-2 disabled:opacity-60 transition-all"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Saving...</span>
                </>
              ) : (
                <span>Test Async Loading</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Code Snippet Box */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3 bg-slate-950/60">
          <span className="text-xs font-mono text-slate-400">JSX Example</span>
          <button
            onClick={handleCopy}
            className="text-xs text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
          >
            {copied ? 'Copied!' : 'Copy Code'}
          </button>
        </div>
        <pre className="p-5 font-mono text-xs text-slate-300 overflow-x-auto">
          {sampleCode}
        </pre>
      </div>
    </div>
  )
}

export default Button
