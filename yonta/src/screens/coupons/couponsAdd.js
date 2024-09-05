import Layout from '../../Layout'
import { useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaSave, FaUpload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const CouponsAdd = () => {
    const navigate = useNavigate();

    const [discountCode, setDiscountCode] = useState('');
    const [couponDescription, setCouponDescription] = useState('');
    const [discountValue, setDiscountValue] = useState(0);
    const [minimumPurchaseAmount, setMinimumPurchaseAmount] = useState(0);
    const [minimumQuantity, setMinimumQuantity] = useState(0);
    const [customerEligibility, setCustomerEligibility] = useState([]);
    const [maximumUses, setMaximumUses] = useState([]);
    const [combinations, setCombinations] = useState([]);
    const [startDate, setStartDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [endTime, setEndTime] = useState(null);

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleStartTimeChange = (event) => {
        setStartTime(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    const handleEndTimeChange = (event) => {
        setEndTime(event.target.value);
    };
    const handleAddCouponsClick = () => {
        navigate('/couponsaddx'); // Navigate to the '/add-user' page
    };
    const handleSubmit = () => {
        // Handle form submission here
        console.log('Start Date:', startDate);
        console.log('Start Time:', startTime);
        console.log('End Date:', endDate);
        console.log('End Time:', endTime);
    };

    const handleDiscountCodeChange = (event) => {
        setDiscountCode(event.target.value);
    };

    const handleCouponDescriptionChange = (event) => {
        setCouponDescription(event.target.value);
    };

    const handleDiscountValueChange = (event) => {
        setDiscountValue(event.target.value);
    };

    const handleMinimumPurchaseAmountChange = (event) => {
        setMinimumPurchaseAmount(event.target.value);
    };

    const handleMinimumQuantityChange = (event) => {
        setMinimumQuantity(event.target.value);
    };


    const handleCustomerEligibilityChange = (event) => {
        const newCustomerEligibility = [...customerEligibility];
        if (event.target.checked) {
            newCustomerEligibility.push(event.target.value);
        } else {
            const index = newCustomerEligibility.indexOf(event.target.value);
            if (index > -1) {
                newCustomerEligibility.splice(index, 1);
            }
        }
        setCustomerEligibility(newCustomerEligibility);
    };

    const handleMaximumUsesChange = (event) => {
        const newMaximumUses = [...maximumUses];
        if (event.target.checked) {
            newMaximumUses.push(event.target.value);
        } else {
            const index = newMaximumUses.indexOf(event.target.value);
            if (index > -1) {
                newMaximumUses.splice(index, 1);
            }
        }
        setMaximumUses(newMaximumUses);
    };

    const handleCombinationsChange = (event) => {
        const newCombinations = [...combinations];
        if (event.target.checked) {
            newCombinations.push(event.target.value);
        } else {
            const index = newCombinations.indexOf(event.target.value);
            if (index > -1) {
                newCombinations.splice(index, 1);
            }
        }
        setCombinations(newCombinations);
    };

    const [products, setProducts] = useState([
        {
            name: 'MuscleBlaze Biozyme Performance Whey, 2 kg (4.4 lb), Rich Chocolate',
            image: '/images/1 (1).png',
        },
        {
            name: 'MuscleBlaze Biozyme Performance Whey, 2 kg (4.4 lb), Rich Chocolate',
            image: '/images/1 (1).png',
        },
    ]);

    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <Layout>
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold">
                        <span className="text-gray-500 font-normal">Cupons & Offer</span>
                        <span className="text-black"> &gt;Add Cuppons</span>
                    </h3>

                </div>
                <h1 className="text-lg font-bold mb-4 text-blue">Amount Of Products</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className='bg-white rounded-2xl p-4'>
                        <div className="mb-4">
                        <div className='flex justify-between'>
                            <label htmlFor="discount-code" className="block text-base font-medium ">
                                Discount Code
                            </label>
                            <label htmlFor="discount-code" className="block text-sm font-medium text-blue ">
                                Generate random code
                            </label>
                            </div>
                            <input
                                type="text"
                                id="discount-code"
                                className="mt-1 block w-full h-[40px] bg-[#F1F4FA] rounded-md sm:text-sm"
                                value={discountCode}
                                onChange={handleDiscountCodeChange}
                            />
                            <p className='text-gray-300'>Customer must enter this Readem code</p>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="coupon-description" className="block text-base font-medium ">
                                Coupon description
                            </label>
                            <textarea
                                id="coupon-description"
                                className="mt-1 block w-full h-[40px] bg-[#F1F4FA] rounded-md sm:text-sm"
                                value={couponDescription}
                                onChange={handleCouponDescriptionChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="discount-value" className="block text-base font-medium">
                                Discount value
                            </label>
                            <div className='flex justify-between'>
                                <div className=" items-center mb-4">
                                    {/* <label htmlFor="collection" className="mr-2">Specific Collection:</label> */}
                                    <select id="collection" className=" rounded px-2 py-1 bg-[#F1F4FA] h-[40px] w-[250px]">
                                        <option value="all">Percentage</option>
                                        {/* Add more options for collections */}
                                    </select>
                                    
                                </div>
                                <input
                                    // type="number"
                                    className=" block h-[40px] bg-[#F1F4FA] rounded-md sm:text-sm mr-10"

                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-lg font-medium mb-2">Minimum purchase requirements</h2>
                            <div className='bg-[#F1F4FA] p-4 rounded-2xl '>
                                <div className="flex items-center ">
                                    <input
                                        type="checkbox"
                                        id="no-minimum-requirements"
                                        className="form-checkbox"
                                        value="no-minimum-requirements"
                                    />
                                    <label htmlFor="no-minimum-requirements" className="ml-3 text-sm text-gray-700">
                                        No Minimum requirements
                                    </label>
                                </div>
                                <div className="flex items-center mt-2">
                                    <input
                                        type="checkbox"
                                        id="minimum-purchase-amount"
                                        className="form-checkbox"
                                        value="minimum-purchase-amount"
                                    />
                                    <label htmlFor="minimum-purchase-amount" className="ml-3 text-sm text-gray-700">
                                        Minimum purchase amount (₹)
                                    </label>

                                </div>
                                <div className="flex items-center mt-2">
                                    <input
                                        type="checkbox"
                                        id="minimum-quantity"
                                        className="form-checkbox"
                                        value="minimum-quantity"
                                        onChange={handleCustomerEligibilityChange}
                                    />
                                    <label htmlFor="minimum-quantity" className="ml-3 text-sm text-gray-700">
                                        Minimum Quantity of item
                                    </label>

                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-lg font-medium text-gray-700 mb-2">Customer Eligibility</h2>
                            <div className='p-4 bg-[#F1F4FA] rounded-2xl'>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="all-customers"
                                        className="form-checkbox"
                                        value="all-customers"
                                        onChange={handleCustomerEligibilityChange}
                                    />
                                    <label htmlFor="all-customers" className="ml-3 text-sm text-gray-700">
                                        All Customers
                                    </label>
                                </div>
                                <div className="flex items-center mt-2">
                                    <input
                                        type="checkbox"
                                        id="specific-customer-segment"
                                        className="form-checkbox"
                                        value="specific-customer-segment"
                                        onChange={handleCustomerEligibilityChange}
                                    />
                                    <label htmlFor="specific-customer-segment" className="ml-3 text-sm text-gray-700">
                                        Specific customer segment
                                    </label>
                                </div>
                                <div className="flex items-center mt-2">
                                    <input
                                        type="checkbox"
                                        id="specific-customers"
                                        className="form-checkbox"
                                        value="specific-customers"
                                        onChange={handleCustomerEligibilityChange}
                                    />
                                    <label htmlFor="specific-customers" className="ml-3 text-sm text-gray-700">
                                        Specific customers
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-lg font-medium text-gray-700 mb-2">Maximum discount uses</h2>
                            <div className='bg-[#F1F4FA] p-4 rounded-2xl '>

                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="limit-number-of-times"
                                        className="form-checkbox"
                                        value="limit-number-of-times"
                                        onChange={handleMaximumUsesChange}
                                    />
                                    <label htmlFor="limit-number-of-times" className="ml-3 text-sm text-gray-700">
                                        Limit number of times this discount can be used in total
                                    </label>
                                </div>
                                <div className="flex items-center mt-2">
                                    <input
                                        type="checkbox"
                                        id="limit-to-one-use"
                                        className="form-checkbox"
                                        value="limit-to-one-use"
                                        onChange={handleMaximumUsesChange}
                                    />
                                    <label htmlFor="limit-to-one-use" className="ml-3 text-sm ">
                                        Limit to one use per customer
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-lg font-medium  mb-2">Combinations</h2>
                            <div className='bg-[#F1F4FA] p-4 rounded-2xl '>
                                <p className='text-gray-300 mb-2'>this discount can be provide this</p>

                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="product-discounts"
                                        className="form-checkbox"
                                        value="product-discounts"
                                        onChange={handleCombinationsChange}
                                    />
                                    <label htmlFor="product-discounts" className="ml-3 text-sm ">
                                        Product discounts
                                    </label>
                                </div>
                                <div className="flex items-center mt-2">
                                    <input
                                        type="checkbox"
                                        id="order-discounts"
                                        className="form-checkbox"
                                        value="order-discounts"
                                        onChange={handleCombinationsChange}
                                    />
                                    <label htmlFor="order-discounts" className="ml-3 text-sm ">
                                        Order discounts
                                    </label>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-xl font-bold mb-4">Active Dates</h2>

                        <div className="bg-[#F1F4FA] p-4 rounded-lg">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="start-date" className="block mb-1 font-medium text-gray-700">
                                        Start Date
                                    </label>
                                    <input
                                        type="date"
                                        id="start-date"
                                        value={startDate}
                                        onChange={handleStartDateChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="start-time" className="block mb-1 font-medium text-gray-700">
                                        Start Time (IST)
                                    </label>
                                    <input
                                        type="time"
                                        id="start-time"
                                        value={startTime}
                                        onChange={handleStartTimeChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="end-date" className="block mb-1 font-medium text-gray-700">
                                        End Date
                                    </label>
                                    <input
                                        type="date"
                                        id="end-date"
                                        value={endDate}
                                        onChange={handleEndDateChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="end-time" className="block mb-1 font-medium text-gray-700">
                                        End Time (IST)
                                    </label>
                                    <input
                                        type="time"
                                        id="end-time"
                                        value={endTime}
                                        onChange={handleEndTimeChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                            </div>

                        </div>

                    </div>

                    <div>
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <h2 className="text-lg font-medium text-gray-700 mb-2">Summary</h2>
                            <p className="text-sm text-gray-600">No discount code yet</p>
                            <h2 className="text-lg font-medium text-gray-700 mb-2 mt-4">Discount value</h2>
                            <ul className="list-disc ml-4 text-sm text-gray-600">
                                <li>Type and method</li>
                                <li>Code</li>
                            </ul>
                            <h2 className="text-lg font-medium text-gray-700 mb-2 mt-4">Details</h2>
                            <ul className="list-disc ml-4 text-sm text-gray-600">
                                <li>Can't combine with other discounts</li>
                            </ul>
                        </div>
                        <div className="container p-4 bg-white mt-6 rounded-2xl" >
                            <h2 className="text-2xl font-bold mb-4">Applies to</h2>
                            <div className=" items-center mb-4">
                                <div className=" items-center mb-4">
                                    {/* <label htmlFor="collection" className="mr-2">Specific Collection:</label> */}
                                    <select id="collection" className=" rounded px-2 py-1 w-full bg-[#F1F4FA] h-[40px]">
                                        <option value="all">All</option>
                                        {/* Add more options for collections */}
                                    </select>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Search Product"
                                        className=" rounded px-2 py-1 w-full bg-[#F1F4FA] h-[40px]" value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                            </div>
                            <ul className=" gap-4 bg-[#f1f4fa] rounded-2xl">
                                {filteredProducts.map(product => (
                                    <li key={product.name} className=" p-4">
                                        <div className="flex items-center">
                                            <img src={product.image} alt={product.name} className="w-16 h-16 mr-4" />
                                            <div className='flex'>
                                                <h3 className="text-base font-semibold">{product.name}</h3>
                                                <div className="bg-[#FB5458] p-2 rounded-lg h-8" >
                                                    <FaTrash className="text-white cursor-pointer" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex justify-end gap-2 mt-6 mb-4">
                            <button
                                className="bg-textgreen text-white w-[100.44px] h-[43px] rounded-lg flex items-center justify-center"
                                onClick={handleAddCouponsClick}
                            >
                                <FaSave className="mr-2" />
                                Save
                            </button>


                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default CouponsAdd;