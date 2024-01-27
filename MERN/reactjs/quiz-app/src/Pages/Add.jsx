import React, { useContext } from 'react';
import Container from '../Components/Container';
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';
import { MainContext } from '../Context/Main';


const Add = () => {
    const { notify } = useContext(MainContext);
    const formSubmitHandler = (event) => {
        const db = getDatabase();
        event.preventDefault();
        const data = {
            question: event.target.question.value,
            option_a: event.target.option_a.value,
            option_b: event.target.option_b.value,
            option_c: event.target.option_c.value,
            option_d: event.target.option_d.value,
            answer: event.target.answer.value,
            createdAt: new Date().getTime()
        }
        const id = uuidv4();
        set(
            ref(db, `quiz/${id}`),
            data
        )
        event.target.reset();
        notify("Question added successfully");
    }
    return (
        <Container>
            <div className='my-5 shadow-lg p-3 rounded'>
                <h4 className='text-center text-3xl mb-3'>Add Quiz</h4>
                <hr />
                <form onSubmit={formSubmitHandler}>
                    <div className="my-3">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Questions
                        </label>
                        <textarea name="question" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                    </div>
                    <div className="my-3">
                        <label
                            htmlFor=""
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Option A
                        </label>
                        <input
                            type="text"
                            name='option_a'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                        />
                    </div>
                    <div className="my-3">
                        <label
                            htmlFor=""
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Option B
                        </label>
                        <input
                            type="text"
                            name='option_b'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                        />
                    </div>
                    <div className="my-3">
                        <label
                            htmlFor=""
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Option C
                        </label>
                        <input
                            type="text"
                            name='option_c'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                        />
                    </div>
                    <div className="my-3">
                        <label
                            htmlFor=""
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Option D
                        </label>
                        <input
                            type="text"
                            name='option_d'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                        />
                    </div>
                    <div className='my-3'>
                        <>
                            <label
                                htmlFor="answer"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Select correct answer
                            </label>
                            <select
                                name='answer'
                                id="answer"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>Choose a answer</option>
                                <option value="a">A</option>
                                <option value="b">B</option>
                                <option value="c">C</option>
                                <option value="d">D</option>
                            </select>
                        </>

                    </div>

                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                </form>

            </div>
        </Container>
    );
}

export default Add;
