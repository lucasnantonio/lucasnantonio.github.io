import link from "../images/icons/link.svg"
import Link from "gatsby-link"
import React, { useState } from "react"

export const Note = ({ data, format }) => {
  const [isHovered, setIsHovered] = useState(false)
  const {
    fields,
    frontmatter: { title, tags, source },
    html,
    excerpt,
  } = data

  return format === "note" ? (
    <div>
      <div className={`link pb4 note lh-copy ph4`} key={title}>
        <h1 className="f3 black mt0 ">{title}</h1>
        {format === "note" && (
          <div className="flex items-center">
            <div
              style={{ width: "max-content" }}
              className="flex nowrap items-center black-50 mw6"
            >
              <img
                className={"mh1 pt1"}
                style={{ width: "18px" }}
                src={link}
              ></img>
              <a
                href={source}
                target="_blank"
                className="f4 dib mw5 pr1 link black-50 underline-hover"
                style={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {source ? source.split("https://")[1] : "No source  "}
              </a>
            </div>
            {tags &&
              tags.map((tag, i) => (
                <div
                  key={i}
                  className="flex nowrap items-center ml1 black-50 b--black-10 mw6"
                >
                  <Link
                    to={`/notes/${tag}`}
                    target="_blank"
                    className="f4 dib mw5 pr1 link black-50 underline-hover"
                  >
                    # {tag}
                  </Link>
                </div>
              ))}
          </div>
        )}
        <div
          className="lh-copy f4 measure fw4 black note-content pt3 mt4"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  ) : (
    <Link
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex pa4 link pt3 pb4 note ${isHovered &&
        "bg-near-white ease bg-animate w-100"}`}
      to={`/notes/note/${title}`}
    >
      <h1 className="f4 black mb0 w-third">{title}</h1>
      <div className="lh-copy f4 black-50 note-content mt3 w-two-thirds ml4">
        {excerpt}
      </div>
    </Link>
  )
}
