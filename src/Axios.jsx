import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Axios = () => {
    useEffect(()=>{
              
        let api = 'https://jsonplaceholder.typicode.com/posts'
        axios.get(api).then((res)=>{
            console.log(res.data);
            


    })
},[])
  return (
    <>
    {/* <button onClick={GetData}>Click</button> */}
    </>
  )
}

export default Axios