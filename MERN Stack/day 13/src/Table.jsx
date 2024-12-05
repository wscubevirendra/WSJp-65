import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";

export default function Table() {
    const [user, Setuser] = useState([])
    function showData() {
        const db = getDatabase();
        const starCountRef = ref(db, 'users/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            const newData = Object.keys(data)  //object array of object
            const myupdateData = []
            for (let d of newData) {
                myupdateData.push({ id: d, ...data[d] })
            }
            Setuser(myupdateData)

        });
    }

    useEffect(
        () => {
            showData()
        },
        []
    )


    return (
        <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Submitted Data</h2>
            <table className="w-full bg-white shadow-md rounded-lg">
                <thead>
                    <tr className="bg-blue-500 text-white">
                        <th className="py-2 px-4">Name</th>
                        <th className="py-2 px-4">Email</th>
                        <th className="py-2 px-4">Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((d, i) => {
                            return (
                                <tr key={i} className="odd:bg-gray-100 even:bg-white">
                                    <td className="py-2 px-4">{d.name}</td>
                                    <td className="py-2 px-4">{d.email}</td>
                                    <td className="py-2 px-4">{d.contact}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

