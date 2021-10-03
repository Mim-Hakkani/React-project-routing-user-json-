import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = (props) => {

    let{friendid}=useParams();
    const[details,setDetails] =useState([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendid}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[friendid])
    
    return (
        <div>
            <h1>Details About your Friends </h1>
            <div className="border border-danger p-3">
                <h2>Name : {details.name}</h2>
                <h2>Phone : {details.phone}</h2>
                <h2>Email : {details.email}</h2>
                <h2>Address_city : {details?.address?.city}</h2>
            </div>
        </div>
    );
};

export default FriendDetails;