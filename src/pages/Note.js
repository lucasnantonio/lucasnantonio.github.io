import React from "react"
import link from "../images/icons/link.svg"
import Link from "gatsby-link"

export const Note = ({ data, format }) => {
  const {
    fields,
    frontmatter: { title, tags, source },
    html,
    excerpt,
  } = data

  return format === "note" ? (
    <div
      className="link ba b--near-white ph4 pt3 pb4 note overflow-hidden"
      key={title}
    >
      <h1 className="f3 fw5 black">{title}</h1>
      {source && format === "note" && (
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
  ) : (
    <Link
      className="flex flex-column link ba b--near-white ph4 pt3 pb4 note"
      to={`/notes/note/${title}`}
    >
      <h1 className="f4 fw5 black mb0">{title}</h1>
      <div className="lh-copy f4 black-50 note-content mt3">{excerpt}</div>
    </Link>
  )
}
