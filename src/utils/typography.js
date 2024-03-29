import "../styles/global.css"

import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"

fairyGateTheme.overrideThemeStyles = () => ({
  "h1,h2,h3,h4,h5,h6": {
    color: "var(--textTitle)",
  },

  p: {
    color: "var(--textNormal)",
    fontSize: "1rem",
    marginBottom: "0.5rem",
    lineHeight: `1.6`,
  },
  a: {
    color: "var(--textLink)",
    textShadow: "none",
    backgroundImage: "none",
  },
})

const typography = new Typography(fairyGateTheme)

export const { scale, rhythm, options } = typography
export default typography
