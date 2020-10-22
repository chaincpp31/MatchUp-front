import React from 'react';
import styled from 'styled-components';
// import Input from "../components/Input";

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
  margin: 0 auto 5rem auto;
  font-size: 40px;
  text-align: center;
  font-weight: bolder;
  /* display: block; */
`;

const H2 = styled.div`
  margin: 2rem 0 2rem 1rem;
  font-weight: bolder;
  font-size: 25px;
`;

const Tab = styled.div`
  /* display: none; */
`;








const TabContainer = styled.div`
box-sizing: border-box;
`

const RegForm = styled.div`
`

const step = styled.div`
height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbbbbb;
  border: none;  
  border-radius: 50%;
  display: inline-block;
  opacity: 0.5;
`

const stepACtive = styled.div`
opacity: 1;
`

const stepFinish = styled.div`
background-color: #4caf50;
`


function Form(){
  return (
    <>
      <Container>
          <InputForm>
        <Tab>
            <H1>Sign Up</H1>
            <H2>Name</H2>
            <Input placeholder="First name..." oninput="this.className = ''" name="fname" />
            <H2>First Name</H2>
            <Input />
            <H2>Last Name</H2>
            <Input />
            </Tab>
            <Tab>
              <Tab>
                <H2>sdfsdf</H2>
              </Tab>
            </Tab>
          </InputForm>
      </Container>
    </>
  );};

var currentTab = 0;
showTab(currentTab)

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n==0){
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  fixStepIndicator(n);
}

  function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
     if (currentTab >= x.length) {
       document.getElementById("regForm").submit();
       return false;
     }
     showTab(currentTab);
}
function validateForm() {
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; 
}
function fixStepIndicator(n) {
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}

// export default showTab;