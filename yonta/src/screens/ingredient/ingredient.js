import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaSave, FaUpload } from 'react-icons/fa';
import Layout from '../../Layout'
import { useNavigate } from 'react-router-dom';


const initialCategories = [
    { id: 1, name: 'Category 1', imageUrl: '/images/Rectangle 4496.png' },
    { id: 2, name: 'Category 2', imageUrl: '/images/Rectangle 4624.png' },
    { id: 3, name: 'Category 3', imageUrl: '/images/Rectangle 4496.png' },
    { id: 4, name: 'Category 4', imageUrl: '/images/Rectangle 4497.png' },
    { id: 5, name: 'Category 5', imageUrl: '/images/Rectangle 4624.png' },
    { id: 1, name: 'Category 1', imageUrl: '/images/Rectangle 4624.png' },
    { id: 2, name: 'Category 2', imageUrl: '/images/Rectangle 4496.png' },
    { id: 3, name: 'Category 3', imageUrl: '/images/Rectangle 4497.png' },
    { id: 4, name: 'Category 4', imageUrl: '/images/Rectangle 4624.png' },
    { id: 5, name: 'Category 5', imageUrl: '/images/Rectangle 4497.png' },
    { id: 5, name: 'Category 5', imageUrl: '/images/Rectangle 4496.png' },
    { id: 5, name: 'Category 5', imageUrl: '/images/Rectangle 4497.png' },
];

const Ingredient = ({  onDeleteCategory }) => {
    const [categories, setCategories] = useState(initialCategories);
    const navigate = useNavigate();

    const handleAddUserClick = () => {
      navigate('/addingredient'); // Navigate to the '/add-user' page
    };
    const handleDeleteCategory = (id) => {
        const updatedCategories = categories.filter((category) => category.id !== id);
        setCategories(updatedCategories);
        onDeleteCategory(id);
    };

    return (
        <Layout>
        <div className="mb-20">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Nutrition & diet</h1>
          <div className="flex space-x-4 ">
            <input
              type="text"
              placeholder="Search diet plans"
              className=" rounded-xl px-2 py-1 mr-28 w-[360px]"
              
            />
            <button
              onClick
              className="text-blue border px-4 py-2 rounded-xl"
            >
              Edit Questions
            </button>

            <button
              onClick={handleAddUserClick}
              className="bg-blue text-white rounded-xl flex px-4 py-2"
            >
              <FaPlus className=" w-6 h-6 font-thin" />

              Add User
            </button>
          </div>
        </header>
        <p className='py-3'>Select any alphabet, and you will see only the ingredients associated with that alphabet.</p>
        <p className='py-3'>A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 rounded-lg mr-24 ">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="flex flex-col items-center rounded-xl bg-white shadow-md h-[236px] w-[226px] border border-[#FF8A00]"
                    >
                        <img
                            src={category.imageUrl}
                            alt={category.name}
                            className="object-cover rounded-xl mb-2 h-[190px] w-[226px]"
                        />
                        <div className="flex space-x-2 ml-28">
                            <div className="bg-[#FB5458] p-2 rounded-lg" onClick={() => handleDeleteCategory(category.id)}>
                                <FaTrash className="text-white cursor-pointer" />
                            </div>
                            <div className="flex bg-blue p-2 rounded-lg gap-1">
                                <FaEdit className="text-white cursor-pointer" />
                                <p className='text-white text-xs'>Edit</p>
                            </div>
                        </div>
                    </div>
                ))}
              
            </div>

          
        </div>
        </Layout>
    );
};

export default Ingredient;
