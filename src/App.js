import React, { useState } from "react";
import "./App.css";

import { Registration, Login } from "./screens/auth";

const App = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="App">
      {login ? <Login /> : <Registration />}

      <button title="switch" onClick={() => setLogin(!login)}>
        Switch
      </button>
    </div>
  );
};

export default App;
