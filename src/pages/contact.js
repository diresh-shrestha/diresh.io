import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Container from "../components/Container"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Container>
      {/* <form
        method="post"
        action="https://getform.io/f/af7663e4-8485-4f29-a9c7-32e6ca04bcb5"
      > */}
      <form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Email
            <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Name
            <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Message
            <input type="text" name="message" />
          </label>
        </p>
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
      </form>
    </Container>
  </Layout>
)

export default ContactPage
