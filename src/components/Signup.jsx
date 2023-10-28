import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const SignupContainer = styled.div`
  padding: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  width: 400px;
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
background: white;
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
border-radius: 2rem;
width: 100%;
height: 3rem;
padding: 1rem;
margin-bottom: 3%;
border: none;
outline: none;
color: #3c354e;
font-size: 1rem;
font-weight: bold;
&:focus {
  display: inline-block;
  box-shadow: 0 0 0 0.2rem #b9abe0;
  backdrop-filter: blur(12rem);
  border-radius: 2rem;
}
&::placeholder {
  color: #b9abe099;
  font-weight: 100;
  font-size: 1rem;
}
`;

const Button = styled.button`
  background: blue;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 100%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;

const Signup = () => {

     let navigate = useNavigate();

     const signIn = () => {
          navigate('/login');
     }

     const loggedIn = () => {
          navigate('/')
     }


  return (
    <SignupContainer>
      <FormContainer>
        <Title>Sign Up</Title>
        <Form>
          <Input type="text" placeholder="Username" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button className='btnSign' type="submit" onClick={signIn}>Sign Up</Button>
          <Button className='btnLog' type="submit" onClick={loggedIn}>Login</Button>
        </Form>
      </FormContainer>
    </SignupContainer>
  );
};

export default Signup;
