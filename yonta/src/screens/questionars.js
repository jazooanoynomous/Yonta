import Layout from '../Layout'
import React from 'react';

const Questionaris = () => {
    return (
        <Layout>
            <div>
                <h1 className="text-2xl font-bold text-center mb-6">Questionaris</h1>

                <div className="flex gap-6 p-6 max-w-3xl mx-auto my-8">
                    <div className="space-y-6 bg-white w-[491px] h-[239px] p-2 ">
                        <h2 className="text-xl font-semibold">Question One</h2>
                        <input
                            type="text"
                            placeholder="Type your answer here..."
                            className="w-full p-3 border border-gray-300 rounded-md"
                        />
                        
                        <div className="flex justify-between">
                            <div className="flex-1 bg-gray-100 h-12 flex items-center justify-center rounded-md shadow-md">Icon1</div>
                            <div className="flex-1 bg-gray-100 h-12 flex items-center justify-center rounded-md shadow-md">Icon2</div>
                            <div className="flex-1 bg-gray-100 h-12 flex items-center justify-center rounded-md shadow-md">Icon3</div>
                            <div className="flex-1 bg-gray-100 h-12 flex items-center justify-center rounded-md shadow-md">Icon4</div>
                        </div>
                    </div>
                    <div className="space-y-6 bg-white w-[491px] h-[239px] p-2 ">
                        <h2 className="text-xl font-semibold">Question One</h2>
                        <input
                            type="text"
                            placeholder="Type your answer here..."
                            className="w-full p-3 border border-gray-300 rounded-md"
                        />
                     
                        <div className="flex justify-between">
                            <div className="flex-1 bg-gray-100 h-12 flex items-center justify-center rounded-md shadow-md">Icon1</div>
                            <div className="flex-1 bg-gray-100 h-12 flex items-center justify-center rounded-md shadow-md">Icon2</div>
                            <div className="flex-1 bg-gray-100 h-12 flex items-center justify-center rounded-md shadow-md">Icon3</div>
                            <div className="flex-1 bg-gray-100 h-12 flex items-center justify-center rounded-md shadow-md">Icon4</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Questionaris;
