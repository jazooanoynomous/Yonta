import React from 'react';
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';  
// import { FaUserAlt } from 'react-icons/fa';
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
            { title: 'Total Expert', value: '606',  description: 'from last year' },
            { title: 'Appointment Conducted', value: '60865', change: '+8.00%', description: 'in the last 6 months' },
        ];
        const vendorData = [
            { title: 'Net Sale', value: '₹ 62,26,065', },
            { title: 'Monthly Sale', value: '26,065', change: '+0.2%', description: 'Per month' },
            { title: 'Total Vendor', value: '60' },
            { title: 'Product Live', value: '6', change: '+20%', },
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
            <div className=" min-h-screen py-6">
                <h3 className='font-bold text-blue mt-2 text-xl mb-4'>User</h3>
                <div className="grid grid-cols-2 gap-2 mb-8">
                    <div className="flex space-x-4 h-[252px] w-[432px] p-4 bg-white rounded-[10px]">
                        <StatsCard title="Users" total={1065} data={ReportTypeData} />

                        <StatsCard title="Subscribed User" total={865} data={reportData} />
                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg mb-8 w-[532px] h-[252px]">
                        <p className="text-blue-600 font-bold mb-4">Subscription Rate</p>
                        <div>
                            <Line data={lineChartData} options={chartOptions} />
                        </div>
                    </div>
                </div>

                {/* Bar Chart Section */}
                <BarChartComponent title="Subscription Revenu" data={RevenuData} />

                <hr className="flex-1 border-gray-300 mt-6 border" />
                <h4 className='mt-6 font-bold text-xl mb-4 text-blue'>Expert</h4>

                <div className="grid grid-cols-4 mb-6">
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
                <h4 className='mt-6 font-bold text-xl mb-4 text-blue'>Vendor</h4>

                <div className="grid grid-cols-4 mb-6">
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
