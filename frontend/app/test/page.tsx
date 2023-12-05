"use client"
import React, { useState , useEffect} from 'react';
import axios from 'axios';


export default function Test() {
    const [msg, setMsg] = useState("")
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/hello')
        .then((res) => {
            console.log(res.data)
            setMsg(res.data.message)
        })
        .catch((error) => {
            console.error("Error fetching data: ", error)
            setError(error)
        })
    }, [])

     return(
         <div>
            <h1>Test page</h1>
            <p>{msg}</p>
        </div>
     )
}
