import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../Context/Main';
import { useNavigate } from 'react-router-dom';

const Play = () => {
    const { user, data, answers, finish, result, current, next, prev, userAnswer } = useContext(MainContext);
    const navigate = useNavigate();

    useEffect(
        () => {
            if (user == null) {
                navigate("/login");
            }
        }, [user]
    )

    return (
        <>
            <h1 className='text-center text-5xl'>Play</h1>
            <div className='mt-3 w-[600px] mx-auto '>
                {
                    result == null
                        ?
                        <>
                            <Card {...data[current]} answers={answers} userAnswer={userAnswer} current={current} />
                            <hr />
                            <div className='flex justify-between mt-3'>
                                <button disabled={current == 0 ? true : false}
                                    className='p-3 disabled:bg-blue-100 bg-blue-500 text-white' onClick={prev}>Prev</button>
                                {
                                    current == data.length - 1
                                        ? <button className='p-3  bg-blue-500 text-white'
                                            title='Double click karke finish kardo' onDoubleClick={finish}>Finish</button>
                                        : <button className='p-3  bg-blue-500 text-white' onClick={next}>Next</button>
                                }

                            </div>
                        </>
                        :
                        <div className='text-center text-4xl my-6'>
                            Total: {result.total}
                            <hr className='my-3'/>
                            Marks: {result.marks}
                            <hr className='my-3'/>
                            <button>Play Again</button>
                        </div>
                }

            </div>
        </>
    )
}

export default Play;

const Card = ({ question, answers, userAnswer, option_a, option_b, option_c, option_d, current }) => {
    const [ans, setAns] = useState(null);

    useEffect(
        () => {
            if (answers[current] != undefined) {
                setAns(answers[current]);
            } else {
                setAns(null);
            }
        },
        [current]
    )

    return (
        <div className='shadow'>
            <div className='p-2'>
                <div className='text-2xl py-2 border-b'>{current + 1}) {question}</div>
                <div onClick={
                    () => {
                        setAns("a");
                        userAnswer("a");
                    }
                }
                    className={`text-xl p-2 cursor-pointer ${ans == "a" ? 'bg-blue-400 text-white' : ''}`}>
                    A) {option_a}
                </div>
                <div onClick={
                    () => {
                        setAns("b");
                        userAnswer("b");
                    }
                }
                    className={`text-xl p-2 cursor-pointer ${ans == "b" ? 'bg-blue-400 text-white' : ''}`}>
                    B) {option_b}
                </div>
                <div onClick={
                    () => {
                        setAns("c");
                        userAnswer("c");
                    }
                }
                    className={`text-xl p-2 cursor-pointer ${ans == "c" ? 'bg-blue-400 text-white' : ''}`}>
                    C) {option_c}
                </div>
                <div onClick={
                    () => {
                        setAns("d")
                        userAnswer("d");
                    }
                }
                    className={`text-xl p-2 cursor-pointer ${ans == "d" ? 'bg-blue-400 text-white' : ''}`}>
                    D) {option_d}
                </div>
            </div>

        </div>
    )
}