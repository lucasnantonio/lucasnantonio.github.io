import React from "react"
import { minWidth } from "../components/utils"
import PostSummaryIcon from "../components/postSummaryIcon"
import {
  ic_problem_2,
  ic_solution_2,
  ic_impact_2,
  ic_role_2,
} from "../components/icons.js"
import tinycolor from "tinycolor2"

const SummaryItem = ({
  icon,
  title,
  text,
  color,
  backgroundColor,
  noBorder,
}) => {
  return (
    <div
      style={{ marginBottom: "-2px" }}
      className={`bb b--near-white w-100 mb0-ns mb4 measure pt4 pr4 pb4 flex flex-column items-start`}
    >
      {icon}
      <span className="ttu mt4 fw7 f6 black">{title}</span>
      <p className="lh-copy f4 black">{text}</p>
    </div>
  )
}
const PostSummary = ({ frontmatter }) => {
  return (
    (frontmatter.solution ||
      frontmatter.problem ||
      frontmatter.impact ||
      frontmatter.myrole) && (
      <div
        style={{ maxWidth: minWidth }}
        className="pt4 center flex flex-row-ns flex-column br3"
      >
        {frontmatter.problem && (
          <SummaryItem
            color={frontmatter.color}
            icon={PostSummaryIcon(ic_problem_2, frontmatter.color)}
            title="Problem"
            text={frontmatter.problem}
          />
        )}
        {frontmatter.solution && (
          <SummaryItem
            color={frontmatter.color}
            icon={PostSummaryIcon(ic_solution_2, frontmatter.color)}
            title="Solution"
            text={frontmatter.solution}
          />
        )}
        {frontmatter.impact && (
          <SummaryItem
            color={frontmatter.color}
            icon={PostSummaryIcon(ic_impact_2, frontmatter.color)}
            title="Impact"
            text={frontmatter.impact}
          />
        )}
        {frontmatter.myrole && (
          <SummaryItem
            noBorder
            color={frontmatter.color}
            icon={PostSummaryIcon(ic_role_2, frontmatter.color)}
            title="My Role"
            text={frontmatter.myrole}
          />
        )}
      </div>
    )
  )
}

export default PostSummary
