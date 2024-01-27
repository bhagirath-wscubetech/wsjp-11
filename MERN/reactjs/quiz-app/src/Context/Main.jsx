import React, { createContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getDatabase, ref, onValue } from "firebase/database";
const MainContext = createContext();

const Main = (props) => {
    const notify = (msg) => toast(msg);
    const db = getDatabase();
    const [data, setData] = useState([]);
    const [user, setUser] = useState(null);


    useEffect(
        () => {
            const starCountRef = ref(db, 'quiz');
            onValue(starCountRef, (snapshot) => {
                const quizData = snapshot.val();
                if (quizData == null) return;
                //console.log(quizData); // object of objects
                const arr = Object.keys(quizData).map(
                    (k) => {
                        return {
                            id: k,
                            ...quizData[k]
                        }
                    }
                )
                setData(arr);
            });

            // ls to state
            const lsuser = localStorage.getItem("user");
            if (lsuser != null) {
                setUser(JSON.parse(lsuser));
            }

        },
        []
    )

    const loginUser = (user) => {
        console.log("user", user);
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    }

    return (
        <MainContext.Provider value={{ notify, data, user, loginUser, logout }}>
            <ToastContainer />
            {props.children}
        </MainContext.Provider>
    );
}

export default Main;
export { MainContext }
