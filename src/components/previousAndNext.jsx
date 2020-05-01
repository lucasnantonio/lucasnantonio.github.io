import React from "react"
import { Link } from "gatsby"
import { minWidth } from "../components/utils"

function Image ({ src, cover, color }) {
    return (
        <div
            style={{ backgroundColor: color }}
            className={`overflow-hidden bg-near-white br3 mb4 tc center items-center flex flex-column w-100 h5 ${cover && 'justify-end'}`}>
            <img className="h-100 grow" src={src}></img>
        </div>
    )
}

function Content ({ title, subtitle, path }) {
    return (<>
        <div
            to={path}
            className="link black underline-hover flex w-100 lh-copy fw5 f4 mb1"
        >
            {title}
        </div>
        <div className="lh-title black-40 f4 lh-copy mb3">{subtitle}</div>
    </>
    )
}

export default function PreviousAndNext ({ next, prev }) {
    return (
        <div
            style={{ maxWidth: minWidth }}
            className="mt5 center pa4 ba br3 bw1 b--near-white flex flex-row-l flex-column"
        >
            {prev && (
                <div className={`f5  mr0  w-100  mb0-l mb4 ${next && "br-l bw1 b--near-white mr4-l pr4-l"}`}>
                    <Link className="link" to={prev.frontmatter.path}>
                        <Image color={prev.frontmatter.color} src={prev.frontmatter.cover_image.publicURL} cover={prev.frontmatter.cover} color={prev.frontmatter.color} />
                        <div className="black-40 lh-title f5 mr4 mb3">← Previous</div>
                        <Content
                            title={prev.frontmatter.title}
                            subtitle={prev.frontmatter.subtitle}
                            path={prev.frontmatter.path} />
                    </Link>
                </div>
            )}
            {next && next.frontmatter && (
                <div className="w-100">
                    <Link className="link" to={next.frontmatter.path}>
                        <Image color={next.frontmatter.color} src={next.frontmatter.cover_image.publicURL} cover={next.frontmatter.cover} />
                        <div className="black-40 lh-title f5 mb3">Next →</div>
                        <Content
                            title={next.frontmatter.title}
                            subtitle={next.frontmatter.subtitle}
                            path={next.frontmatter.path} />
                    </Link>
                </div>
            )}
        </div>
    )
}
