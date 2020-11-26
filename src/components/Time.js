import React, { useState } from "react"
import styled from "styled-components"

const TimeWrapper = styled.div`
  font-size: 1rem;
  text-align: center;
  margin-right: 1rem;
  color: var(--textNormal);
`

export default function Time() {
  let newDate = new Date().toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  })
  const [time, setTime] = useState(newDate)

  const updateTime = () => {
    let newDate = new Date().toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    })
    setTime(newDate)
  }

  setInterval(updateTime)

  return (
    <TimeWrapper>
      <span>{time}</span>
    </TimeWrapper>
  )
}
