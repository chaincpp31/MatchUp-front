import React from 'react'
import styled from 'styled-components'
import dota from '../../assets/Data.jpg'

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
function ListLoL(){
  return(
    <div>
      <Title>DOTA</Title>
        <RowItem id="Dota">
          <ListContainer>
            <ListImg src={dota} />
            <ListDetails>
              <Top>
                <a>Name</a>
                <a>Total</a>
              </Top>
              <Bottom>
                <a>Date</a>
                <Button>Join</Button>
              </Bottom>
            </ListDetails>
          </ListContainer>
          <ListContainer>
            <ListImg src={dota} />
            <ListDetails>
              <Top>
                <a>Name</a>
                <a>Total</a>
              </Top>
              <Bottom>
                <a>Date</a>
                <Button>Join</Button>
              </Bottom>
            </ListDetails>
          </ListContainer>
          <ListContainer>
            <ListImg src={dota} />
            <ListDetails>
              <Top>
                <a>Name</a>
                <a>Total</a>
              </Top>
              <Bottom>
                <a>Date</a>
                <Button>Join</Button>
              </Bottom>
            </ListDetails>
          </ListContainer>
          <ListContainer>
            <ListImg src={dota} />
            <ListDetails>
              <Top>
                <a>Name</a>
                <a>Total</a>
              </Top>
              <Bottom>
                <a>Date</a>
                <Button>Join</Button>
              </Bottom>
            </ListDetails>
          </ListContainer>
        </RowItem>
    </div>
  )
}
export default ListLoL