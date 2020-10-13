import React from "react";
// import "./main.module.css";
import styled from 'styled-components';

const Container = styled.div`
    /* justify-content: space-between; */
    padding: 0;
    display: flex;
    margin: 2rem;
`

const Image_event = styled.div`
  display: flex;
  padding: 20em;
  border-radius: 5%;
  margin-right: 1rem;
  background-color: yellowgreen;
`

const Content_event_container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: antiquewhite;
  border-radius: 5%;
  padding-right: 30vw;
  white-space: normal;
`;

function InformationEvent(children) {
    return (
      <Container>
        <Image_event/>
        <Content_event_container>
          <div className="name-content">
            <h1>Name Event</h1>
            <div className="describes">
              <h1>Describes</h1>
            </div>
    <input type="text"/>
    <p>
              .............................................................................................................
            </p>
            <p>
              .............................................................................................................
            </p>
            <div className="Date">
              <h1>Date</h1>
              <h3>08/10/2563</h3>
            </div>
          </div>
        </Content_event_container>
      </Container>
    );
}
export default InformationEvent;