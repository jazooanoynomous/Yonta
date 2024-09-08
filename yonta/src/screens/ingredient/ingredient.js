import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import Layout from '../../Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASEURL } from '../../utils/constant';

const Ingredient = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading
  const navigate = useNavigate();

  const fetchIngredientsData = async () => {
    try {
      const response = await axios.get(`${BASEURL}ingredients`, {
        headers: {
          'VerifyMe': 'RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0', // Add your custom header here
        },
      });
      setCategories(response.data.finalList || []); // Set the ingredient data in state
    } catch (error) {
      console.error('Error fetching ingredients:', error);
    } finally {
      setLoading(false); // Stop the loading state
    }
  };

  useEffect(() => {
    fetchIngredientsData(); // Fetch the ingredient data when the component mounts
  }, []);

  const handleAddUserClick = () => {
    navigate('/addingredient'); // Navigate to the '/addingredient' page
  };

  const handleEditClick = (category) => {
    navigate('/addingredient', { state: { ingredient: category } }); // Pass ingredient data to edit
  };
  const handleDeleteCategory = async (id) => {
    try {
      await axios.delete(`${BASEURL}ingredients/${id}`, {
        headers: {
          'VerifyMe': 'RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0', // Add your custom header here
        },
      });
      // Remove the deleted category from state after successful deletion
      const updatedCategories = categories.filter((category) => category.id !== id);
      setCategories(updatedCategories);
    } catch (error) {
      console.error('Error deleting ingredient:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>; // Render loading state while fetching data
  }

  return (
    <Layout>
      <div className="mb-20">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Nutrition & diet</h1>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Search diet plans"
              className="rounded-xl px-2 py-1 mr-28 w-[360px]"
            />
            <button
              className="text-blue border px-4 py-2 rounded-xl"
            >
              Edit Questions
            </button>
            <button
              onClick={handleAddUserClick}
              className="bg-blue text-white rounded-xl flex px-4 py-2"
            >
              <FaPlus className="w-6 h-6 font-thin" />
              Add User
            </button>
          </div>
        </header>
        <p className="py-3">Select any alphabet, and you will see only the ingredients associated with that alphabet.</p>
        <p className="py-3">A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 rounded-lg mr-24">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center rounded-xl bg-white shadow-md h-[236px] w-[226px] border border-[#FF8A00]"
            >
              <img
                src={category.image}
                alt={category.name}
                className="object-cover rounded-xl mb-2 h-[190px] w-[226px]"
              />
              <div className="flex space-x-2 ml-28">
                <div className="bg-[#FB5458] p-2 rounded-lg" onClick={() => handleDeleteCategory(category.id)}>
                  <FaTrash className="text-white cursor-pointer" />
                </div>
                <div className="flex bg-blue p-2 rounded-lg gap-1" onClick={() => handleEditClick(category)}>
                  <FaEdit className="text-white cursor-pointer" />
                  <p className="text-white text-xs">Edit</p>
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
