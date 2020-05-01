import React from "react"
import { Link } from "gatsby"
import { minWidth } from "../components/utils"


export default function PreviousAndNext ({ next, prev }) {
    return (
        <div
            style={{ maxWidth: minWidth }}
            className="mt5 center pa4 ba br3 bw1 b--near-white flex flex-row-l flex-column"
        >
            {prev && (
                <div className={`f5  mr0  w-100  mb0-l mb4 ${next && "br-l bw1 b--near-white mr4-l pr4-l"}`}>
                    <div className="bg-near-white br3 mb4 tc center justify-center w-100">
                        <img className="mw5" src={prev.frontmatter.cover_image.publicURL}></img>
                    </div>
                    <div className=" lh-title f5 mr4 mb3">← Previous</div>
                    <Link
                        to={prev.frontmatter.path}
                        className="flex link black underline-hover lh-copy f4 black mb1 fw5"
                    >
                        {prev.frontmatter.title}
                    </Link>
                    <div className=" lh-copy black-40 fw5 f4 mb3 ">{prev.frontmatter.subtitle}</div>
                </div>
            )}
            {next && next.frontmatter && (
                <div className="w-100">

                    <div className="bg-near-white br3 tc mb4 center justify-center">
                        <img className="mw5" src={next.frontmatter.cover_image.publicURL} />
                    </div>
                    <div className=" lh-title f5 mb3">Next →</div>
                    <Link
                        to={next.frontmatter.path}
                        className="link black underline-hover flex w-100 lh-copy fw5 f4 mb1"
                    >
                        {next.frontmatter.title}
                    </Link>
                    <div className=" lh-title black-40 f4 lh-copy mb3">{next.frontmatter.subtitle}</div>
                </div>
            )}
        </div>
    )
}
