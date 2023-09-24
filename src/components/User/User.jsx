// import React from 'react'
import { useParams } from "react-router-dom";

const User = () => {
    const {userId} = useParams();
  return (
    <div className="flex justify-center p-1" >
      <div className="p-2 w-[50%] rounded-lg  " >
        <img
        className="w-1/1 rounded-2xl "
          src="https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="USer image "
        />
      </div>
      <div className="pt-40" >
        <h1 className="text-2xl text-orange-700 " >Search on url : <span className="text-orange-700" > {userId}</span>  </h1>
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
