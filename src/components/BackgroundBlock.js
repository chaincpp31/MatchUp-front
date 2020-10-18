import React from 'react'
import styled from 'styled-components'

const BackgroundImage = styled.div`
  height: 100vh;
  width: auto;
  background-image: url(${prop => prop.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  position: relative;
`
const BackgroundOverlay = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 100%);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function BackgroundBlock({ src, height = 100, children }) {
  return (
    <BackgroundImage src={src} height={height}>
      <BackgroundOverlay>{children}</BackgroundOverlay>
    </BackgroundImage>
  )
}

export default BackgroundBlock
