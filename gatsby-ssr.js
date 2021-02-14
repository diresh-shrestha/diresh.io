/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require("react")

exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      data-name="bmc-button"
      data-slug="diresh"
      src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
      data-color="#FF5F5F"
      data-emoji=""
      data-font="Cookie"
      data-text="Buy me a coffee"
      data-outline-color="#000000"
      data-font-color="#ffffff"
      data-coffee-color="#FFDD00"
    ></script>,
  ])
}
