import React from "react"

const Clock = () => {
  return (
    <div style={{ display: `inline-block`, verticalAlign: `text-top` }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          stroke="currentColor"
          stroke-miterlimit="10"
          stroke-width="16"
        ></circle>
        <polyline
          points="128 72 128 128 184 128"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></polyline>
      </svg>
    </div>
  )
}

export default Clock
