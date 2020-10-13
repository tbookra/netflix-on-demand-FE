import React, { useState, useEffect } from "react";
import "./App.css";
import { httpRequest } from "./api";
import { Registration, Login } from "./screens/auth";
import axios from 'axios'
const App = () => {
  const [login, setLogin] = useState(true);

  const indexReq = async () => {
    try {
      const data = await axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=0ec7db52277d0e30290bb2883e939895');
      // const data = await httpRequest.get("/");
      console.log(data);
    } catch (err) {
      console.log("catch");
      console.log(err);
    }
   
  };

  useEffect(()=>{
    const fetchData = async () => {
       const data = await axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=0ec7db52277d0e30290bb2883e939895');
      // const data = await httpRequest.get("/");
      console.log(data);
    }
    fetchData()
  })

  return (
    <div className="App">
      {login ? <Login /> : <Registration />}

      <button onClick={() => setLogin(!login)}>Switch</button>
      <div style={{ margin: 20 }}></div>
      <button onClick={indexReq}>Index</button>
    </div>
  );
};

export default App;
