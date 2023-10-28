import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [credentials, setCredentials] = useState({
    email: "admin@gmail.com",
    password: "12345",
  });

  let navigate = useNavigate();

  const logIn = () => {
    if (
      credentials.email === "admin@gmail.com" &&
      credentials.password === "12345"
    ) {

      navigate("/login"); // Redirect to the logged-in page
    } else {
      alert("Bad credentials");
    }
  };

  const signUp = () => {
    navigate("/signup");
  };

  const forgot = () => {
    alert("😕");
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <MainContainer>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <Input
          class="input1"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          required
          onChange={onChange}
        />
        <Input
          type="password"
          placeholder="Password"
          required
          value={credentials.password}
          onChange={onChange}
        />
      </InputContainer>
      <ButtonContainer>
        <Button onClick={logIn} content="Login" />
      </ButtonContainer>
      <LoginWith onClick={signUp}>OR New SignUp</LoginWith>
      <HorizontalRule />
      <ForgotPassword onClick={forgot}>Forgot Password ?</ForgotPassword>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 50vh;
  width: 40vw;
  background: grey;
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 90vw;
    height: 60vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 90vw;
    height: 60vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 60vh;
  }

  @media only screen and (min-width: 768px) {
    width: 42vw;
    height: 58vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 30vw;
    height: 60vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 60vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 80%;
  margin-between: 5%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

export default Home;
