import React,{useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';

import * as authTypes from "../../actions/authTypes"; 
import {setLogged} from '../../actions/authActions';
import {getToken} from '../../api/tokenHandler';



const Home = (props) => {

const dispatch = useDispatch();
const logged = useSelector(state => state.auth.logedIn)

useEffect(()=>{
const isTokenExsist = getToken() ? true : false;
console.log('token', isTokenExsist);
dispatch({type: 'SET_LOGGED', payload: isTokenExsist});
console.log('after logged', logged);

},[])
  return (
    <div>
      <h1>home</h1>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {

//     logedIn: state.auth.logedIn,
    
//   }
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     setLogged: () => dispatch({type: authTypes.SET_LOGGED}),
     
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;

