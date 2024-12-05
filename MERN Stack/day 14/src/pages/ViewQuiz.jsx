import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../Context";


const ViewQuiz = () => {
    const { quiz } = useContext(MainContext)

    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Question
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Option1
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Option2
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Option3
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Option4
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        quiz.map((d, i) => {
                            return (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {d.question}
                                    </th>
                                    <td className={`px-6 py-4 ${d.correct == 1 ? "text-red-400 font-bold" : ""}`}>{d.option1}</td>
                                    <td className={`px-6 py-4 ${d.correct == 2 ? "text-red-400 font-bold" : ""}`}>{d.option2}</td>
                                    <td className={`px-6 py-4 ${d.correct == 3 ? "text-red-400 font-bold" : ""}`}>{d.option3}</td>
                                    <td className={`px-6 py-4 ${d.correct == 4 ? "text-red-400 font-bold" : ""}`}>{d.option4}</td>
                                </tr>
                            )


                        })
                    }


                </tbody>
            </table>
        </div>

    );
};

export default ViewQuiz;
