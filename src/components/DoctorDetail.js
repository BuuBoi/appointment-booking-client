import React from "react";
import { useState } from "react";
import Available from "./Available";

export default function DoctorDetail() {
  const [isAcitve, setIsActive] = useState("available");
  return (
    <div className="">
      <div className="flex text-white py-2 items-center gap-2 justify-around ">
        <button onClick={()=> setIsActive('detail')} className={isAcitve==="detail"?"uppercase tracking-widest bg-blue-700 w-1/2  py-2 ":"uppercase tracking-widest bg-blue-50 w-1/2  py-2 text-gray-800"}>Service Detail</button>
        <button onClick={()=> setIsActive('available')} className={isAcitve==="available"?  "uppercase tracking-widest bg-blue-700 w-1/2  py-2 ":"uppercase tracking-widest bg-blue-50 w-1/2 text-gray-800 py-2"}>Available</button>
      </div>
      <div className="py-4 px-5 text-center">
        {isAcitve === "available" ? (
          <Available />
        ) : (
            <div>Service Detail Component</div>
        )}
      </div>
    </div>
  );
}
