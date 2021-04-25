import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/okaidia"
import React from "react"
import styled from "styled-components"

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  box-shadow: none;
  text-decoration: none;
  margin: 8px;
  padding: 8px 12px;
  background: #e2e8f022;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  color: #e2e8f0;
  font-size: 14px;
  font-family: sans-serif;
  line-height: 1;

  &:hover {
    background: #c2c6cc;
  }

  transition: all 0.2s;
`

export default props => {
  const [isCopied, setIsCopied] = React.useState(false)

  const copyToClipboard = str => {
    const el = document.createElement("textarea")
    el.value = str
    el.setAttribute("readonly", "")
    el.style.position = "absolute"
    el.style.left = "-9999px"
    document.body.appendChild(el)
    el.select()
    document.execCommand("copy")
    document.body.removeChild(el)
  }
  const className = props.children.props.className || ""
  const matches = className.match(/language-(?<lang>.*)/)
  const language = className.replace(/language-/, "") || ""

  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="gatsby-highlight" data-language={language}>
          <pre className={className} style={{ ...style, padding: "20px" }}>
            <Button
              onClick={() => {
                copyToClipboard(props.children.props.children.trim())
                setIsCopied(true)
                setTimeout(() => setIsCopied(false), 3000)
              }}
            >
              {isCopied ? "🎉 Copied!" : "Copy"}
            </Button>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  )
}
