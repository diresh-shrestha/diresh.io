import axios from "axios"
import { graphql } from "gatsby"
import "normalize.css"
import React, { useState } from "react"
import Confetti from "react-dom-confetti"
import ReCAPTCHA from "react-google-recaptcha"
import styled from "styled-components"
import Button from "../components/Button"
import Container from "../components/Container"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const Recaptcha_Site_Key = process.env.GATSBY_RECAPTCHA_SITE_KEY

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
  const image = data.file.childImageSharp.gatsbyImageData
  const [submitted, setSubmitted] = useState(false)
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
    setSubmitted(true)
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
      {/* <Particles
        style={{
          position: `fixed`,
          display: submitted ? `block` : `none`,
        }}
        id="tsparticles"
        options={{
          fpsLimit: 60,
          particles: {
            color: {
              value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"],
            },
            number: {
              value: 0,
            },
            collisions: {
              enable: false,
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
              random: false,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: true,
              },
            },
            size: {
              value: 5,
              random: {
                enable: true,
                minimumValue: 3,
              },
              animation: {
                enable: false,
                speed: 10,
                minimumValue: 0.1,
                sync: true,
              },
            },
            links: {
              enable: false,
            },
            life: {
              duration: {
                sync: true,
                value: 0.5,
              },
              count: 1,
            },
            move: {
              enable: true,
              gravity: {
                enable: false,
              },
              speed: 25,
              direction: "none",
              random: false,
              straight: false,
              outMode: "destroy",
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onHover: {
                enable: false,
                mode: "repulse",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10,
                },
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8,
              },
              repulse: {
                distance: 200,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          detectRetina: true,

          emitters: {
            direction: "none",
            life: {
              count: 0,
              duration: 0.3,
              delay: 0.1,
            },
            rate: {
              delay: 0.1,
              quantity: 50,
            },
            size: {
              width: 0,
              height: 0,
            },
          },
        }}
      />
      <Particles
        style={{
          position: `fixed`,
          display: submitted ? `none` : `block`,
        }}
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
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 200,
                duration: 2,
                opacity: 0.8,
                size: 10,
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
              value: "#808080",
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
              speed: 2,
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
      /> */}
      <Content>
        <h1>LET'S GET IN TOUCH!</h1>

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
              placeholder="*Write a message.."
            />
          </InputWrapper>

          <InputWrapper>
            <ReCAPTCHA
              sitekey="6Lf7KgAaAAAAAHob7aBBAPI8Y2RZD6Bq5-8eCZLH"
              onChange={handleChange}
            />
          </InputWrapper>

          <InputWrapper>
            {serverState.status && (
              <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
              </p>
            )}
          </InputWrapper>

          <InputWrapper>
            <Confetti active={submitted} />
            <Button type="submit" text="SEND" disabled={disabled} />
          </InputWrapper>
        </form>
      </Content>
    </Layout>
  )
}

export default ContactPage

export const data = graphql`
  {
    file(relativePath: { eq: "sections/Footer/About.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
