import React from "react";
import styled from "styled-components";
import Input from "../components/Input";

const Container = styled.div`
  padding: 15vh 0vw 0vh 0vw;
  width: 100vw;
  height: 70vh;
  margin: 0;
  /* display: inline-block; */
  /* margin: 0; */
  /* padding: 0; */
  background-color: black;
`;
const InputForm = styled.div`
  margin: auto; 
  outline: 60rem;
  display: block;
  /* width: 50%;  */
  /* padding: 3%; */
  /* background-color: antiquewhite; */
  border-radius: 5%;
  width: 70vw; 
  /* height: 40vh;  */
  color: #ffff;
  outline-width: 0 auto;
`;

const H1 = styled.div`
  margin:  0 auto 5rem auto;
  font-size: 40px;
  text-align:center;
  font-weight: bolder;
  /* display: block; */
`;

const H2 = styled.div`
margin: 2rem 0 2rem 1rem;
font-weight: bolder;
font-size: 25px;
`

const Tab = styled.div`
/* display: none; */
`

const input = styled.div`
`

function Register() {
    return (
      <>
        <Container>
          <InputForm>
                <H1>Sign Up</H1>
                <H2>Name</H2>
                <Input placeholder="AKA" />
                <H2>First Name</H2>
                <Input />
                <H2>Last Name</H2>
                <Input/>
          </InputForm>
        </Container>
      </>
    );
};

export default Register;