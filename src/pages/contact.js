import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Container from "../components/Container"
import styled from "styled-components"
import Button from "../components/Button"
import axios from "axios"
import ReCAPTCHA from "react-google-recaptcha"
import Particles from "react-tsparticles"

const Content = styled(Container)`
  display: flex;
  flex-direction: column;

  form {
    z-index: 2;
  }
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

const ContactPage = ({ data }) => {
  const image = data.file.childImageSharp.fluid
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

  const [disabled, setDisabled] = useState(true)

  const handleChange = () => {
    setDisabled(false)
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
        handleServerResponse(
          true,
          "Thanks for reaching out to me! I will get back to you soon.",
          form
        )
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  return (
    <Layout>
      <SEO
        title="Contact"
        pathname="contact/"
        description="Contact Diresh Shrestha"
        image={image}
      />
      <Particles
        style={{ position: `fixed` }}
        id="tsparticles"
        options={{
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#C0C0C0",
            },
            links: {
              color: "#C0C0C0",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <Content>
        <h1 data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease">
          LET'S GET IN TOUCH!
        </h1>
        <form onSubmit={handleOnSubmit}>
          <InputWrapper>
            <StyledInput
              data-sal="slide-up"
              data-sal-delay="100"
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
              data-sal-delay="100"
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
              data-sal-delay="100"
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
              data-sal-delay="100"
              data-sal-easing="ease"
              type="tel"
              name="telephone"
              placeholder="Phone Number"
            />
          </InputWrapper>
          <InputWrapper>
            <TextArea
              data-sal="slide-up"
              data-sal-delay="100"
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
            data-sal-delay="100"
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
            data-sal-delay="100"
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

export const data = graphql`
  query {
    file(relativePath: { eq: "sections/Footer/About.jpg" }) {
      childImageSharp {
        fluid(jpegQuality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
