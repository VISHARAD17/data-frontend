import React from 'react'
import { useEffect, useState } from 'react';

const Cond1 = () => {
    const [data, setData] = useState([]);

    const fetchUserData = async () => {
    await fetch("http://localhost:4001/getcond1")
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
                <h1 className='font-bold text-[20px] mt-auto mb-auto'> Condition 1 : </h1>
                <p className='text-[18px] mt-auto mb-auto'>&nbsp; Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.</p>
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
                            {/* {data.map((ele) => {
                                <th className='p-4 border border-slate-300 bg-cyan-600'>First Name</th>
                            })} */}
                            <th className='p-4 border border-slate-300 bg-cyan-600'>Sr. No.</th>
                            <th className='p-4 border border-slate-300 bg-cyan-600'>First Name</th>
                            <th className='p-4 border border-slate-300 bg-cyan-600'>Last Name</th>
                            <th className='p-4 border border-slate-300 bg-cyan-600'>Email</th>
                            <th className='p-4 border border-slate-300 bg-cyan-600'>Gender</th>
                            <th className='p-4 border border-slate-300 bg-cyan-600'>Income</th>
                            <th className='p-4 border border-slate-300 bg-cyan-600'>City</th>
                            <th className='p-4 border border-slate-300 bg-cyan-600'>Car</th>
                            <th className='p-4 border border-slate-300 bg-cyan-600'>Quote</th>
                            <th className='p-4 border border-slate-300 bg-cyan-600'>Phone Price</th>

                            {/* <th>email</th>
                            <th>gender</th>
                            <th>income</th>
                            <th>city</th>
                            <th>car</th>
                            <th>quote</th>
                            <th>Phone Price</th> */}
                        </tr>
                    </thead>
                    {data.length > 0 && (
                        <tbody className='something'>
                            {data.map(user => (
                                <tr className='text-center'>
                                    <td className='p-4 border border-slate-300' >{user.id}</td>
                                    <td className='p-4 border border-slate-300'>{user.first_name}</td>
                                    <td className='p-4 border border-slate-300'>{user.last_name}</td>
                                    <td className='p-4 border border-slate-300'>{user.email}</td>
                                    <td className='p-4 border border-slate-300'>{user.gender}</td>
                                    <td className='p-4 border border-slate-300'>{user.income}</td>
                                    <td className='p-4 border border-slate-300'>{user.city}</td>
                                    <td className='p-4 border border-slate-300'>{user.car}</td>
                                    <td className='p-4 border border-slate-300'>{user.quote}</td>
                                    <td className='p-4 border border-slate-300'>$ {user.phone_price}</td>
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

export default Cond1