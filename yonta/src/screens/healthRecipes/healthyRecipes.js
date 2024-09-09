import React, { useEffect, useState } from 'react';
import Layout from '../../Layout';
import { FaSave } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';
import Recipe from '../../components/healthy2';
import axios from 'axios';
import { BASEURL } from '../../utils/constant';
import Category from '../../components/healthy';

const suggestions = [
    'Diet & nutrition',
    'Suplements',
    'Workout & hobbys',
    'Cover trending',
    'Transcripts',
];

const HealthyRecipes = () => {
    const [activeSuggestion, setActiveSuggestion] = useState(null);
    const [categoryData, setCategoryData] = useState([]); 
    const [recipeData, setRecipeData]=useState([]);
    const [loading, setLoading] = useState(true); // State to manage loading
  
    // Function to fetch user data
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get(`${BASEURL}healthyRecipesCat`, {
          headers: {
            'VerifyMe': 'RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0', // Add your custom header here
          }
        });
        setCategoryData(response.data.healthyRecipes || []); // Set the user data in state
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false); // Stop the loading state
      }
    };
  
    useEffect(() => {
        fetchCategoryData(); // Fetch the user data when the component mounts
    }, []);

    const fetchRecipeData = async () => {
        try {
          const response = await axios.get(`${BASEURL}healthyRecipes/1`, {
            headers: {
              'VerifyMe': 'RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0', // Add your custom header here
            }
          });
          setRecipeData(response.data.healthyRecipes || []); // Set the user data in state
        } catch (error) {
          console.error('Error fetching users:', error);
        } finally {
          setLoading(false); // Stop the loading state
        }
      };
    
      useEffect(() => {
        fetchRecipeData(); // Fetch the user data when the component mounts
      }, []);
      console.log('recioerdata',recipeData);
      

      const handleDeleteReciepe = async (id) => {
        try {
            await axios.delete(`${BASEURL}healthyRecipes/${id}`, {
                headers: {
                    'VerifyMe': 'RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0',
                }
            });
            setRecipeData(prevData => prevData.filter(category => category.id !== id));
        } catch (error) {
            console.error('Error deleting RecipeData:', error);
        }
    };
    const handleDeleteCategory = async (id) => {
        try {
            await axios.delete(`${BASEURL}healthyRecipesCat/${id}`, {
                headers: {
                    'VerifyMe': 'RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0',
                }
            });
            setCategoryData(prevData => prevData.filter(category => category.id !== id));
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    };
    const handleEditCategory = async (updatedCategory) => {
        try {
            const { id } = updatedCategory;
            const response = await axios.put(`${BASEURL}healthyRecipesCat/${id}`, updatedCategory, {
                headers: {
                    'VerifyMe': 'RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0',
                },
            });
            // Update state with edited category
            setCategoryData((prevData) =>
                prevData.map((category) => (category.id === id ? response.data : category))
            );
        } catch (error) {
            console.error('Error editing category:', error);
        }
    };
  
    const handleAddCategory = async (newCategory) => {
      try {
          const response = await axios.post(`${BASEURL}healthyRecipesCat`, newCategory, {
              headers: {
                  'VerifyMe': 'RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0',
              },
          });
          // Update state with newly added category
          setCategoryData((prevData) => [...prevData, response.data]);
      } catch (error) {
          console.error('Error adding category:', error);
      }
  };
    const navigate = useNavigate();

    const handleSuggestionClick = (index) => {
        setActiveSuggestion(index);
    };
    const handleAddRecipes = () => {
        navigate('/addrecipes'); 
      };




    return (
        <Layout>
            <div className="p-4">
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Healthy Recipes</h1>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border rounded px-2 py-1"
                    />
                </header>

                <Category
                    data={categoryData}
                    onAddCategory={handleAddCategory}
                    onEditCategory={handleEditCategory}
                    onDeleteCategory={handleDeleteCategory}
                />
                <div className="flex justify-end gap-2 mt-6 mb-4">
                    <button
                        className="bg-textgreen text-white w-[100.44px] h-[43px] rounded-lg flex items-center justify-center"
                        onClick
                    >
                        <FaSave className="mr-2" />
                        Save
                    </button>


                </div>
                <hr className="flex-1 border-gray-300 ml-4 border" />

                <div className="flex gap-2 mb-6 mt-10">
                    <h2 className="text-xl mt-4 mr-4 font-semibold">Category:</h2>
                    {suggestions.map((suggestion, index) => (
                        <div
                            key={index}
                            onClick={() => handleSuggestionClick(index)}
                            className={`cursor-pointer p-2 border rounded-xl mt-3 ${activeSuggestion === index ? 'bg-blue text-white' : 'bg-white'}`}
                        >
                            {suggestion}
                        </div>
                    ))}
                </div>


                <Recipe 
                     onDeleteCategory={handleDeleteReciepe} 
                     data={recipeData}
                     />
                <div className="flex justify-end gap-2 mt-6 mb-4">
                    <button
                        className="bg-textgreen text-white w-[100.44px] h-[43px] rounded-lg flex items-center justify-center"
                        onClick={handleAddRecipes}
                    >
                        <FaSave className="mr-2" />
                        Save
                    </button>

                </div>


            </div>

        
        </Layout >
    );
};

export default HealthyRecipes;
