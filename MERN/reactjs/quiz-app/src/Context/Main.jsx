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
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);

    useEffect(
        () => {
            if (current != 0) localStorage.setItem("current", current);
        },
        [current]
    )
    // useEffect(
    //     () => {
    //         if(timer == 0){
    //             finish();
    //         }
    //     },
    //     [timer]
    // )


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

            // ls to state
            const current = localStorage.getItem("current");
            if (current != null) {
                setCurrent(parseInt(current));
            }

            const lsAnswers = localStorage.getItem("answers");
            if (lsAnswers != null) {
                setAnswers(JSON.parse(lsAnswers));
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

    const next = () => {
        setCurrent(current + 1);
    }
    const prev = () => {
        if (current == 1) localStorage.setItem("current", 0);
        setCurrent(current - 1);
    }

    const userAnswer = (ans) => {
        // console.log(current,ans);
        const tempAns = { ...answers }
        tempAns[current] = ans;
        // tempAns[1] = b;
        // tempAns[0] = a;
        // console.log(a);
        setAnswers(tempAns);
    }

    useEffect(
        () => {
            if (Object.keys(answers).length != 0) {
                localStorage.setItem("answers", JSON.stringify(answers));
            }
        },
        [answers]
    )

    function finish() {
        let marks = 0
        for (let i = 0; i < data.length; i++) {
            if (data[i].answer == answers[i]) {
                marks++;
            }
        }
        const res = {
            total: data.length,
            marks,
        }
        setResult(res);
    }

    return (
        <MainContext.Provider value={{ finish, answers, userAnswer, current, setCurrent, notify, data, user, next, prev, loginUser, logout, result }}>
            <ToastContainer />
            {props.children}
        </MainContext.Provider>
    );
}

export default Main;
export { MainContext }
