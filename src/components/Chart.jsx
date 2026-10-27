import React, { useState } from 'react'

const Chart = () => {
  const [selectedMetric, setSelectedMetric] = useState('traffic')
  const [hoveredDay, setHoveredDay] = useState(null)

  const weeklyData = [
    { day: 'Mon', traffic: 4200, revenue: 1250, height: '55%' },
    { day: 'Tue', traffic: 5800, revenue: 1800, height: '70%' },
    { day: 'Wed', traffic: 7100, revenue: 2400, height: '88%' },
    { day: 'Thu', traffic: 6300, revenue: 1950, height: '78%' },
    { day: 'Fri', traffic: 8900, revenue: 3100, height: '100%' },
    { day: 'Sat', traffic: 5100, revenue: 1600, height: '62%' },
    { day: 'Sun', traffic: 3900, revenue: 1100, height: '48%' },
  ]

  const channels = [
    { name: 'Organic Search', percentage: 48, visitors: '34,210', color: 'bg-indigo-500' },
    { name: 'Direct Traffic', percentage: 26, visitors: '18,530', color: 'bg-purple-500' },
    { name: 'Social Media', percentage: 16, visitors: '11,400', color: 'bg-cyan-500' },
    { name: 'Referral Links', percentage: 10, visitors: '7,120', color: 'bg-emerald-500' },
  ]

  return (
    <div className="max-w-5xl space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-2">
            <span>Templates</span>
            <span>•</span>
            <span>Visualizations</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Charts & Metrics</h1>
          <p className="mt-1 text-sm text-slate-400">Interactive performance statistics and traffic channel analytics.</p>
        </div>

        {/* Metric switch */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 self-start sm:self-auto">
          <button
            onClick={() => setSelectedMetric('traffic')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedMetric === 'traffic'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Page Views
          </button>
          <button
            onClick={() => setSelectedMetric('revenue')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedMetric === 'revenue'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Revenue ($)
          </button>
        </div>
      </div>

      {/* Main Chart Box */}
      <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white">Weekly Performance</h3>
            <p className="text-xs text-slate-400">Total volume for current 7-day period</p>
          </div>
          <div className="text-right">
            <span className="text-xl font-extrabold text-white">
              {selectedMetric === 'traffic' ? '41,300 views' : '$13,200'}
            </span>
            <span className="block text-xs font-semibold text-emerald-400">+18.5% vs last week</span>
          </div>
        </div>

        {/* Visual Bar Graph */}
        <div className="pt-6 pb-2">
          <div className="h-56 flex items-end justify-between gap-3 sm:gap-6 border-b border-slate-800/80 pb-3">
            {weeklyData.map((item) => (
              <div
                key={item.day}
                onMouseEnter={() => setHoveredDay(item.day)}
                onMouseLeave={() => setHoveredDay(null)}
                className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer"
              >
                {/* Value tooltip */}
                <div
                  className={`text-[11px] font-mono font-semibold transition-all duration-150 mb-2 ${
                    hoveredDay === item.day ? 'text-indigo-400 -translate-y-1' : 'opacity-0'
                  }`}
                >
                  {selectedMetric === 'traffic' ? `${item.traffic}` : `$${item.revenue}`}
                </div>

                {/* Bar */}
                <div className="w-full bg-slate-800/60 rounded-xl overflow-hidden h-full flex items-end">
                  <div
                    style={{ height: item.height }}
                    className={`w-full rounded-xl transition-all duration-300 ${
                      hoveredDay === item.day
                        ? 'bg-gradient-to-t from-indigo-500 to-purple-400 shadow-lg shadow-indigo-500/30'
                        : 'bg-gradient-to-t from-indigo-600/80 to-indigo-500/80 group-hover:from-indigo-500 group-hover:to-indigo-400'
                    }`}
                  ></div>
                </div>

                <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-200 mt-3">
                  {item.day}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Traffic Sources & Device Distribution */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Source Channels */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white">Acquisition Channels</h3>

          <div className="space-y-4">
            {channels.map((ch) => (
              <div key={ch.name} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-300">{ch.name}</span>
                  <span className="font-mono text-slate-400">
                    {ch.visitors} <span className="text-slate-500">({ch.percentage}%)</span>
                  </span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    style={{ width: `${ch.percentage}%` }}
                    className={`h-full rounded-full ${ch.color}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Device breakdown */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white">Device Breakdown</h3>

          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
              <span className="text-2xl font-bold text-white">64%</span>
              <p className="text-xs text-slate-400 mt-1">Desktop</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
              <span className="text-2xl font-bold text-white">29%</span>
              <p className="text-xs text-slate-400 mt-1">Mobile</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
              <span className="text-2xl font-bold text-white">7%</span>
              <p className="text-xs text-slate-400 mt-1">Tablet</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-900/40 text-xs text-indigo-300">
            <span className="font-semibold block mb-0.5">Insight</span>
            Desktop traffic increased by 14% this month primarily from developer documentation views.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chart
