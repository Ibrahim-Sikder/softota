/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import React, { createContext } from "react";
import { useState } from "react";

export const DataContext = createContext({});

const DataProvider = ({ children }) => {
  // const [hajjOrUmrah, setHajjOrUmrah] = useState("")
  const [getPackageData, setGetPackageData] = useState([]);
  const [error, setError] = useState("");
 
  const [isLoading, setIsLoading] = useState(false);

 
  const handleGetHajjData = (e) => {
     console.log(e)
    const data = {
      hajj_package: e,
    };
    setIsLoading(true);
    axios
      .post("http://localhost:5000/api/v1/hajj", data)
      .then(function (response) {
        setGetPackageData(response.data.packages);
        console.log(response.data.packages);
      })
      .catch(function (error) {
        setError(error?.response?.data?.message);
        // console.log(error);
        // console.log(error.response.data.message);
      })
      .finally(function () {
        setIsLoading(false);
      });
   
  };
  const handleGetUmrahData = (e) => {
    console.log(e);
   
    const data = {
      latest_umrah_package: e,
    };
    setIsLoading(true);
    axios
      .post("http://localhost:5000/api/v1/umrag/get/packages", data)
      .then(function (response) {
        setGetPackageData(response.data.packages);
        console.log(response.data.packages);
      })
      .catch(function (error) {
        setError(error?.response?.data?.message);
        // console.log(error);
        // console.log(error.response.data.message);
      })
      .finally(function () {
        setIsLoading(false);
      });
  
   
  };

  const contextValue = {
    handleGetHajjData,
    getPackageData,
    error,
    handleGetUmrahData
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
