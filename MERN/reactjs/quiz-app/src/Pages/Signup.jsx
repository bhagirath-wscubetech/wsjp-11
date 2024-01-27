import React, { useContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { MainContext } from '../Context/Main';
import { useNavigate } from 'react-router-dom/dist';


const Signup = () => {
    const { loginUser } = useContext(MainContext);
    const [msg, setMsg] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    function signUpHandler(e) {
        setMsg("");
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirm_password = e.target.confirm_password.value;
        if (email != "" && password != "" && confirm_password != "") {
            if (e.target.password.value == e.target.confirm_password.value) {
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // Signed up 
                        const user = userCredential.user;
                        loginUser(user);
                        setMsg("Account create ho gaya hai");
                        setError(false);
                        navigate("/play");
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setMsg(errorMessage)
                        // ..
                    });

            } else {
                setError(true);
                setMsg("Both passwords must match");
            }
        } else {
            setError(true);
            setMsg("Bhaia please sara data daldo");
        }
    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Create New Account Here
                </h2>
                <div className={`text-${error ? 'red' : 'green'}-500 text-center mt-4`}>{msg}</div>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={signUpHandler} className="space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                name="email"
                                type="email"
                                autoComplete="email"
                                required=""
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required=""
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Confirm Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                name="confirm_password"
                                type="password"
                                autoComplete="current-password"
                                required=""
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    <a
                        href="#"
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                        Start a 14 day free trial
                    </a>
                </p>
            </div>
        </div>

    );
}

export default Signup;
