import React from "react";

export default function RadioGroup({gender, setGender}) {
  return (
    <div className="flex w-full justify-around border border-gray-300 rounded-md p-3">
      <div className="flex items-center justify-center">
        <input
          type="radio"
          name={gender}
          id="male"
          value="Male"
          checked={gender === "Male"}
          onChange={(e) => setGender(e.target.value)}
          className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 bg-gray-200"
        ></input>
        <label
          htmlFor="male"
          className="ms-2 text-sm font-medium text-gray-900"
        >Male</label>
      </div>
      <div className="flex items-center justify-center me-4">
        <input
          type="radio"
          name={gender}
          id="female"
          value="Female"
          checked={gender === "Female"}
          onChange={(e) => setGender(e.target.value)}
          className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 bg-gray-200"
        ></input>
        <label
          htmlFor="female"
          className="ms-2 text-sm font-medium text-gray-900"
        >Female</label>
      </div>
      <div className="flex items-center justify-center me-4">
        <input
          type="radio"
          name={gender}
          id="orther"
          value="orther"
          checked={gender === "orther"}
          onChange={(e) => setGender(e.target.value)}
          className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 bg-gray-200"
        ></input>
        <label
          htmlFor="orther"
          className="ms-2 text-sm font-medium text-gray-900"
        >Orther</label>
      </div>
    </div>
  );
}
