import React, { useState } from 'react'

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState('30d')

  const stats = [
    {
      title: 'Total Revenue',
      value: '$48,290.50',
      change: '+14.2%',
      positive: true,
      icon: (
        <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Active Users',
      value: '14,820',
      change: '+8.4%',
      positive: true,
      icon: (
        <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Conversion Rate',
      value: '3.82%',
      change: '+2.1%',
      positive: true,
      icon: (
        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: 'Server Load',
      value: '28.4%',
      change: '-4.6%',
      positive: true,
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
  ]

  const orders = [
    { id: '#ORD-9821', user: 'Sophia Martinez', plan: 'Enterprise Pro', amount: '$499.00', status: 'Completed', date: '2 mins ago' },
    { id: '#ORD-9820', user: 'Alexander Wright', plan: 'Developer Team', amount: '$149.00', status: 'Completed', date: '15 mins ago' },
    { id: '#ORD-9819', user: 'Elena Rostova', plan: 'Solo Creator', amount: '$49.00', status: 'Pending', date: '1 hour ago' },
    { id: '#ORD-9818', user: 'Marcus Chen', plan: 'Enterprise Pro', amount: '$499.00', status: 'Completed', date: '3 hours ago' },
  ]

  return (
    <div className="max-w-5xl space-y-8 animate-fadeIn">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-2">
            <span>Templates</span>
            <span>•</span>
            <span>Analytics</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Admin Dashboard</h1>
          <p className="mt-1 text-sm text-slate-400">Real-time overview of key system performance and financial metrics.</p>
        </div>

        {/* Timeframe selector */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 self-start sm:self-auto">
          {['24h', '7d', '30d'].map((t) => (
            <button
              key={t}
              onClick={() => setTimeframe(t)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                timeframe === t
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* 4 KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item) => (
          <div key={item.title} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{item.title}</span>
              <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                {item.icon}
              </div>
            </div>
            <div className="text-2xl font-bold text-white tracking-tight">{item.value}</div>
            <div className="mt-2 flex items-center gap-1.5 text-xs">
              <span className="font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                {item.change}
              </span>
              <span className="text-slate-500">vs last period</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden shadow-xl">
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white">Recent Transactions</h3>
            <p className="text-xs text-slate-400 mt-0.5">Live incoming subscription payments</p>
          </div>
          <span className="text-xs font-medium text-indigo-400 hover:text-indigo-300 cursor-pointer">
            View All &rarr;
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-950/60 text-xs font-semibold text-slate-400 border-b border-slate-800">
              <tr>
                <th className="py-3 px-5">Order ID</th>
                <th className="py-3 px-5">Customer</th>
                <th className="py-3 px-5">Tier</th>
                <th className="py-3 px-5">Amount</th>
                <th className="py-3 px-5">Status</th>
                <th className="py-3 px-5">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {orders.map((ord) => (
                <tr key={ord.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-3.5 px-5 font-mono text-xs text-indigo-300 font-semibold">{ord.id}</td>
                  <td className="py-3.5 px-5 font-medium text-slate-200">{ord.user}</td>
                  <td className="py-3.5 px-5 text-xs text-slate-400">{ord.plan}</td>
                  <td className="py-3.5 px-5 font-semibold text-slate-200">{ord.amount}</td>
                  <td className="py-3.5 px-5">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                        ord.status === 'Completed'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                      }`}
                    >
                      {ord.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-5 text-xs text-slate-500">{ord.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
