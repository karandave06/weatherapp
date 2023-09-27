/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import React, { useContext, useEffect, useState, createContext } from "react";

import axios from "axios";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [weather, setweather] = useState({});

  const [values, setvalues] = useState([]);

  const [place, setPlace] = useState("tharad");

  const [newlocation, setlocation] = useState("");

  // fetch api

  const fetchWeather = async () => {
    const options = {
      method: "GET",
      url: "https://visual-crossing-weather.p.rapidapi.com/forecast",

      params: {
        aggregateHours: "24",
        location: place,
        contentType: "json",
        unitGroup: "metric",
        shortColumnNames: "0",
      },

      headers: {
        "X-RapidAPI-Key": "965c5b7036msh992c234226205d2p147371jsn8ba43ad166c3",
        // 'X-RapidAPI-Key': import.meta.env.API_KEY,
        "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      const thisData = Object.values(response.data.locations)[0];
      setlocation(thisData.address);
      setvalues(thisData.values);
      setweather(thisData.values[0]);

      //   const response = await axios.request(options);

      //   console.log(response.data, "////////");

      //   const thisData = Object.values(response.data.location)[0];

      //   setlocation(thisData.address);
      //   setvalues(thisData.values);
      //   setweather(thisData.values[0]);
    } catch (e) {
      console.error(e);

      alert("This city is not exist");
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [place]);

  useEffect(() => {
    // console.log(values);
  }, [values]);

  return (
    <StateContext.Provider value={{ weather, setPlace, values, newlocation }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
