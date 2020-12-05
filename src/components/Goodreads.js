import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

export default function Goodreads({ index }) {
  const data = useStaticQuery(
    graphql`
      query {
        goodreadsShelf {
          id
          shelfName
          reviews {
            reviewID
            rating
            votes
            spoilerFlag
            dateAdded
            dateUpdated
            body
            book {
              bookID
              isbn
              isbn13
              textReviewsCount
              uri
              link
              title
              titleWithoutSeries
              imageUrl
              smallImageUrl
              largeImageUrl
              description
            }
          }
        }
      }
    `
  )

  let imgUrl = data.goodreadsShelf.reviews[index].book.imageUrl
  imgUrl = imgUrl.replace("98", "2000")
  return (
    <a href={data.goodreadsShelf.reviews[index].book.link} target="_blank">
      <div>
        <img
          className="hvr-float-shadow"
          src={imgUrl}
          alt={data.goodreadsShelf.reviews[index].book.title}
        />
      </div>
    </a>
  )
}
