import addToMailChimp from "gatsby-plugin-mailchimp"
import React, { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  margin: 2rem auto;
  padding: 1rem;
  background: var(--newsletterBg);
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 600px;
`

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--textLink);
  border-radius: 5px;
  margin-right: 1rem;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`

const Heading = styled.h2``

const Paragraph = styled.p`
  font-size: 1rem;
`

const StyledButton = styled.button`
  @media (max-width: 576px) {
    margin: 1rem auto;
  }
`

export default function MailChimpForm() {
  const [state, setState] = useState({ email: "", result: null })

  const handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailChimp(state.email)
    setState({ result: result })
    setState({ message: result.msg })
  }

  const handleChange = e => {
    setState({ email: e.target.value })
  }

  return (
    <Container>
      <Wrapper>
        <Heading>Subscribe to my newsletter</Heading>
        <Paragraph>
          If you like my blog, you can get updates about new posts delivered to
          your inbox. No spam. Unsubscribe any time.
        </Paragraph>
        <div dangerouslySetInnerHTML={{ __html: state.message }} />

        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            placeholder="Enter email address.."
            type="email"
            name="email"
            autoComplete="email"
            label="email"
            onChange={handleChange}
          />
          <StyledButton className="pushable" type="submit" label="Submit">
            <span className="front">Subscribe</span>
          </StyledButton>
        </StyledForm>
      </Wrapper>
    </Container>
  )
}
