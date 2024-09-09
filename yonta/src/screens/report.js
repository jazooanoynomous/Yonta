import React from 'react';
import { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';  // Automatically imports the necessary chart components
import { FaUserAlt } from 'react-icons/fa';
import Layout from '../Layout'
import StatsCard from '../components/statsCard';
import { reportData, ReportTypeData, RevenuData } from '../components/Datas';
import BarChartComponent from '../components/barChart';
import MetricCard from '../components/metricCard';

const Report = () => {
    const [vendorData, setVendorData] = useState([]);
    const [expertData, setExpertData] = useState([]);


    useEffect(() => {
        // Simulate API call to fetch data
        const expertData = [
            { title: 'Net Revenue', value: '₹ 8,96,065', change: '+10.05%', description: 'since last month' },
            { title: 'Total vendor', value: '606', change: '+5.03%', description: 'from last year' },
            { title: 'Product Lives', value: '60', change: '+8.00%', description: 'in the last 6 months' },
        ];
        const vendorData = [
            { title: 'Net Revenue', value: '₹ 8,96,065', change: '+10.05%', description: 'since last month' },
            { title: 'Total vendor', value: '606', change: '+5.03%', description: 'from last year' },
            { title: 'Product Lives', value: '60', change: '+8.00%', description: 'in the last 6 months' },
            { title: 'Net sale', value: '6,', change: '+3.5%', description: 'from last month' },
        ];
        setExpertData(expertData);
        setVendorData(vendorData);

    }, []);
    // Line Chart Data
    const lineChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
            {
                label: 'Subscription Rate',
                data: [200, 210, 220, 240, 260, 250, 270, 280],
                borderColor: '#6366F1',
                backgroundColor: 'rgba(99, 102, 241, 0.2)',
                tension: 0.4,
            },
        ],
    }

    const chartOptions = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <Layout>
            <div className="bg-gray-50 min-h-screen p-8">
                <h3 className='font-semibold text-blue mt-2 mb-4'>User</h3>
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex space-x-4 h-[254px] p-4 bg-white rounded-[10px]">
                        <StatsCard title="Users" total={1065} data={ReportTypeData} />

                        <StatsCard title="Subscribed User" total={865} data={reportData} />
                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg mb-8">
                        <p className="text-blue-600 font-bold mb-4">Subscription Rate</p>
                        <div className="h-64">
                            <Line data={lineChartData} options={chartOptions} />
                        </div>
                    </div>
                </div>

                {/* Bar Chart Section */}
                <BarChartComponent title="Subscription Revenu" data={RevenuData} />
                <h4 className='mt-6 font-semibold mb-6 text-blue'>Expert</h4>

                <div className="grid grid-cols-4 gap-[10px] mb-6">
                    {expertData.map((metric, index) => (
                        <MetricCard
                            bgColor={'bg-white'}
                            key={index}
                            title={metric.title}
                            value={metric.value}
                            change={metric.change}
                            description={metric.description}
                        />
                    ))}
                </div>
                <BarChartComponent title="Appointment Revenue" data={RevenuData} />
                <h4 className='mt-6 font-semibold mb-6 text-blue'>Vendor</h4>

                <div className="grid grid-cols-4 gap-[10px] mb-6">
                    {vendorData.map((metric, index) => (
                        <MetricCard
                            bgColor={'bg-white'}
                            key={index}
                            title={metric.title}
                            value={metric.value}
                            change={metric.change}
                            description={metric.description}
                        />
                    ))}
                </div>
                <BarChartComponent title="Sales" data={RevenuData} />

            </div>
        </Layout>
    );
};

export default Report;
