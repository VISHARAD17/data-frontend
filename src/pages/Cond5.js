import React from 'react'
import { useEffect, useState } from 'react';

const Cond5 = () => {
    const [data, setData] = useState([]);

    const fetchUserData = async () => {
    // await fetch("http://localhost:4001/getcond5")
        await fetch("https://visharad-backend.onrender.com/getcond5")
        .then(response => {
        return response.json()
        })
        .then(data => {
        setData(data)
        })
    };

    useEffect(() => {
    fetchUserData()
    }, []);

    return (
        <div className='App'>
            <div className='flex justify-center m-2'>
                <h1 className='font-bold text-[20px] mt-auto mb-auto'> Condition 5s : </h1>
                <p className='text-[18px] mt-auto mb-auto'>&nbsp; Data of top 10 cities which have the highest number of users and their average
income.</p>
            </div>
            <div className='flex justify-center m-2'>
                <h1 className='font-bold text-[20px] mt-auto'> Total users after filtering : </h1>
                <p className='text-[18px] mb-auto'>&nbsp; {data.length}</p>
            </div>
            {/* <h1>Condition 1</h1> */}
            {/* <h2>{data.length}</h2> */}
            <div className=''>
                <table className='ml-auto mr-auto bg-slate-200 border-collapse border border-slate-400'>
                    <thead>
                        <tr>
                            <th className='p-4 border border-slate-300 bg-cyan-600'>City Name</th>
                            <th className='p-4 border border-slate-300 bg-cyan-600'>Total Users</th>
                            <th className='p-4 border border-slate-300 bg-cyan-600'>Total Income</th>
                        </tr>
                    </thead>
                    {data.length > 0 && (
                        <tbody className='something'>
                            {data.map(([city, stat])=> (
                                <tr className='text-center'>
                                    <td className='p-4 border border-slate-300' >{city}</td>
                                    <td className='p-4 border border-slate-300'>{stat.numUsers}</td>
                                    <td className='p-4 border border-slate-300'>{stat.totalIncome}</td>
                                </tr>
                            ))}
                        </tbody>
                    )}
                </table>
            </div>
            {/* {data.length > 0 && (
            <ul>
                {data.map(user => (
                <li key={user.id}>{user.first_name}</li>
                ))}
            </ul>
            )} */}
        </div>
        
    );
}

export default Cond5