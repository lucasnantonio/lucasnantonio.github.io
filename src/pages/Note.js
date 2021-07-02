import React from "react"

export const Note = ({ data }) => {
  const {
    frontmatter: { title, tags },
    html,
  } = data
  console.log(data)
  return (
    <div className="ba b--near-white pa4 note overflow-hidden" key={title}>
      <h1 className="f4 fw5 black">{title}</h1>
      <div
        className="lh-copy f4 black-50"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
