import React from 'react';
import styled from 'styled-components';


const Form_popup = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  right: 15px;
  border: 3px solid #f1f1f1;
  z-index: 10;
`;

const Form_container = styled.div`
  max-width: 300px;
  padding: 10px;
  background-color: white;
`;

function FormLogin(){
    return(
        <Form_popup>
            <Form_container>
                iiiiiiijklj
            </Form_container>
        </Form_popup>
);

export default FormLogin;