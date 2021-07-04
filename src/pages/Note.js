import React from "react"
import link from "../images/icons/link.svg"

export const Note = ({ data }) => {
  const {
    frontmatter: { title, tags, source },
    html,
  } = data
  console.log(data)
  return (
    <div className="ba b--near-white ph4 pv3 note overflow-hidden" key={title}>
      <h1 className="f4 fw5 black">{title}</h1>
      {source && (
        <div
          style={{ width: "max-content" }}
          className="flex nowrap items-center pa1 black-50 ba br-pill b--black-10 mw6"
        >
          <img className={"mh1"} style={{ width: "16px" }} src={link}></img>
          <div
            className="dib mw5 pr1"
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {source.split("https://")[1]}
          </div>
        </div>
      )}
      <div
        className="lh-copy f4 black-50 note-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
