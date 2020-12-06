import React from "react"
import styled from "styled-components"
import Html from "./Html"
import Css from "./Css"
import ReactIcon from "./ReactIcon"
import Javascript from "./JavaScript"
import Java from "./Java"
import Python from "./Python"

const SkillWrapper = styled.div`
  display: flex;
  margin: 2.5rem 0px;
  overflow: hidden;
  position: relative;
  justify-content: center;
`

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  margin: 0px;
  animation: 60s linear 0s infinite normal none running animation-1qdclt7;
`

const SkillList = styled.li`
  display: inline-flex;
  margin: 0px 1rem;
`

export default function Skills() {
  return (
    <SkillWrapper>
      <StyledUl>
        <SkillList>
          <Html />
        </SkillList>
        <SkillList>
          <Css />
        </SkillList>

        <SkillList>
          <ReactIcon />
        </SkillList>
        <SkillList>
          <Javascript />
        </SkillList>
        <SkillList>
          <Python />
        </SkillList>
        <SkillList>
          <Java />
        </SkillList>
      </StyledUl>
    </SkillWrapper>
  )
}
