import React from "react"

export default function PostMetadata({ frontmatter }) {
  return (
    <div className="fw5 mb3 pt3-l pt3 pb4 mw5 f6 lh-copy black-40 flex flex-column align-start items-start">
      {frontmatter.link && frontmatter.link_label && (
        <a
          href={frontmatter.link}
          target="_blank"
          rel="noopener noreferrer"
          className="pb1 bb b--near-white bw1 mb3 link mt0-l black hover-black-80 f6 flex justify-between-l nowrap pointer hover-white"
        >
          {frontmatter.link_label}
        </a>
      )}
      <div className="">
        <div className="nowrap">
          {frontmatter.where && frontmatter.where + `,`} {frontmatter.date}{" "}
        </div>

        {frontmatter.team
          ? `Lucas Neumann, ${frontmatter.team.map(item => ` ${item}`)}`
          : `Solo project`}
      </div>
    </div>
  )
}
