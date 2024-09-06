import React, { useState } from "react";
import Layout from '../Layout';
import { FaSave } from "react-icons/fa";
import QuestionCard from "../components/Modals/questionCard";

const Questionars = () => {
    const [questions, setQuestions] = useState([
        {
            id: 1,
            title: "Choose your diet preference",
            options: [
                { id: 1, label: "Veg", imageUrl: "/images/image 45.png" },
                { id: 2, label: "Non-Veg", imageUrl: "/images/image 46.png" },
                { id: 3, label: "Egg", imageUrl: "/images/image 47.png" },
                { id: 4, label: "Vegan", imageUrl: "/images/image 48.png" },
                { id: 5, label: "Jain", imageUrl: "/images/image 49.png" },
            ],
        },
        {
            id: 2,
            title: "Choose your diet type",
            options: [
                { id: 1, label: "Lactosefriendly", imageUrl: "/images/image 45.png" },
                { id: 2, label: "Glutenfriendly", imageUrl: "/images/image 46.png" },
                { id: 3, label: "Sugar Free", imageUrl: "/images/image 47.png" },
                { id: 4, label: "Keto Friendly", imageUrl: "/images/image 48.png" },
            ],
        },
    ]);

    // Function to render repeated sections
    const renderSection = (title) => (
        <>
            <div className="flex items-center mb-8">
                <p className="text-lg">{title}</p>
                <hr className="flex-1 border-gray-300 ml-4 border" />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 justify-between">
                {questions.map((question) => (
                    <QuestionCard key={question.id} question={question} />
                ))}
            </div>
            <button className="mt-6 px-4 py-2 w-1/3 bg-white text-black rounded shadow">
                + Add Question
            </button>
        </>
    );

    return (
        <Layout>
            <div className="container p-4">
                {/* Render sections dynamically */}
                {renderSection('Preferred Diet Type')}
                {renderSection('Geographical Area')}
                {renderSection('Geographical Area')}
                {renderSection('Geographical Area')}
                
                {/* Save Button */}
                <div className="flex justify-center mt-10">
                    <button className="flex items-center bg-textgreen text-white px-6 py-3 rounded shadow hover:bg-blue-600">
                        <FaSave className="mr-2" /> Save
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default Questionars;
