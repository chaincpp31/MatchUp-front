import React, { useState, useEffect } from 'react'
import backgroundImage from '../assets/BackgroundMatchup.jpg'
import BackgroundBlock from '../components/BackgroundBlock'
import styled from 'styled-components'
import ListLoL from '../components/ListLoL/index'
import ListDota from '../components/ListDota/index'
import ListPubg from '../components/ListPubg/index'
import { Link } from 'react-router-dom'
import { getData } from '../services/fetchData'
import FetchData from '../services/fetchData'
import Image from '../assets/LogoMatchUp.png'
import lol from '../assets/LOL.jpg'
import pubg from '../assets/pubg.jpg'
import dota from '../assets/Data.jpg'

const Content = styled.div`
  display: flex;
  padding: 30px 5px 30px 30px;
  background-color: #000;
  color: #fff;
  outline: none;
  border: 1rem;
  border-width: 80%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const ListContainer = styled.div`
  width: 12vw;
  height: 30vh;
  margin-right: 50px;
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  position: relative;
  justify-content: center;
  align-items: center;
`
const ListImg = styled.div`
  height: 75%;
  width: 225px;
  padding: 40px px 0px 10px;
  justify-content: center;

  background-color: #1234;
  border-radius: 10px;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  position: relative;
  right: 10px;
  bottom: 10px;
`

const ListDetails = styled.div`
  width: 100%;
  height: 25%;
  a {
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
  &:hover {
    background-color: #dc2100;
  }
`
const RowItem = styled.div`
  display: flex;
`
const Title = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 50px 0;
`

function Home(item) {
  return (
    <div>
      <BackgroundBlock src={backgroundImage} height="100" />
      <Content id="content">
       <ListLoL />
       <ListDota />
       <ListPubg />
       
      </Content>
    </div>
  )
}
export default Home
