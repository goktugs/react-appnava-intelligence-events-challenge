import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalContext';

const Results = () => {
  const { handleEvents, filter, inputFilter, radioVal, setRadioVal } =
    useContext(GlobalContext);

  return (
    <div className="bg-[#f5e2db] flex flex-col flex-1 ">
      <div className="text-3xl pl-2 pt-2 bg-[#f5e2db] font-semibold text-[#4b0082] ">
        <h1>Table Results</h1>
      </div>
      <div className="flex-1 flex items-center justify-center ">
        <table className="min-w-full  border-2 border-collapse border-spacing-5 h-5/6 text-center  ">
          <tbody className="border-2 border-spacing-5 ">
            <tr className="border-2  border-purple-800 h-[10%] ">
              <th className="border-2 border-purple-800"></th>
              <th className="border-2 border-purple-800">Retention</th>
              <th className="border-2 border-purple-800">Churn</th>
            </tr>
            <tr className="border-2 border-purple-800 h-1/6 ">
              <td className="border-2 border-purple-800">User Count</td>
              <td className="border-2 border-purple-800">4</td>
              <td className="border-2 border-purple-800">41</td>
            </tr>
            <tr className="border-2 border-purple-800 h-1/6 ">
              <td className="border-2 border-purple-800">Events</td>
              <td className="flex items-center justify-between">
                {radioVal.map((event) => (
                  <div>{event}</div>
                ))}
              </td>
              <td className="border-2 border-purple-800">{radioVal}</td>
            </tr>
            <tr className="border-2 border-purple-800">
              <td className="border-2 border-purple-800">Shining Star</td>
              <td className="border-2 border-purple-800">
                Earth, Wind, and Fire
              </td>
              <td className="border-2 border-purple-800">1975</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Results;
