import React, { useState } from 'react'

const Cdn = () => {
  const [copiedIndex, setCopiedIndex] = useState(null)

  const cdnLinks = [
    {
      title: 'unpkg (Recommended)',
      url: 'https://unpkg.com/react-router-dom@7/dist/umd/react-router-dom.production.min.js',
      desc: 'Fast global CDN mirroring npm packages with HTTP/2 and Brotli compression.',
    },
    {
      title: 'jsDelivr',
      url: 'https://cdn.jsdelivr.net/npm/react-router-dom@7/dist/umd/react-router-dom.min.js',
      desc: 'Multi-CDN infrastructure with failover and built-in GitHub integration.',
    },
  ]

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const htmlExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <script src="https://unpkg.com/react@19/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@19/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/react-router-dom@7/dist/umd/react-router-dom.production.min.js"></script>
</head>
<body>
  <div id="root"></div>
</body>
</html>`

  return (
    <div className="max-w-4xl space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
          <span>Documentation</span>
          <span>•</span>
          <span>CDN Setup</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">CDN Quickstart</h1>
        <p className="mt-2 text-base text-slate-400">
          Load React Router directly in any HTML file without Node.js or bundlers like Vite and Webpack.
        </p>
      </div>

      {/* CDN Providers */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">CDN Links</h2>
        <div className="grid gap-4">
          {cdnLinks.map((cdn, idx) => (
            <div key={cdn.title} className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-white text-sm">{cdn.title}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{cdn.desc}</p>
                </div>
                <button
                  onClick={() => handleCopy(cdn.url, idx)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors flex items-center gap-1.5"
                >
                  {copiedIndex === idx ? (
                    <span className="text-emerald-400">Copied!</span>
                  ) : (
                    <span>Copy URL</span>
                  )}
                </button>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 font-mono text-xs text-cyan-300 break-all select-all">
                {cdn.url}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HTML Template Preview */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3 bg-slate-950/60">
          <span className="text-xs font-semibold text-slate-300">Complete HTML Example</span>
          <button
            onClick={() => handleCopy(htmlExample, 'html')}
            className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
          >
            {copiedIndex === 'html' ? 'Copied code!' : 'Copy snippet'}
          </button>
        </div>
        <pre className="p-5 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed">
          {htmlExample}
        </pre>
      </div>

      {/* Feature comparison highlights */}
      <div className="grid sm:grid-cols-3 gap-4 pt-2">
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
          <span className="text-indigo-400 font-bold text-lg">0 KB</span>
          <h4 className="text-sm font-semibold text-white mt-1">Zero Node Setup</h4>
          <p className="text-xs text-slate-400 mt-1">Ideal for fast prototyping or legacy project integration.</p>
        </div>
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
          <span className="text-cyan-400 font-bold text-lg">Global</span>
          <h4 className="text-sm font-semibold text-white mt-1">Edge Cached</h4>
          <p className="text-xs text-slate-400 mt-1">Delivered via worldwide edge servers with low latency.</p>
        </div>
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
          <span className="text-purple-400 font-bold text-lg">ESM</span>
          <h4 className="text-sm font-semibold text-white mt-1">Browser Native</h4>
          <p className="text-xs text-slate-400 mt-1">Supports modern browser native JavaScript modules.</p>
        </div>
      </div>
    </div>
  )
}

export default Cdn
