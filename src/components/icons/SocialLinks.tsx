import React from "react"
import Github from "./Github"
import Linkedin from "./Linkedin"
import Mail from "./Mail"
import SourceCode from "./SourceCode"
import Twitter from "./Twitter"

export default function SocialLinks() {
  return (
    <div>
      <Twitter />
      <a
        href="https://github.com/diresh-shrestha"
        className="hvr-float-shadow"
        rel="noreferrer"
        target="_blank"
        style={{ marginRight: `1rem` }}
      >
        <Github />
      </a>

      <Linkedin />

      <Mail />
    </div>
  )
}
