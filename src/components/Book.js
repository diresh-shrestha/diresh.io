import React from "react"
import styled from "styled-components"

const Img = styled.img`
  max-width: 300px;
`

export default function Book() {
  // let imgUrl = data.goodreadsShelf.reviews[index].book.imageUrl
  // imgUrl = imgUrl.replace("98", "2000")
  let imgUrl =
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1613923087l/54970071._SY475_.jpg"
  let bookUrl = "https://www.goodreads.com/book/show/54968118-the-code-breaker"
  let alt =
    "The Code Breaker: Jennifer Doudna, Gene Editing, and the Future of the Human Race"
  return (
    // <a
    //   href={data.goodreadsShelf.reviews[index].book.link}
    //   rel="noreferrer"
    //   target="_blank"
    // >
    //   <div className="hvr-grow-shadow">
    //     <Img
    //       style={{ marginBottom: `0` }}
    //       src={imgUrl}
    //       alt={data.goodreadsShelf.reviews[index].book.title}
    //     />
    //   </div>
    // </a>
    <a href={bookUrl} rel="noreferrer" target="_blank">
      <div className="hvr-grow-shadow">
        <Img style={{ marginBottom: `0` }} src={imgUrl} alt={alt} />
      </div>
    </a>
  )
}
