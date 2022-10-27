import React, { useEffect, useState, useContext } from 'react';
import intelligence_events from './intelligence_events.json';
import { GlobalContext } from '../Context/GlobalContext';

const Events = () => {
  const { handleEvents, filter, inputFilter } = useContext(GlobalContext);

  const events = intelligence_events.map((event, i) => (
    <li className="bg-[#f5e2db] hover:bg-opacity-60">
      <div className="p-2 w-full border border-purple-900 flex items-center">
        <div className="flex items-center justify-center ">
          <div className="text-purple-900">Add</div>
        </div>
        <div
          onClick={(e) => handleEvents(e)}
          className="ml-8 text-purple-900 w-[300px] hover:cursor-pointer "
        >
          {event}
        </div>
      </div>
    </li>
  ));

  return (
    <>
      <div className="flex flex-col bg-[#f5e2db] ">
        <div className="border border-purple-900 py-4 flex justify-between px-2   ">
          <div className="flex gap-x-3 ">
            <span className="text-sm text-purple-900 ">SELECT</span>
            <span className="text-sm text-purple-900 ">
              EVENTS {intelligence_events.value}{' '}
            </span>
          </div>
          <input
            className="w-3/6 text-sm pl-2 "
            placeholder="Search event.. "
            onChange={(e) => inputFilter(e)}
            value={filter}
          />
        </div>
      </div>
      <div className=" flex-1 overflow-y-scroll overflow-x-hidden  ">
        <ul>{events}</ul>
      </div>
    </>
  );
};

export default Events;
