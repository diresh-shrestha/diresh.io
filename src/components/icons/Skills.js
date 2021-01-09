import React, { useState } from "react"
import styled from "styled-components"
import Html from "./Html"
import Css from "./Css"
import ReactIcon from "./ReactIcon"
import Javascript from "./JavaScript"
import Java from "./Java"
import Python from "./Python"
import Graphql from "./Graphql"
import Node from "./Node"
import Gatsby from "./Gatsby"
import Mongodb from "./Mongodb"

const SkillWrapper = styled.div`
  display: flex;
  margin: 2.5rem 0;
  overflow: hidden;
  position: relative;
  &:after {
    content: "";
    background: linear-gradient(
      to right,
      #fff 0,
      rgba(255, 255, 255, 0.1) 10%,
      rgba(255, 255, 255, 0.1) 90%,
      #fff 100%
    );
    poistion: absolute;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  @media (max-width: 768px) {
    overflow: scroll;
  }
`

const StyledUl = styled.ul`
  @keyframes slide {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-500px, 0, 0);
    }
  }
  display: flex;
  list-style: none;
  margin: 0px;
  animation: 30s linear 1s infinite alternate slide;
`

const SkillList = styled.li`
  display: inline-flex;
  margin: 1rem 1.5rem;
`

export default function Skills() {
  const [enter, setEnter] = useState(false)
  const handleHoverIn = () => {
    setEnter(true)
  }
  const handleHoverOut = () => {
    setEnter(false)
  }
  return (
    <SkillWrapper onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
      <StyledUl style={{ animationPlayState: enter && "paused" }}>
        <SkillList>
          <Html />
        </SkillList>
        <SkillList>
          <Css />
        </SkillList>
        <SkillList>
          <Javascript />
        </SkillList>
        <SkillList>
          <ReactIcon />
        </SkillList>
        <SkillList>
          <Graphql />
        </SkillList>

        <SkillList>
          <Node />
        </SkillList>
        <SkillList>
          <Gatsby />
        </SkillList>
        <SkillList>
          <Mongodb />
        </SkillList>
      </StyledUl>
      <StyledUl style={{ animationPlayState: enter && "paused" }}>
        <SkillList>
          <Html />
        </SkillList>
        <SkillList>
          <Css />
        </SkillList>
        <SkillList>
          <Javascript />
        </SkillList>
        <SkillList>
          <ReactIcon />
        </SkillList>
        <SkillList>
          <Graphql />
        </SkillList>

        <SkillList>
          <Node />
        </SkillList>
        <SkillList>
          <Gatsby />
        </SkillList>
      </StyledUl>
      <StyledUl style={{ animationPlayState: enter && "paused" }}>
        <SkillList>
          <Html />
        </SkillList>
        <SkillList>
          <Css />
        </SkillList>
        <SkillList>
          <Javascript />
        </SkillList>
        <SkillList>
          <ReactIcon />
        </SkillList>
        <SkillList>
          <Graphql />
        </SkillList>

        <SkillList>
          <Node />
        </SkillList>
        <SkillList>
          <Gatsby />
        </SkillList>
      </StyledUl>
    </SkillWrapper>
  )
}
