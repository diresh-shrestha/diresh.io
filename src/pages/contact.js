import React, { useState } from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Container from "../components/Container"
import styled from "styled-components"
import Button from "../components/Button"
import axios from "axios"
import ReCAPTCHA from "react-google-recaptcha"

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

  const [disabled, setDisabled] = useState(false)

  const handleChange = () => {
    setDisabled(true)
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
      <SEO title="Contact" pathname="contact/" />
      <Content>
        <h1 data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
          LET'S GET IN TOUCH!
        </h1>
        <form onSubmit={handleOnSubmit}>
          <InputWrapper>
            <StyledInput
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              type="text"
              name="name"
              placeholder="*Full Name"
              required
            />
          </InputWrapper>
          <InputWrapper>
            <StyledInput
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              type="email"
              name="email"
              placeholder="*Email"
              required
            />
          </InputWrapper>
          <InputWrapper>
            <StyledInput
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              type="text"
              name="subject"
              placeholder="*Subject"
              required
            />
          </InputWrapper>
          <InputWrapper>
            <StyledInput
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              type="tel"
              name="telephone"
              placeholder="Phone Number"
            />
          </InputWrapper>
          <InputWrapper>
            <TextArea
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              name="message"
              rows="5"
              required
              placeholder="*Write a message.."
            />
          </InputWrapper>
          <InputWrapper>
            <ReCAPTCHA
              sitekey="6Lf7KgAaAAAAAHob7aBBAPI8Y2RZD6Bq5-8eCZLH"
              onChange={handleChange}
            />
          </InputWrapper>

          <InputWrapper
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
          >
            {serverState.status && (
              <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
              </p>
            )}
          </InputWrapper>
          <InputWrapper
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
          >
            <Button type="submit" text="SEND" disabled={disabled} />
          </InputWrapper>
        </form>
      </Content>
    </Layout>
  )
}

export default ContactPage
