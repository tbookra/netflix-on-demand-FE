import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { Registration, Login } from "./screens/auth";

const App = () => {
  const [login, setLogin] = useState(true);

  const indexReq = async () => {
    try {
      const data = axios.get("http://localhost:5000");
      console.log((await data).config);
    } catch (err) {
      console.log("catch");
      console.log(err);
    }
  };
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
