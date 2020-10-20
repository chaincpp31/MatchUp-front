import React, { useState } from "react";
import styled from "styled-components";

const BaseInput = styled.input`
  outline: none;
  border: none;
  padding: 0.5rem 0;
  font-size: 1rem;
`;

const InputContainer = styled.form`
  display: flex;
  padding: 0 1rem;
  margin-bottom: 1rem;
`;

const StyledInput = styled(BaseInput)`
  border-bottom: 5px solid #ccc;
  font-size: 30px;
  background-color: transparent;
  color: white;
  width: 100%;
  transition: border-bottom 0.3s;

  &:focus {
    border-bottom: 1px solid #aaa;
  }

  &::placeholder {
    color: #aaa;
  }
`;

function Input({ onSubmit = () => null },{children}) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
    setValue("");
  };

  const handleInputChange = (event) => setValue(event.target.value);

  return (
    <InputContainer onSubmit={handleSubmit}>
      <StyledInput
        value={value} 
        onChange={handleInputChange}
        placeholder={children}
      />
    </InputContainer>
  );
}

export default Input;
