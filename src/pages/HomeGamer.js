import React, { useState, useEffect } from 'react'
import backgroundImage from '../assets/BackgroundMatchup.jpg'
import BackgroundBlock from '../components/BackgroundBlock'
import styled from 'styled-components'

// import FetchData from '../services/fetchData'
// import { Link } from 'react-router-dom'
// import { getData } from '../services/fetchData'
import Image from '../assets/LogoMatchUp.png'

const Content = styled.div`
  display: flex;
  padding: 30px 5px 30px 30px;
  background-color: #000;
  color: #fff;
  outline: none;
  border: 1rem;
  border-width: 80%;
  justify-content:center;
`

const ListContainer = styled.div`
  width:12vw;
  height:30vh;
  margin-right:50px;
  background-color: #fff;
  padding: 2rem;
  border-radius:10px;
  position:relative;
  justify-content: center;
  align-items: center;
`
const ListImg = styled.div`
  height:75% ;
  width: 225px;
  padding:40px px 0px 10px;
  justify-content:center;

  background-color: #1234;
  border-radius:10px;
  background-image: url(${Image});
  background-position: center;
  background-size: cover;
  position:relative;
  right: 10px;
  bottom: 10px;
`

const ListDetails = styled.div`
  width: 100%;
  height: 25%;
  a{
    color: black;
  }
`

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 10px 0;
`

const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 10px 0;
`

const Button = styled.button`
  border-radius: 30px;
  border: none;
  font-size: 15px;
  padding: 5px 10px;
  background-color: red;
  color: white;
`
const RowItem = styled.div`
  
`

function HomeGamer(item) {
  return (
    <div>
      <BackgroundBlock src={backgroundImage} height="100" />
      <Content id="content">
        <ListContainer>
          <ListImg src={Image}/>
          <ListDetails>
            <Top>
            <a>Name</a>
            <a>Total</a>
            </Top>
            <Bottom>
              <a>Date</a>
            
            </Bottom>
          </ListDetails>
        </ListContainer>
        <ListContainer>
          <ListImg src={Image}/>
          <ListDetails>
            <Top>
            <a>Name</a>
            <a>Total</a>
            </Top>
            <Bottom>
              <a>Date</a>
            
            </Bottom>
          </ListDetails>
        </ListContainer>
        <ListContainer>
          <ListImg src={Image}/>
          <ListDetails>
            <Top>
            <a>Name</a>
            <a>Total</a>
            </Top>
            <Bottom>
              <a>Date</a>
              
            </Bottom>
          </ListDetails>
        </ListContainer>
        <ListContainer>
          <ListImg src={Image}/>
          <ListDetails>
            <Top>
            <a>Name</a>
            <a>Total</a>
            </Top>
            <Bottom>
              <a>Date</a>
              
            </Bottom>
          </ListDetails>
        </ListContainer>
      </Content>
    </div>
  )
}
export default HomeGamer
