import React from "react";
import { Link  } from 'react-router-dom';
import { LoginForm } from "../../forms";
import { httpRequest } from "../../api";
import {  useSelector } from 'react-redux';
import { submitFormLogics } from './logics/submitFormLogics';


const Login = () => {
  // const [errorMessage, setErrorMessage] = useState("");
  // const dispatch = useDispatch();
  const errorMessage = useSelector(state => state.auth.errorMessage);
  // const history = useHistory();

  const indexReq = async () => {
    try {
      const data = await httpRequest.get("/");
      console.log('data11',data);
    } catch (err) {
      console.log("catch");
      console.log(err);
    }
  };
  const handleSubmitForm = async (values) => {
    try{
     await submitFormLogics(values);
     console.log(0)
    } catch (err) {
      console.log(err);
    }
    
    //   try {
    //   const { data } = await httpRequest.post("/auth/login", values);
    //   if (data.error) return setErrorMessage(data.error);
    //   if (data.token) {
    //     tokenHandler.setToken(data.token);
    //   const {user} = data
    //     dispatch(setLogged(user));
    //     history.push("/");
    //   }
    //   console.log(data);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm submitForm={handleSubmitForm} />
      {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>}
      
      <div style={{ margin: 20 }}></div>
      <button onClick={indexReq}>Index</button>
      <div>not a member? click <Link to="/Registration">HERE</Link> to register</div>
    </div>
  );
};

export default Login;
