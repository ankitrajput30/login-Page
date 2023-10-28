import React from "react";
import "../App.css";
import { useNavigate } from 'react-router-dom';

export const Login = () => {

     let navigate = useNavigate();

     const logOut = () => {
          navigate('/');
     }

  return (
    <>
      <div>
        <div className="login-header">
          <h1>Successful Authenticated💀</h1>
        </div>
        <h3 className="part2">Enjoy your day!</h3>
      </div>
      <button className="myButton" onClick={logOut}>Logout</button>
    </>
  );
};
