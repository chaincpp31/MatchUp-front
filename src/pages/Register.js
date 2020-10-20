import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0;
  display: flex;
  margin: 2rem;
`;
const InputForm = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: antiquewhite;
  border-radius: 5%;
  padding-right: 30vw;
  white-space: normal;
`;

function Register() {
    return(
        <>
        <Container>
        <InputForm/>
        </Container>
        </>
    )
};

export default Register;