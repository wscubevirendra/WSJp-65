import React, { createContext, useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
const MainContext = createContext()

export default function Context(props) {
    const [user, SetUser] = useState(null);
    const [quiz, Setquiz] = useState([]);

    useEffect(
        () => {
            const db = getDatabase();
            const starCountRef = ref(db, 'quizs/');
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                const allQuiz = [];
                const newData = Object.keys(data)
                for (let d of newData) {
                    allQuiz.push({ id: d, ...data[d] })

                }
                Setquiz(allQuiz)
            })
        },
        []
    )

    useEffect(
        () => {
            const user = localStorage.getItem("user")

            if (user != null) {
                SetUser(JSON.parse(user))
            }
        },
        []
    )

    const login = (data) => {
        SetUser(data)
        localStorage.setItem("user", JSON.stringify(data))
    }
    const logout = () => {
        SetUser(null)
        localStorage.removeItem("user")
    }

    return (
        <MainContext.Provider value={{ user, login, logout, quiz }}>
            {props.children}
        </MainContext.Provider>
    )
}


export { MainContext }  