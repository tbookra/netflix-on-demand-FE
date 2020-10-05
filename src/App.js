import React, { useState } from "react";
import "./App.css";
import { httpRequest } from "./api";
import { Registration, Login } from "./screens/auth";

const App = () => {
  const [login, setLogin] = useState(true);

  const indexReq = async () => {
    try {
      const data = httpRequest.get("/");
      console.log(data);
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
