import { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <>
      <h1 className="text-center text-white bg-slate-600 text-3xl">
       
        SONU Github Folowers :
        <span className="text-orange-600"> [ {data.followers} ]</span>
      </h1>
    </>
  );
};

export default Github;
