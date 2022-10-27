import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [selected, setSelected] = useState([]);
  const [radioVal, setRadioVal] = useState([]);

  const getRadioVal = (e) => {
    const value = e.target.value;

    setRadioVal((item) =>
      item.includes(value) ? item.filter((n) => n !== value) : [value, ...item]
    );
    console.log(radioVal);
  };

  const handleEvents = (e) => {
    const chosen = e.target.innerText;

    console.log(chosen);
    console.log(selected);

    setSelected((item) =>
      item.includes(chosen)
        ? item.filter((n) => n !== chosen)
        : [chosen, ...item]
    );
  };

  return (
    <GlobalContext.Provider
      value={{
        selected,
        setSelected,
        handleEvents,
        getRadioVal,
        radioVal,
        setRadioVal,
        // filter,
        // setFilter,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
