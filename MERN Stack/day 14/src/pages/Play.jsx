import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../Context'

export default function Play() {
    const { quiz } = useContext(MainContext)
    const [current, Setcurrent] = useState(0)
    console.log(quiz.length - 1 == current)
    return (
        <>
            <div className='max-w-[400px]  shadow-md p-4 mx-auto mt-20'>
                <Box quiz={quiz[current]} current={current} />
            </div>
            <button disabled={quiz.length - 1 == current && true}
                onClick={() => Setcurrent(current + 1)} className='p-2 bg-blue-400 disabled:bg-red-400  w-[100px] mx-auto text-center text-white text-[20px] cursor-pointer mt-4'>Next</button>

        </>
    )

}



function Box({ quiz, current }) {
    const [Ans, setAnswer] = useState(null)

    const andHandler = () => {
        setAnswer(quiz.correct)
    }

    useEffect(
        () => {
            setAnswer(null)
        },
        [quiz]
    )

    return (
        <div>
            <h4>{current + 1}) {quiz?.question}</h4>
            <div onClick={andHandler} className={`py-2 w-full cursor-pointer mt-2 ${Ans == "1" && "bg-[red] text-blue-300"}`}>A) {quiz?.option1}</div>
            <div onClick={andHandler} className={`py-2 w-full cursor-pointer mt-2 ${Ans == "2" && "bg-[red]  text-blue-300"}`}>B) {quiz?.option2}</div>
            <div onClick={andHandler} className={`py-2 w-full cursor-pointer mt-2 ${Ans == "3" && "bg-[red]  text-blue-300"}`}>C) {quiz?.option3}</div>
            <div onClick={andHandler} className={`py-2 w-full cursor-pointer mt-2 ${Ans == "4" && "bg-[red]  text-blue-300"}`}>D) {quiz?.option4}</div>
        </div>
    )
}
