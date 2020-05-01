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

const PostSummary = ({ frontmatter }) => {
  const roundIcon = (icon) => {
    return <span className="br-pill flex items-center mr2" style={{ padding: ".65rem", background: getIconBackgroundColor(frontmatter.color) }}>{icon(getIconColor(frontmatter.color))} </span>
  }
  return (frontmatter.solution ||
    frontmatter.problem ||
    frontmatter.impact ||
    frontmatter.myrole) && (
      <div className="flex flex-column center items-center">
        <div
          style={{ maxWidth: minWidth }}
          className=" center flex flex-row-ns flex-column justify-between pv4-ns pv4 br2 tl mt3 "
        >
          <div className="flex flex-row-ns flex-column">
            {frontmatter.problem && (
              <div className="mr5 w-100 mb0-ns mb4 measure">

                <h4 className="fw6 f4 mt3 mb0 flex center items-center">
                  {roundIcon(ic_problem)}
                  <span className="ml2">Problem</span> </h4>
                <p className="lh-copy f4">{frontmatter.problem}</p>
              </div>
            )}
            {frontmatter.solution && (
              <div className="mr5 w-100 mb0-ns mb4 measure">
                <h4 className="fw6 f4 mt3 mb0 flex center items-center">
                  {roundIcon(ic_solution)}
                  <span className="ml2">Approach</span></h4>
                <p className="lh-copy f4">{frontmatter.solution}</p>
              </div>
            )}
          </div>
          <div className="flex flex-row-ns flex-column">
            {frontmatter.impact && (
              <div className={`${frontmatter.myrole && "mr5"}  w-100 mb0-ns mb4 measure`}>
                <h4 className="fw6 f4 mt3 mb0 flex center items-center">
                  {roundIcon(ic_impact)}
                  <span className="ml2">Impact</span></h4>
                <p className="lh-copy f4">{frontmatter.impact}</p>
              </div>
            )}
            {frontmatter.myrole && (
              <div className=" w-100 mb0-ns mb4 measure">
                <h4 className="fw6 f4 mt3 mb0 flex center items-center">
                  {roundIcon(ic_role)}
                  <span className="ml2">My role</span></h4>
                <p className="lh-copy f4">{frontmatter.myrole}</p>
              </div>
            )}
          </div>
        </div>
        <div style={{ borderColor: getIconBackgroundColor(frontmatter.color) }} className="w bt bw2"></div>
      </div>
    )
}

export default PostSummary
