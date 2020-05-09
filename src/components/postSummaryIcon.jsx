import React from "react"
import tinycolor from "tinycolor2"

export default function PostSummaryIcon(icon, postColor) {
  const getIconBackgroundColor = postColor => {
    const brightness = tinycolor(postColor).getLuminance()
    console.log(brightness)
    return brightness <= 0.1
      ? tinycolor(postColor).lighten(70)
      : brightness > 0.1 && brightness <= 0.4
      ? tinycolor(postColor).lighten(30)
      : brightness > 0.4 && brightness <= 0.65
      ? tinycolor(postColor).lighten(7)
      : brightness > 0.4 && brightness <= 0.65
      ? tinycolor(postColor).lighten(15)
      : brightness > 0.65 && brightness <= 0.8
      ? tinycolor(postColor).lighten(11)
      : brightness > 0.8 && brightness <= 0.99
      ? tinycolor(postColor).lighten(0)
      : tinycolor(postColor)
  }

  const getIconColor = postColor => {
    const brightness = tinycolor(postColor).getLuminance()
    return brightness <= 0.4
      ? tinycolor(postColor)
      : brightness > 0.4 && brightness <= 0.7
      ? tinycolor(postColor).darken(10)
      : tinycolor(postColor).darken(20)
  }

  return (
    <span
      className="br-pill flex items-center mr2"
      // style={{ padding: ".20rem", background: getIconBackgroundColor(frontmatter.color) }}
    >
      {icon(getIconColor(postColor), getIconBackgroundColor(postColor))}
    </span>
  )
}
