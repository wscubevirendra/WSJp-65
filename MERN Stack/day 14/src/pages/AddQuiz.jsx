import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { getDatabase, ref, set } from "firebase/database";



const AddQuiz = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            question: e.target.question.value,
            option1: e.target.option_1.value,
            option2: e.target.option_2.value,
            option3: e.target.option_3.value,
            option4: e.target.option_4.value,
            correct: e.target.correct.value,
        }
        const id = uuidv4();
        const db = getDatabase();
    
        set(ref(db, 'quizs/' + id), data);
        e.target.reset()


    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-md shadow-md"
        >
            <h2 className="text-xl font-semibold mb-4">Create Quiz</h2>

            {/* Question Input */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="question">
                    Question:
                </label>
                <input
                    type="text"
                    id="question"
                    name="question"
                    placeholder="Enter your question"
                    className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            {/* Options Input */}
            {
                [1, 2, 3, 4].map((option, index) => (
                    <div className="mb-4" key={index}>
                        <label
                            className="block text-sm font-medium text-gray-700"
                            htmlFor={`option_${index}`}
                        >
                            Option {index + 1}:
                        </label>
                        <input
                            type="text"
                            id={`option_${index + 1}`}
                            name={`option_${index + 1}`}
                            placeholder={`Enter option ${index + 1}`}
                            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                ))}

            {/* Correct Answer Selector */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Correct Answer:
                </label>
                <select
                    name="correct"
                    className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {[1, 2, 3, 4].map((option, index) => (
                        <option value={index + 1} key={index}>
                            {`Option ${index + 1}`}
                        </option>
                    ))}
                </select>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Submit
            </button>
        </form>
    );
};

export default AddQuiz;
