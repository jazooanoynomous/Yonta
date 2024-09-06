import React, { useState, useEffect } from 'react';
import MetricCard from '../components/metricCard'
import BarChartComponent from '../components/barChart'
import PopularProduct from '../components/popularProduct'
import Users from '../components/users'
import AvgSessionDuration from '../components/avgSession'
import Layout from '../Layout'

const Analytics = () => {
  const [metricsData, setMetricsData] = useState([]);

  useEffect(() => {
    // Simulate API call to fetch data
    const fetchedData = [
      { title: 'Net Revenue', value: '₹ 8,96,065', change: '+10.05%', description: 'since last month' },
      { title: 'App Downloads', value: '6,065 M', change: '+5.03%', description: 'from last year' },
      { title: 'Avg Session Duration', value: '6,065 Mins', change: '+8.00%', description: 'in the last 6 months' },
      { title: 'Monthly Logins', value: '6,065', change: '+3.5%', description: 'from last month' },
    ];
    setMetricsData(fetchedData);
  }, []);

  return (
    <Layout>
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Top Metrics */}
      <div className="grid grid-cols-4 gap-[10px] mb-6">
        {metricsData.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            description={metric.description}
          />
        ))}
      </div>

      {/* Bar Chart */}
      <BarChartComponent />

      {/* Lower Sections */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <AvgSessionDuration />
        <PopularProduct />
        <Users />
      </div>
    </div>
    </Layout>
  );
};

export default Analytics;
