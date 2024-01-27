import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";

export default function Listing() {
    const [users, setUser] = useState([]);

    const getData = () => {
        const db = getDatabase();
        const starCountRef = ref(db, 'users');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            const keys = Object.keys(data);
            let arr = [];
            for (let k of keys) {
                arr.push(
                    {
                        ...data[k],
                        id: k
                    }
                )
            }
            setUser(arr);
        });
    }

    useEffect(
        getData,
        []
    )

    function getDateFromTimestamp(timestamp) {
        if (timestamp == undefined) {
            return "N/A";
        } else {
            const d = new Date(timestamp);
            return d.toLocaleDateString();
        }
    }

    return (
        <div className="col-span-3 relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Dob
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Created At
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(
                            (user) => {
                                return (
                                    <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {user.name}
                                        </th>
                                        <td className="px-6 py-4">{user.email}</td>
                                        <td className="px-6 py-4">{user.dob}</td>
                                        <td className="px-6 py-4">{getDateFromTimestamp(user.createdAt)}</td>
                                    </tr>
                                )
                            }
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}
