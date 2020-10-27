import styled from 'styled-components'
export const NavContainer = styled.div`
  width: 100vw;
  position: fixed;
  z-index: 10000;
  background-color: ${props => (props.isScroll ? '#FB2904' : 'transparent')};
  color: #fff;
  transition: background-color 0.5s;
`
export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 0.3rem;
`
export const ActionContainer = styled.ul`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`
export const Action = styled.li`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  transition: background-color 0.2s;
  border-radius: 10px;
  &:hover {
    border-radius: 7px;
    background-color: ${props => (props.isScroll ? '#000' : '#fff')};
    color: #000;
  }
`
export const NavButtonContainer = styled.div`
  display: flex;
  text-align: center;
  list-style-type: none;
`

export const Logo = styled.div`
  display: flex;
  background-image: url(${props => props.src});
`
