import React from "react"


export default function PostMetadata ({ frontmatter }) {
    return (
        <div className="mono fw5 black-30 mb3 pt3-l pt3 pb4 mw5 f6 lh-copy black-50 flex flex-column align-start items-start">
            {frontmatter.link && frontmatter.link_label && (
                <a
                    style={{ marginLeft: "-.25rem" }}
                    href={frontmatter.link}
                    target="_blank"
                    className=" mb3 link  mt0-l  black-40 hover-black-80 pl1 br-pill f6 flex justify-between-l nowrap hover-bg-lightest-gray pointer hover-white"
                >
                    <span className="mr1 fw5 underline">{frontmatter.link_label}</span>
                </a>
            )}
            <div className="">
                <div className="nowrap">
                    {frontmatter.where && frontmatter.where + `,`} {frontmatter.date}{" "}
                </div>

                {frontmatter.team ?
                    `Lucas Neumann, ${frontmatter.team.map(
                        (item) =>
                            ` ${item}`
                    )}` : `Solo project`}

            </div>
        </div>
    )
}