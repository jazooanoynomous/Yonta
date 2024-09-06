// SubscriptionForm.js
import React from 'react';
import { FaSave } from 'react-icons/fa';

function PlanFormModel({
    planName,
    offerTag,
    isActive,
    isOfferActive,
    billingCycle,
    price,
    sections,
    handlePlanNameChange,
    handleOfferTagChange,
    handleIsActiveChange,
    handleIsOfferActiveChange,
    handleBillingCycleChange,
    handlePriceChange,
    handleSectionChange,
    handleSubmit,
    toggleModal
}) {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col relative w-[504px] h-[564px]">
                <button
                    onClick={toggleModal}
                    className="absolute top-2 right-2 text-red-500 font-bold"
                >
                    X
                </button>
                <form onSubmit={handleSubmit}>
                    <div className='flex justify-between'>
                        <div className="mb-4">
                            <label htmlFor="planName" className="block text-sm font-bold mb-2">
                                Plan Name
                            </label>
                            <input
                                type="text"
                                id="planName"
                                placeholder='plan name'
                                value={planName}
                                onChange={handlePlanNameChange}
                                className="rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-backgroundgray"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="offerTag" className="block text-sm font-bold mb-2">
                                Offer Tag
                            </label>
                            <input
                                type="text"
                                id="offerTag"
                                placeholder='offerTag'
                                value={offerTag}
                                onChange={handleOfferTagChange}
                                className="rounded bg-backgroundgray w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className='flex justify-between'>
                  <div className="mb-4">
                    <div className="flex items-center">
                      <label htmlFor="isActive" className="ml-2 text-gray-700 text-sm font-bold">
                        InActive
                      </label>
                      <label className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                        <input
                          type="checkbox"
                          id="isActive"
                          checked={isActive}
                          onChange={handleIsActiveChange}
                          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                        />
                        <label
                          htmlFor="isActive"
                          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                        ></label>
                      </label>
                      <label htmlFor="isActive" className="ml-2 text-gray-700 text-sm font-bold">
                        Active
                      </label>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center">
                      <label htmlFor="isOfferActive" className="ml-2 text-gray-700 text-sm font-bold">
                        InActive
                      </label>
                      <label className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                        <input
                          type="checkbox"
                          id="isOfferActive"
                          checked={isOfferActive}
                          onChange={handleIsOfferActiveChange}
                          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                        />
                        <label
                          htmlFor="isOfferActive"
                          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                        ></label>
                      </label>
                      <label htmlFor="isOfferActive" className="ml-2 text-gray-700 text-sm font-bold">
                        Active
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mb-4 flex gap-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="monthly"
                      value="monthly"
                      checked={billingCycle === 'monthly'}
                      onChange={handleBillingCycleChange}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <label htmlFor="monthly" className="ml-2 text-sm font-bold">
                      Monthly
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="yearly"
                      value="yearly"
                      checked={billingCycle === 'yearly'}
                      onChange={handleBillingCycleChange}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <label htmlFor="yearly" className="ml-2 text-sm font-bold">
                      Yearly
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="price" className="block text-sm font-bold mb-2 ">
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    value={price}
                    placeholder='1300'
                    onChange={handlePriceChange}
                    className=" rounded w-1/2 py-2 px-3 bg-backgroundgray leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <h4 className='font-bold mb-2 text-lg'>Sections</h4>
                <div className='space-y-3'>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="yearly"
                      value="yearly"
                      checked={billingCycle === 'yearly'}
                      onChange={handleBillingCycleChange}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <label htmlFor="yearly" className="ml-2 text-sm font-bold">
                      All in one
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="yearly"
                      value="yearly"
                      checked={billingCycle === 'yearly'}
                      onChange={handleBillingCycleChange}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <label htmlFor="yearly" className="ml-2 text-sm font-bold">
                      Yoga
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="yearly"
                      value="yearly"
                      checked={billingCycle === 'yearly'}
                      onChange={handleBillingCycleChange}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <label htmlFor="yearly" className="ml-2 text-sm font-bold">
                      DietPlans
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="yearly"
                      value="yearly"
                      checked={billingCycle === 'yearly'}
                      onChange={handleBillingCycleChange}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <label htmlFor="yearly" className="ml-2 text-sm font-bold">
                      Ecommerce
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="yearly"
                      value="yearly"
                      checked={billingCycle === 'yearly'}
                      onChange={handleBillingCycleChange}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <label htmlFor="yearly" className="ml-2 text-sm font-bold">
                      Add workout
                    </label>
                  </div>
                </div>
                    </div>
                    {/* Similar code for other fields */}
                    <div className="flex justify-end gap-2 mt-6 mb-4">
                        <button
                            className="bg-textgreen text-white w-[100.44px] h-[43px] rounded-lg flex items-center justify-center"
                        >
                            <FaSave className="mr-2" />
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PlanFormModel;
