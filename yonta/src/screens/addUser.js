import React, { useState } from 'react';
import Layout from '../Layout';
import { FaUpload } from 'react-icons/fa'; // Import the upload icon from react-icons
import { useNavigate } from 'react-router-dom';
import { FaSave } from "react-icons/fa";


const PlanForm = () => {
  // State to manage dropdown visibility and selected options
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const navigate = useNavigate();

  // Toggle dropdown visibility
  const toggleDropdown = (index) => {
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  // Handle option selection
  const handleOptionSelect = (areaIndex, option) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [areaIndex]: option
    }));
    setDropdownVisible(null); // Close dropdown after selection
  };

  const handleAddUserClick = () => {
    navigate('/dayDiet');
  };

  // Options for dropdown menus
  const options = ['--Option 1--', '--Option 2--', '--Option 3--'];

  return (
    <Layout>
      <div className="py-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">
            <span className="text-gray-500 font-normal">Nutrition & diet</span>
            <span className="text-black"> &gt;Calorie Deficiet plan</span>
          </h3>

        </div>
        {/* Form */}
        <div className="py-6">
          {/* Input Fields for Plan Name and Calories on the Same Line */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <label className="block mb-2 text-gray-700 font-medium">Plan Name</label>
              <input
                type="text"
                placeholder="Calorie Deficit Plan"
                className="w-[318px] h-[50px] border-gray-300 rounded-xl px-4 py-2"
              />
            </div>
            <div className="mr-[507px]">
              <label className="block mb-2 text-gray-700 font-medium">Calories</label>
              <input
                type="number"
                placeholder="3000"
                className="w-[214px] h-[50px] border-gray-300 rounded-xl px-4 py-2"
              />
            </div>
          </div>

          {/* Input Fields for Carbs, Protein, and Fats */}
          <div className="flex mb-6">
            <div className="flex-1">
              <label className="block mb-2 font-medium">Carbs (g)</label>
              <input
                type="number"
                placeholder="76 (g)"
                className="h-[50px] w-[125px] border-gray-300 rounded-xl px-4 py-2"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 font-medium">Protein (g)</label>
              <input
                type="number"
                placeholder="76 (g)"
                className="h-[50px] w-[125px] border-gray-300 rounded-xl px-4 py-2"
              />
            </div>
            <div className="flex-1 mr-[620px]">
              <label className="block mb-2 font-medium">Fats (g)</label>
              <input
                type="number"
                placeholder="76 (g)"
                className="h-[50px] w-[125px] border-gray-300 rounded-xl px-4 py-2"
              />
            </div>
          </div>

          {/* File Pickers for Excel and PDF */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-2 font-medium">Diet Excel File</label>
              <div className="relative w-[198px] h-[60px] border-dashed">
                <input
                  type="file"
                  accept=".xlsx"
                  id="excel-file-picker"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <button
                  htmlFor="excel-file-picker"
                  className="flex items-center justify-center w-full h-[60px] border-gray-300 rounded px-4 py-2 bg-white text-gray-700"
                  onClick={() => document.getElementById('excel-file-picker').click()}
                >
                  <FaUpload className="mr-2" /> Upload Excel File
                </button>
              </div>
            </div>
            <div className="flex-1 mr-[620px]">
              <label className="block mb-2  font-medium">Diet PDF File</label>
              <div className="relative w-[198px] h-[60px]">
                <input
                  type="file"
                  accept=".pdf"
                  id="pdf-file-picker"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <button
                  htmlFor="pdf-file-picker"
                  className="flex items-center justify-center w-full h-[60px] border-gray-300 rounded px-4 py-2 bg-white text-gray-700"
                  onClick={() => document.getElementById('pdf-file-picker').click()}
                >
                  <FaUpload className="mr-2" /> Upload PDF File
                </button>
              </div>
            </div>
          </div>

          <hr className="border border-gray-300 mt-6 mb-10" />

          {/* Heading and Subheading with Checkboxes */}
          <h2 className="text-2xl font-semibold mb-10">Questionnaire</h2>
          <div className="flex items-center">
            <p className="text-lg">Preferred Diet Type</p>
            <hr className="flex-1 border-gray-300 ml-4 border" />
          </div>
          <div className="mt-10 flex gap-32">

            {/* Checkboxes Row 1 */}
            <div className="mb-6">
              <p className="font-medium mb-2">1.Diet Preference</p>
              <div className="flex gap-4 font-semibold">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="option1"
                    className="mr-2"
                  />
                  <label htmlFor="option1" className="text-sm ">Egg</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="option2"
                    className="mr-2"
                  />
                  <label htmlFor="option2" className="text-sm">Veg</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="option3"
                    className="mr-2"
                  />
                  <label htmlFor="option3" className="text-sm">Jam</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="option4"
                    className="mr-2"
                  />
                  <label htmlFor="option4" className="text-black text-sm">Non-veg</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="option5"
                    className="mr-2"
                  />
                  <label htmlFor="option5" className="text-black text-sm">Vegan</label>
                </div>
              </div>
            </div>

            {/* Checkboxes Row 2 */}
            <div>
              <p className="font-medium mb-2">2.Diet Type</p>
              <div className="flex gap-4 font-semibold">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="option5"
                    className="mr-2"
                  />
                  <label htmlFor="option5" className="text-black text-sm">Lactose friendly</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="option6"
                    className="mr-2"
                  />
                  <label htmlFor="option6" className="text-black text-sm">Gluten friendly</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="option7"
                    className="mr-2"
                  />
                  <label htmlFor="option7" className="text-black text-sm">Sugar free</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="option8"
                    className="mr-2"
                  />
                  <label htmlFor="option8" className="text-black text-sm">Keto friendly</label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center mt-6 mb-6">
            <p className="font-medium">Geographical Area</p>
            <hr className="flex-1 border-gray-300 ml-4" />
          </div>

          {/* Dropdown Menus */}
          <div className="flex gap-4 mr-[370px]">
            {['1. Select Region', '2. State', '3. City'].map((area, index) => (
              <div key={index} className="flex-1 p-2">
                <p className="font-medium mb-2">{area}</p>
                <div className="relative w-[217px] h-[36px] ">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="w-full flex items-center justify-between px-4 py-2  rounded bg-white text-gray-700"
                  >
                    {selectedOptions[index] || `--Select--`}
                    <svg
                      className={`w-4 h-4 transform ${dropdownVisible === index ? 'rotate-180' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {dropdownVisible === index && (
                    <div className="absolute left-0 top-full mt-2 bg-white rounded shadow-lg w-full z-10">
                      <ul>
                        {options.map((option, optionIndex) => (
                          <li
                            key={optionIndex}
                            className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${selectedOptions[index] === option ? 'bg-gray-200' : ''}`}
                            onClick={() => handleOptionSelect(index, option)}
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*Physical Activity*/}
        <div className="flex items-center mt-6 mb-6">
          <p className="text-lg">Physical Activity</p>
          <hr className="flex-1 border-gray-300 ml-4" />
        </div>
        <div className='px-2'>
          <p className="font-medium mb-2">1. How would you define your physical activity level?</p>
          <div className="flex gap-4 font-semibold">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="option5"
                className="mr-2"
              />
              <label htmlFor="option5" className="text-black text-sm">Heavy Activity</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="option6"
                className="mr-2"
              />
              <label htmlFor="option6" className="text-black text-sm">Secondary</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="option7"
                className="mr-2"
              />
              <label htmlFor="option7" className="text-black text-sm">Mid Activity</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="option8"
                className="mr-2"
              />
              <label htmlFor="option8" className="text-black text-sm">Moderate Activity</label>
            </div>
          </div>
        </div>
        {/*Medical information*/}

        <div className="flex items-center mt-6 mb-6">
          <p className="text-lg">Medical Information</p>
          <hr className="flex-1 border-gray-300 ml-4" />
        </div>
        <div className='p-2'>
          <p className="font-medium mb-2">1.Which defines your best sleeping pattern?</p>
          <div className="flex gap-4 font-semibold">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="option5"
                className="mr-2"
              />
              <label htmlFor="option5" className="text-black text-sm">Early to bed</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="option6"
                className="mr-2"
              />
              <label htmlFor="option6" className="text-black text-sm">early to rise</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="option7"
                className="mr-2"
              />
              <label htmlFor="option7" className="text-black text-sm">Irregular</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="option8"
                className="mr-2"
              />
              <label htmlFor="option8" className="text-black text-sm">Latr to bed</label>
            </div>
          </div>
        </div>
        {/*Eating habits*/}

        <div className="flex items-center mt-6">
          <p className="text-lg">Eating habits</p>
          <hr className="flex-1 border-gray-300 ml-4" />
        </div>
        <div className="mt-6 flex gap-32">

          {/* Checkboxes Row 1 */}
          <div className="mb-6 p-2">
            <p className="font-medium mb-2">1.How do you categories you eating habits ?</p>
            <div className="flex font-semibold">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="option1"
                  className="mr-2"
                />
                <label htmlFor="option1" className="text-sm">Frequency Snacking</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="option2"
                  className="mr-2"
                />
                <label htmlFor="option2" className="text-sm">Large Meals</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="option3"
                  className="mr-2"
                />
                <label htmlFor="option3" className="text-sm">Samll &Frequent Meals</label>
              </div>

            </div>
          </div>

          {/* Checkboxes Row 2 */}
          <div>
            <p className="font-medium mb-2">2.How often do you consume snacks or fast food?</p>
            <div className="flex gap-1 font-semibold">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="option5"
                  className="mr-2"
                />
                <label htmlFor="option5" className="text-black text-sm">Not very often</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="option6"
                  className="mr-2"
                />
                <label htmlFor="option6" className="text-black text-sm">1-2 times a week</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="option7"
                  className="mr-2"
                />
                <label htmlFor="option7" className="text-black text-sm">3-4 times a week</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="option8"
                  className="mr-2"
                />
                <label htmlFor="option8" className="text-black text-sm">On daily basis</label>
              </div>
            </div>
          </div>
        </div>

        {/* {Supplement & Medication} */}
        <div className="flex items-center mt-4 mb-6">
          <p className="text-lg">Supplement & Medication</p>
          <hr className="flex-1 border-gray-300 ml-4" />
        </div>
        <div className='p-2'>
          <p className="font-medium mb-2">1.list any medications you are taking, including over-the-counter drugs and prescribed medications.</p>
          <div className="flex gap-4 font-semibold">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="option5"
                className="mr-2"
              />
              <label htmlFor="option5" className="text-black text-sm">Multivation</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="option6"
                className="mr-2"
              />
              <label htmlFor="option6" className="text-black text-sm">Fish oil</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="option7"
                className="mr-2"
              />
              <label htmlFor="option7" className="text-black text-sm">Ayuredic</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="option8"
                className="mr-2"
              />
              <label htmlFor="option8" className="text-black text-sm">Protien supplemnt</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="option8"
                className="mr-2"
              />
              <label htmlFor="option9" className="text-black text-sm">Pre Workout</label>
            </div><div className="flex items-center">
              <input
                type="checkbox"
                id="option8"
                className="mr-2"
              />
              <label htmlFor="option10" className="text-black text-sm">Cretine</label>
            </div>
          </div>
        </div>
        {/* Fitness Goals */}
        <div className="flex items-center mt-6">
          <p className="text-lg">Fitness Goals</p>
          <hr className="flex-1 border-gray-300 ml-4" />
        </div>
        <div className="mt-6 flex gap-32">

          {/* Checkboxes Row 1 */}
          <div className="mb-6 p-2">
            <p className="font-medium mb-2">1.What are your primary fitness goals?</p>
            <div className="flex gap-4 font-semibold">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="option1"
                  className="mr-2"
                />
                <label htmlFor="option1" className="text-sm">Weight loss</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="option2"
                  className="mr-2"
                />
                <label htmlFor="option2" className="text-sm">Muscle gain</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="option3"
                  className="mr-2"
                />
                <label htmlFor="option3" className="text-sm">Toning</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="option4"
                  className="mr-2"
                />
                <label htmlFor="option4" className="text-black text-sm">General Health</label>
              </div>
            </div>
          </div>

          {/* Checkboxes Row 2 */}
          <div>
            <p className="font-medium mb-2">2.Are you aiming for a specific body composition?</p>
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="option5"
                  className="mr-2"
                />
                <label htmlFor="option5" className="text-black text-sm">Apple</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="option6"
                  className="mr-2"
                />
                <label htmlFor="option6" className="text-black text-sm">Pear</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="option7"
                  className="mr-2"
                />
                <label htmlFor="option7" className="text-black text-sm">Hourglass</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="option8"
                  className="mr-2"
                />
                <label htmlFor="option8" className="text-black text-sm">InverTriangle</label>
              </div>
            </div>
          </div>
        </div>
        {/* BMI Range */}
        <div className="flex items-center">
          <p className="texl-lg">BMI Range</p>
          <hr className="flex-1 border-gray-300 ml-4" />
        </div>
        <div className="mt-6 flex gap-32 p-2">

          {/* Checkboxes Row 1 */}
          <div className="mb-6 font-semibold">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="option1"
                  className="mr-2"
                />
                <label htmlFor="option1" className="text-sm">18.5</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="option2"
                  className="mr-2"
                />
                <label htmlFor="option2" className="text-sm">24.5</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="option3"
                  className="mr-2"
                />
                <label htmlFor="option3" className="text-sm">20.5</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="option4"
                  className="mr-2"
                />
                <label htmlFor="option4" className="text-black text-sm">23.5</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="option4"
                  className="mr-2"
                />
                <label htmlFor="option4" className="text-black text-sm">25.5</label>
              </div>
            </div>
          </div>


        </div>
        {/* Life Style */}
        <div className="flex items-center">
          <p className="text-lg">Life Style & Stress</p>
          <hr className="flex-1 border-gray-300 ml-4" />
        </div>
        <div className="mt-6 flex gap-32 p-2">

          {/* Checkboxes Row 1 */}
          <div className="mb-6">
            <p className="font-medium mb-2">1.Do you Smoke ?</p>
            <div className="flex gap-4 font-semibold">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="option1"
                  className="mr-2"
                />
                <label htmlFor="option1" className="text-sm">Yes</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="option2"
                  className="mr-2"
                />
                <label htmlFor="option2" className="text-sm">NO</label>
              </div>

            </div>
          </div>

          {/* Checkboxes Row 2 */}
          <div>
            <p className="font-medium mb-2">2.Do you consume alcohol??</p>
            <div className="flex gap-4 font-semibold">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="option5"
                  className="mr-2"
                />
                <label htmlFor="option5" className="text-black text-sm">Yes</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="option6"
                  className="mr-2"
                />
                <label htmlFor="option6" className="text-black text-sm">No</label>
              </div>

            </div>
          </div>
        </div>

        <div className='p-2'>
          <p className="font-medium mb-2">1.How would you describe your stress level?</p>
          <div className="flex gap-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="option5"
                className="mr-2"
              />
              <label htmlFor="option5" className="text-black text-sm">Under Control</label>
            </div>
            <div className="flex items-center font-semibold">
              <input
                type="checkbox"
                id="option6"
                className="mr-2"
              />
              <label htmlFor="option6" className="text-black text-sm">MIld</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="option7"
                className="mr-2"
              />
              <label htmlFor="option7" className="text-black text-sm">Moderate</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="option8"
                className="mr-2"
              />
              <label htmlFor="option8" className="text-black text-sm">Heavy</label>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8 py-2">
          <button
            className="bg-textgreen text-white w-[100.44px] h-[45px] rounded-lg flex items-center justify-center"
            onClick
          >
            <FaSave className="mr-2" />
            Save
          </button>
         
          <button className="bg-[#5A4BDA] text-white px-6 py-3 rounded-lg"
                      onClick={handleAddUserClick}
>
            Save & proceed to Diet Planning
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default PlanForm;
