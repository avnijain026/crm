"use client"
import React, { useState } from 'react';
import { 
  Bell, 
  Search, 
  Plus, 
  Info, 
  RotateCcw, 
  Filter,
  MoreHorizontal,
  ChevronDown,
  ExternalLink,
  TrendingUp,
  TrendingDown,
  Calendar,
  BarChart3,
  Star,
  Target,
  Users
} from 'lucide-react';

const CRMDashboard: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState('Week');
  const [selectedFilter, setSelectedFilter] = useState('Week');

  // Sample data
  const recentSales = [
    {
      id: 1,
      name: 'Timothy Williams',
      avatar: '👤',
      time: 'Today',
      amount: '+$324.99',
      status: 'New',
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      id: 2,
      name: 'Glen Wood',
      avatar: '👤',
      time: '2 Min Ago',
      amount: '+$200.00',
      status: 'New',
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      id: 3,
      name: 'Raymond Johnson',
      avatar: '👤',
      time: '1 Day Ago',
      amount: '',
      status: 'Cancelled',
      statusColor: 'bg-red-100 text-red-700'
    },
    {
      id: 4,
      name: 'Kenneth Henderson',
      avatar: '👤',
      time: '2 Days Ago',
      amount: '+$840.99',
      status: 'Completed',
      statusColor: 'bg-blue-100 text-blue-700'
    }
  ];

  const topItems = [
    { name: 'DualSense', category: 'Technique', amount: '$320.24', progress: 85, trend: 'up' },
    { name: 'Gamepad', category: 'Accessories', amount: '$180.9', progress: 70, trend: 'up' },
    { name: 'VR2', category: 'Accessories', amount: '$124.0', progress: 60, trend: 'up', change: '+42%' },
    { name: 'Steam codes', category: 'Subscription', amount: '$100.4', progress: 45, trend: 'down', change: '-8%' }
  ];

  const weeklyData = [
    { day: 'Mon', value: 20 },
    { day: 'Tue', value: 35 },
    { day: 'Wed', value: 100 }, // Peak day
    { day: 'Thu', value: 45 },
    { day: 'Fri', value: 30 },
    { day: 'Sat', value: 25 }
  ];

  const maxValue = Math.max(...weeklyData.map(d => d.value));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <div className="text-white text-lg font-bold">✱</div>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Start searching here..."
                className="pl-10 pr-4 py-2 w-80 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="w-5 h-5 text-gray-500" />
            <span className="text-sm text-gray-600">Sat, 26 Sep</span>
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-semibold">12</span>
            </div>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </header>

        {/* Main Content */}
        <main className="p-6">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">Your Sales Analysis</h1>
            <div className="flex items-center space-x-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
                <Plus className="w-4 h-4" />
                <span>Add Widget</span>
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Info className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <RotateCcw className="w-5 h-5" />
              </button>
              <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-12 gap-6">
            {/* AI Assistant Card */}
            <div className="col-span-4 bg-gray-900 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">AI Assistant</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Analyze product sales over last year<br />
                  Compare revenue, quality, sales and brand
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-colors">
                  <span>Analyze product sales</span>
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-xs">→</span>
                  </div>
                </button>
              </div>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl"></div>
              </div>
            </div>

            {/* Total Sales Chart */}
            <div className="col-span-4 bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-gray-500" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Total Sales</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="flex items-center space-x-1 px-3 py-1 border border-gray-200 rounded-lg text-sm">
                    <span>{selectedWeek}</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  <MoreHorizontal className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              
              {/* Bar Chart */}
              <div className="flex items-end justify-between h-32 mb-4">
                {weeklyData.map((item, index) => (
                  <div key={item.day} className="flex flex-col items-center space-y-2">
                    <div className="flex items-end h-20">
                      <div
                        className={`w-8 rounded-t-lg ${
                          item.value === maxValue ? 'bg-orange-500' : 'bg-gray-200'
                        }`}
                        style={{ height: `${(item.value / maxValue) * 100}%` }}
                      >
                        {item.value === maxValue && (
                          <div className="text-white text-xs text-center pt-2 font-semibold">
                            $890.5
                          </div>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{item.day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sales Revenue */}
            <div className="col-span-4 bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-gray-500" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Sales Revenue</h3>
                </div>
                <MoreHorizontal className="w-4 h-4 text-gray-400" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center space-x-1 mb-2">
                    <TrendingUp className="w-3 h-3 text-green-500" />
                    <span className="text-green-500 text-xs">24% for 1 day</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">$1,609.13</div>
                  <div className="text-xs text-gray-500 mb-3">● Received Amount</div>
                  <div className="h-16 bg-green-100 rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-green-300 opacity-60"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-1 mb-2">
                    <TrendingDown className="w-3 h-3 text-red-500" />
                    <span className="text-red-500 text-xs">8%</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">$2,189.21</div>
                  <div className="text-xs text-gray-500 mb-3">● Ordered Amount</div>
                  <div className="h-16 bg-red-100 rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-200 to-red-300 opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Sales */}
            <div className="col-span-5 bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-gray-500" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Recent sales</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <button className="flex items-center space-x-1 px-3 py-1 border border-gray-200 rounded-lg text-sm">
                    <span>{selectedFilter}</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {recentSales.map((sale) => (
                  <div key={sale.id} className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600">{sale.avatar}</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{sale.name}</div>
                        <div className="text-sm text-gray-500">{sale.time}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${sale.statusColor}`}>
                        {sale.status}
                      </span>
                      {sale.amount && (
                        <span className="font-semibold text-gray-900">{sale.amount}</span>
                      )}
                      <div className="flex items-center space-x-1">
                        <ExternalLink className="w-4 h-4 text-gray-400" />
                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Growth Chart */}
            <div className="col-span-3 bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-gray-500" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Growth</h3>
                </div>
                <MoreHorizontal className="w-4 h-4 text-gray-400" />
              </div>

              <div className="flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#4f46e5"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2.51 * 73.1} ${2.51 * (100 - 73.1)}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">+73.1%</div>
                      <div className="text-xs text-gray-500">Growth rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Item Sales */}
            <div className="col-span-4 bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 text-gray-500" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Top Item Sales</h3>
                </div>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                  View All →
                </button>
              </div>

              <div className="space-y-4">
                {topItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900">{item.name}</span>
                        <span className="font-semibold text-gray-900">{item.amount}</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-500">{item.category}</span>
                        {item.change && (
                          <span className={`text-xs ${item.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                            {item.change}
                          </span>
                        )}
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
    </div>
  );
};

export default CRMDashboard;