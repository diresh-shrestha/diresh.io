import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

/**
 * Implements the typing effect
 * @param {string} data - The text you want to have the typing effect
 * @returns {<span>} Span tag with the text
 */
export default function Typer({ data, styleObj }) {
  /** These constants control the speed of the typing and deleting effect */
  const CONSTANTS = {
    DELETING_SPEED: 80,
    TYPING_SPEED: 150,
  }

  const [state, setState] = useState({
    text: "",
    message: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: CONSTANTS.TYPING_SPEED,
  })

  useEffect(() => {
    function getTypingSpeed(currentState) {
      return currentState.isDeleting
        ? CONSTANTS.TYPING_SPEED
        : CONSTANTS.DELETING_SPEED
    }
    let timer = ""
    const handleType = () => {
      setState(prevState => ({
        ...prevState,
        text: getCurrentText(prevState),
        typingSpeed: getTypingSpeed(prevState),
      }))
      timer = setTimeout(handleType, state.typingSpeed)
    }
    handleType()
    return () => clearTimeout(timer)
  }, [
    CONSTANTS.DELETING_SPEED,
    CONSTANTS.TYPING_SPEED,
    state.isDeleting,
    state.typingSpeed,
  ])

  useEffect(() => {
    if (!state.isDeleting && state.text === state.message) {
      setTimeout(() => {
        setState(prevState => ({
          ...prevState,
          isDeleting: true,
        }))
      }, 500)
    } else if (state.isDeleting && state.text === "") {
      setState(prevState => ({
        ...prevState, // prevState means currentState
        isDeleting: false,
        loopNum: prevState.loopNum + 1,
        message: getMessage(prevState, data),
      }))
    }
  }, [state.text, state.message, state.isDeleting, data])

  function getCurrentText(currentState) {
    return currentState.isDeleting
      ? currentState.message.substring(0, currentState.text.length - 1)
      : currentState.message.substring(0, currentState.text.length + 1)
  }

  function getMessage(currentState, data) {
    return data[Number(currentState.loopNum) % Number(data.length)]
  }

  return <span style={styleObj}>{state.text}</span>
}

Typer.propTypes = {
  data: PropTypes.string,
  styleObj: PropTypes.object,
}
