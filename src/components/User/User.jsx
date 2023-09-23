// import React from 'react'
import { useParams } from "react-router-dom";

const User = () => {
    const {userId} = useParams();
  return (
    <div className="flex justify-center p-1" >
      <div className="p-2 w-[50%] rounded-lg  " >
        <img
          src="https://media.istockphoto.com/id/1408304047/photo/cheerful-female-presenter-interacting-with-the-audience.webp?b=1&s=612x612&w=0&k=20&c=Uth2dp6qr0ZSwelNVWuOdqmBm_CJcN-pqQa1z9PHEwo="
          alt="USer image "
        />
      </div>
      <div className="pt-40" >
        <h1 className="text-2xl text-slate-700 " >Search By User: <span className="text-orange-700" > {userId}</span>  </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quidem?</p>
      <br />
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, cumque!</p>
     <p>Lorem, ipsum dolor sit amet consectetur adipis!</p>
     <p>Lorem, ipsum dolor dipisicinmque!</p>  
       </div>
     
    </div>
  );
};

export default User;
