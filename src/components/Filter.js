import React, { useState } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalContext';

const Filter = () => {
  const { getRadioVal } = useContext(GlobalContext);

  return (
    <div className="bg-[#f5e2db] flex flex-col  mb-2 shadow-2xl hover:shadow-red-900/50 ">
      <div className="text-3xl flex-1 pl-2 flex items-center font-semibold mb-5 text-[#4b0082]">
        <h1>Table Filter</h1>
      </div>
      <div className="text-3xl flex-1 flex flex-col my-5 ">
        <div className="flex-1 flex items-center ml-3 text-[#4b0082]">
          <span className="text-xl  ">Time Interval</span>
        </div>
      </div>
      <div className="flex justify-around items-end flex-2 py-2   ">
        <div className="flex items-center text-[#4b0082]">
          <input
            id="default-Min"
            type="checkbox"
            value="min"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-[#4b0082] focus:ring-[#4b0082] dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={(e) => getRadioVal(e)}
          />
          <label
            for="default-Min"
            className="ml-2 text-sm font-medium dark:text-gray-300"
          >
            Min
          </label>
        </div>
        <div className="flex items-center text-[#4b0082]">
          <input
            id="default-Q1"
            type="checkbox"
            value="q1"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-[#4b0082]  focus:ring-[#4b0082] dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={(e) => getRadioVal(e)}
          />
          <label
            for="default-Q1"
            className="ml-2 text-sm font-medium dark:text-gray-300"
          >
            Q1
          </label>
        </div>
        <div className="flex items-center text-[#4b0082] ">
          <input
            id="default-Mean"
            type="checkbox"
            value="mean"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-[#4b0082]  focus:ring-[#4b0082] dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={(e) => getRadioVal(e)}
          />
          <label
            for="default-Mean"
            className="ml-2 text-sm font-medium dark:text-gray-300"
          >
            Mean
          </label>
        </div>
        <div className="flex items-center text-[#4b0082] ">
          <input
            id="default-Q3"
            type="checkbox"
            value="q3"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-[#4b0082] focus:ring-[#4b0082] dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={(e) => getRadioVal(e)}
          />
          <label
            for="default-Q3"
            className="ml-2 text-sm font-medium  dark:text-gray-300"
          >
            Q3
          </label>
        </div>
        <div className="flex items-center text-[#4b0082] ">
          <input
            id="default-Max"
            type="checkbox"
            value="max"
            className="w-4 h-4 text-red-900 bg-gray-100 rounded border-[#4b0082]  focus:ring-[#4b0082] dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={(e) => getRadioVal(e)}
          />
          <label
            for="default-Max"
            className="ml-2 text-sm font-medium  dark:text-gray-300"
          >
            Max
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
