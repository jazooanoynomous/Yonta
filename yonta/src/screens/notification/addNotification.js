import React from 'react'
import Layout from '../../Layout'
import { FaEdit, FaTrash, FaPlus, FaSave, FaUpload } from 'react-icons/fa';

export default function AddNotification() {
  return (
    <Layout>
    <div className="min-h-screen flex justify-center items-center p-6">
      <div className="w-full max-w-6xl  p-8  grid grid-cols-2 gap-6">
        
        {/* Left Section - Section & Notification */}
        <div>
        <h3 className="text-lg font-medium">Selection & Type</h3>
        <div className="space-y-6 bg-white rounded-2xl p-4">
          {/* Section & Type */}
          <div className="flex space-x-4">
            <button className="bg-blue text-white px-4 py-2 rounded-lg">User</button>
            <button className="border border-blue text-gray-700 px-4 py-2 rounded-lg">Vendor</button>
          </div>
          
          {/* Notification Content */}
          <div className=" p-4 rounded-lg">
            <textarea
              className="w-full h-24 p-2 rounded-lg bg-[#F1F4FA]"
              placeholder="Type in your notification message here..."
              maxLength={50}
            />
            <div className="mt-4 space-y-2">
              <div>
                <input type="radio" id="push" name="notificationType" />
                <label htmlFor="push" className="ml-2">Push Notification</label>
              </div>
              <div>
                <input type="radio" id="default" name="notificationType" />
                <label htmlFor="default" className="ml-2">Default Notification</label>
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="link" className="block text-sm">Link:</label>
              <div className="flex space-x-4">
                <select className="w-full p-2 bg-[#F1F4FA] rounded-lg">
                  <option>Select Section</option>
                </select>
                <select className="w-full p-2 bg-[#F1F4FA] rounded-lg">
                  <option>Select Page</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Notification Frequency */}
          <div>
            <label className="block mb-2 text-base font-medium">Notification Frequency:</label>
            <div className="flex space-x-4">
              <button className="bg-blue text-white px-4 py-2 rounded-lg">Daily</button>
              <button className="border border-blue  px-4 py-2 rounded-lg">Alternate</button>
              <button className="border border-blue  px-4 py-2 rounded-lg">Custom</button>
            </div>
          </div>
        </div>
        </div>

        {/* Right Section - Date & Time */}
        <div>
        <h3 className="text-lg font-medium">Select Date & Time</h3>

        <div className="space-y-6 bg-white rounded-2xl p-4">
          {/* Date Selector */}
          <div className=" p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <button className="text-gray-500">←</button>
              <span>July 2024</span>
              <button className="text-gray-500">→</button>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <div key={day} className="text-sm ">{day}</div>
              ))}
              {[...Array(31).keys()].map(date => (
                <div key={date} className={`py-2 rounded-full ${[21, 26, 28].includes(date + 1) ? 'bg-[#F1F4FA]' : 'bg-transparent'} hover:bg-[#F1F4FA] cursor-pointer`}>
                  {date + 1}
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-center space-x-2">
              <input type="number" className="w-10 text-center bg-[#F1F4FA] rounded-lg p-1" defaultValue={4} />
              <span>:</span>
              <input type="number" className="w-10 text-center bg-[#F1F4FA] rounded-lg p-1" defaultValue={45} />
              <select className="p-1 border border-gray-300 bg-blue text-white rounded-lg">
                <option>PM</option>
                <option>AM</option>
              </select>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-center gap-2 mt-6 mb-4">
                                <button
                                    className="bg-textgreen text-white w-[100.44px] h-[43px] rounded-lg flex items-center justify-center"
                                    onClick
                                >
                                    <FaSave className="mr-2" />
                                    Save
                                </button>


                            </div>
        </div>
        </div>

      </div>
    </div>
    </Layout>
  )
}
