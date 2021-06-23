import React from "react"
import {
  ic_impact_2,
  ic_problem_2,
  ic_role_2,
  ic_solution_2,
} from "../components/icons.js"
import PostSummaryIcon from "../components/postSummaryIcon"
import { minWidth } from "../components/utils"

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
      className={`bb b--near-white w-25-l mb0-ns measure pr4 flex flex-column items-start pv5`}
    >
      <div className="flex items-center">
        <div style={{ width: "1.9rem" }}>{icon}</div>
        <span className="f3 black">{title}</span>
      </div>
      <p className="lh-copy f4 black-50 mt4">{text}</p>
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
        className="center flex flex-row-ns flex-column br3"
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
