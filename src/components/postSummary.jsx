import React from "react"
import { minWidth } from "../components/utils"
import {
  ic_problem,
  ic_solution,
  ic_impact,
  ic_role,
} from "../components/icons.js"
import tinycolor from "tinycolor2"


const getIconBackgroundColor = (color) => {
  const brightness = tinycolor(color).getLuminance();
  console.log(brightness)
  return brightness <= 0.1 ? tinycolor(color).lighten(70) :
    brightness > 0.1 && brightness <= 0.4 ? tinycolor(color).lighten(30) :
      brightness > 0.4 && brightness <= 0.65 ? tinycolor(color).lighten(7) :
        brightness > 0.4 && brightness <= 0.65 ? tinycolor(color).lighten(15) :
          brightness > 0.65 && brightness <= 0.8 ? tinycolor(color).lighten(19) :
            brightness > 0.8 && brightness <= 0.99 ? tinycolor(color).lighten(2) :
              tinycolor(color)
}
const getIconColor = (color) => {
  const brightness = tinycolor(color).getLuminance();
  return brightness <= 0.4 ? tinycolor(color) :
    brightness > 0.4 && brightness <= 0.7 ? tinycolor(color).darken(35) :
      tinycolor(color).darken(45)
}
const SummaryItem = ({ icon, title, text, color, noBorder }) => {
  return (
    <div
      style={{ marginBottom: "-2px" }}
      className={`${!noBorder && 'br-ns bbn-ns bb'} bw1 w-100 mb0-ns mb4 measure pl4 pt4 pr4 pb3 b--near-white flex flex-column items-start`}>
      {icon}
      <span
        className="ttu mt4 fw5 f6 black">{title}</span>
      <p className="lh-copy f4">{text}</p>
    </div>
  )
}
const PostSummary = ({ frontmatter }) => {
  const roundIcon = (icon) => {
    return <span
      className="br-pill flex items-center mr2"
    // style={{ padding: ".65rem", background: getIconBackgroundColor(frontmatter.color) }}
    >
      {icon(getIconColor(frontmatter.color))}
    </span>
  }
  return (frontmatter.solution ||
    frontmatter.problem ||
    frontmatter.impact ||
    frontmatter.myrole) && (

      <div style={{ maxWidth: minWidth }} className="mt5 center flex flex-row-ns flex-column ba bw1 b--near-white br3">
        {frontmatter.problem && (
          <SummaryItem color={frontmatter.color} icon={roundIcon(ic_problem)} title="Problem" text={frontmatter.problem} />
        )}
        {frontmatter.solution && (
          <SummaryItem color={frontmatter.color} icon={roundIcon(ic_solution)} title="Solution" text={frontmatter.solution} />
        )}
        {frontmatter.impact && (
          <SummaryItem color={frontmatter.color} icon={roundIcon(ic_impact)} title="Impact" text={frontmatter.impact} />
        )}
        {frontmatter.myrole && (
          <SummaryItem noBorder color={frontmatter.color} icon={roundIcon(ic_role)} title="My Role" text={frontmatter.myrole} />
        )}
      </div>

    )
}

export default PostSummary
