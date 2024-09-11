import React, { useState } from 'react';
import axios from 'axios';
import { FaSave } from 'react-icons/fa';
import Layout from '../../Layout';
import { BASEURL } from '../../utils/constant';
import { useNavigate } from 'react-router-dom';

export default function AddNotification() {
  const [module, setModule] = useState('User'); // Default selected module
  const [content, setContent] = useState('');
  const [isPush, setIsPush] = useState(true); // Push notification as default
  const [isDefault, setIsDefault] = useState(false);
  const [link, setLink] = useState({ section: '', page: '' });
  const [notificationFrequency, setNotificationFrequency] = useState('Daily');
  const [frequency, setFrequency] = useState([]); // Stores selected custom dates
  // const [selectedDate, setSelectedDate] = useState(''); // Date + Time combined
  const navigate = useNavigate();

  const handleModuleChange = (module) => setModule(module);

  const handleFrequencyChange = (type) => {
    setNotificationFrequency(type);
    if (type !== 'Custom') setFrequency([]); // Reset custom dates if not custom
  };

  const handleDateSelection = (date) => {
    // Append selected date only if it's not already in the array
    if (!frequency.includes(date)) setFrequency([...frequency, date]);
  };

  const handleSaveNotification = async () => {
    const data = {
      module,
      content,
      isPush,
      isDefault,
      link,
      notificationFrequency,
      frequency,
    };

    try {
      const response =  await axios.post(`${BASEURL}notification`, data, {
        headers: {
          VerifyMe: 'RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0', // Replace with actual
        },
      });
     
      if (response.data.message ==='Please provide all required fields' ) {
        console.log('hello');
        
        alert('Please provide all required fields'); // Show alert based on the API response
      } else {
        alert('Notification saved successfully');
        navigate(`/notification`);      }
    } catch (error) {
      console.error('Error saving notification:', error);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex justify-center items-center p-6">
        <div className="w-full max-w-6xl p-8 grid grid-cols-2 gap-6">
          {/* Left Section - Module & Notification */}
          <div>
            <h3 className="text-lg font-medium">Selection & Type</h3>
            <div className="space-y-6 bg-white rounded-2xl p-4">
              {/* Module Selection */}
              <div className="flex space-x-4">
                <button
                  className={`px-4 py-2 rounded-lg ${module === 'User' ? 'bg-blue text-white' : 'border border-blue text-gray-700'}`}
                  onClick={() => handleModuleChange('User')}
                >
                  User
                </button>
                <button
                  className={`px-4 py-2 rounded-lg ${module === 'Vendor' ? 'bg-blue text-white' : 'border border-blue text-gray-700'}`}
                  onClick={() => handleModuleChange('Vendor')}
                >
                  Vendor
                </button>
              </div>

              {/* Notification Content */}
              <textarea
                className="w-full h-24 p-2 rounded-lg bg-[#F1F4FA]"
                placeholder="Type in your notification message here..."
                maxLength={50}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />

              {/* Notification Type */}
              <div className="mt-4 space-y-2">
                <div>
                  <input
                    type="radio"
                    id="push"
                    name="notificationType"
                    checked={isPush}
                    onChange={() => {
                      setIsPush(true);
                      setIsDefault(false);
                    }}
                  />
                  <label htmlFor="push" className="ml-2">
                    Push Notification
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="default"
                    name="notificationType"
                    checked={isDefault}
                    onChange={() => {
                      setIsPush(false);
                      setIsDefault(true);
                    }}
                  />
                  <label htmlFor="default" className="ml-2">
                    Default Notification
                  </label>
                </div>
              </div>

              {/* Link Selection */}
              <div className="mt-4">
                <label htmlFor="link" className="block text-sm">
                  Link:
                </label>
                <div className="flex space-x-4">
                  <select
                    className="w-full p-2 bg-[#F1F4FA] rounded-lg"
                    value={link.section}
                    onChange={(e) => setLink({ ...link, section: e.target.value })}
                  >
                    <option>Select Section</option>
                    <option value="Products">Products</option>
                    <option value="Orders">Orders</option>
                    <option value="Vendors">Vendors</option>
                    <option value="Custom">Custom</option>
                  </select>
                  <select
                    className="w-full p-2 bg-[#F1F4FA] rounded-lg"
                    value={link.page}
                    onChange={(e) => setLink({ ...link, page: e.target.value })}
                  >
                    <option>Select Page</option>
                    <option value="Offers">Offers</option>
                    <option value="Discounts">Discounts</option>
                    <option value="Percentages">Percentages</option>
                  </select>
                </div>
              </div>

              {/* Notification Frequency */}
              <div>
                <label className="block mb-2 text-base font-medium">
                  Notification Frequency:
                </label>
                <div className="flex space-x-4">
                  <button
                    className={`px-4 py-2 rounded-lg ${notificationFrequency === 'Daily' ? 'bg-blue text-white' : 'border border-blue'}`}
                    onClick={() => handleFrequencyChange('Daily')}
                  >
                    Daily
                  </button>
                  <button
                    className={`px-4 py-2 rounded-lg ${notificationFrequency === 'Alternate' ? 'bg-blue text-white' : 'border border-blue'}`}
                    onClick={() => handleFrequencyChange('Alternate')}
                  >
                    Alternate
                  </button>
                  <button
                    className={`px-4 py-2 rounded-lg ${notificationFrequency === 'Custom' ? 'bg-blue text-white' : 'border border-blue'}`}
                    onClick={() => handleFrequencyChange('Custom')}
                  >
                    Custom
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Date & Time */}
            <div>
              <h3 className="text-lg font-medium">Select Date & Time</h3>
              <div className="space-y-6 bg-white rounded-2xl p-4">
                <div className="grid grid-cols-7 gap-2 text-center">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                    <div key={day} className="text-sm ">
                      {day}
                    </div>
                  ))}
                  {[...Array(31).keys()].map((date) => (
                    <div
                      key={date}
                      className={`py-2 rounded-full hover:bg-[#F1F4FA] cursor-pointer`}
                      onClick={() => handleDateSelection(`2024-10-${date + 1}`)}
                    >
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

                {/* Save Button */}
                <div className="flex justify-center gap-2 mt-6 mb-4">
                  <button
                    className="bg-textgreen text-white w-[100.44px] h-[43px] p-2 rounded-lg flex items-center justify-center gap-2"
                    onClick={handleSaveNotification}
                  >
                    <FaSave className="w-[18.98px] h-[18.98px]" />
                    Save
                  </button>
                </div>


              </div>
            </div>
        </div>
      </div>
    </Layout>
  );
}
