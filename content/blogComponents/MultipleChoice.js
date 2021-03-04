import React, { useState } from "react"
import styled from "styled-components"
import Confetti from "react-dom-confetti"

const QuizContainer = styled.div`
  background: var(--quizBg);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin: 1rem 0;
`

const Option = styled.label`
  display: inline-block;
  width: 100%;
  cursor: pointer;
  color: var(--textNormal);
  border-top: 1px solid #bbb;
  padding: 1.5rem 2.5rem 1.5rem 2.5rem;
  &:hover {
    background: var(--bg);
  }
  transition: all 0.5s;
`

export default function MultipleChoice({
  quizNum,
  question,
  options,
  correctAnswer,
  name,
}) {
  const [answer, setAnswer] = useState(false)
  const [show, setShow] = useState(false)
  const [checked, setChecked] = useState(false)

  const handleChange = selectedOption => {
    setShow(true)
    console.log(selectedOption)
    if (selectedOption.target.value === String(correctAnswer)) {
      setAnswer(true)
    } else {
      setAnswer(false)
    }
  }

  const handleClick = () => {
    setChecked(true)
  }

  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  }
  return (
    <QuizContainer>
      <p
        style={{
          marginTop: `5px`,
          marginBottom: `0`,
          padding: `0 1rem `,
        }}
      >
        Quiz {quizNum}
      </p>
      <p
        style={{
          marginTop: `0`,
          marginBottom: `0`,
          padding: `1rem`,
        }}
      >
        {question}
      </p>
      <Confetti active={answer} config={config} />
      {options.map(option => (
        <Option>
          <input
            style={{ marginRight: `1rem` }}
            type="radio"
            id={option}
            value={option}
            onChange={e => handleChange(e)}
            name={name}
          />
          {option}
        </Option>
      ))}
      {show && (
        <p
          style={{
            marginTop: `0`,
            marginBottom: `0`,
            padding: `1rem`,
            borderBottom: `1px solid #bbb`,
          }}
        >
          {answer ? "Correct!" : "Incorrect. Try again."}
        </p>
      )}
    </QuizContainer>
  )
}
