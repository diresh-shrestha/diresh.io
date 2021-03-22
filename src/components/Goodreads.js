import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Img = styled.img`
  max-width: 300px;
`

export default function Goodreads({ index }) {
  const data = useStaticQuery(
    graphql`
      query {
        goodreadsShelf {
          shelfName
          reviews {
            book {
              description
              imageUrl
              link
              title
            }
          }
        }
      }
    `
  )

  let imgUrl = data.goodreadsShelf.reviews[index].book.imageUrl
  imgUrl = imgUrl.replace("98", "2000")
  return (
    <a
      href={data.goodreadsShelf.reviews[index].book.link}
      rel="noreferrer"
      target="_blank"
    >
      <div className="hvr-grow-shadow">
        <Img
          style={{ marginBottom: `0` }}
          src={imgUrl}
          alt={data.goodreadsShelf.reviews[index].book.title}
        />
      </div>
    </a>
  )
}
