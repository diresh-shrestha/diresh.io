import React, { useState } from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Container from "../components/Container"
import styled from "styled-components"
import Button from "../components/Button"
import axios from "axios"

const Content = styled(Container)`
  display: flex;
  flex-direction: column;
`

const InputWrapper = styled.div`
  padding: 1rem;
  margin: 1rem 1rem;
`

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid var(--textLink);
  border-radius: 5px;
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid var(--textLink);
  border-radius: 10px;
`

const ContactPage = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/af7663e4-8485-4f29-a9c7-32e6ca04bcb5",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  return (
    <Layout>
      <SEO title="Contact" />
      <Content>
        <form onSubmit={handleOnSubmit}>
          <InputWrapper>
            <StyledInput
              type="text"
              name="name"
              placeholder="*Full Name"
              required
            />
          </InputWrapper>
          <InputWrapper>
            <StyledInput
              type="email"
              name="email"
              placeholder="*Email"
              required
            />
          </InputWrapper>
          <InputWrapper>
            <StyledInput
              type="text"
              name="subject"
              placeholder="*Subject"
              required
            />
          </InputWrapper>
          <InputWrapper>
            <StyledInput
              type="tel"
              name="telephone"
              placeholder="Phone Number"
            />
          </InputWrapper>
          <InputWrapper>
            <TextArea
              name="message"
              rows="5"
              required
              placeholder="Write a message.."
            />
          </InputWrapper>
          <InputWrapper>
            <Button
              type="submit"
              text="SEND"
              disabled={serverState.submitting}
            />
          </InputWrapper>
          {serverState.status && (
            <p className={!serverState.status.ok ? "errorMsg" : ""}>
              {serverState.status.msg}
            </p>
          )}
        </form>
      </Content>
    </Layout>
  )
}

export default ContactPage
