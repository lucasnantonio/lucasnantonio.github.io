import React from "react"

export function Headline() {
  return (
    <h1
      layoutId="site-title"
      style={{ gridColumn: "main-start / main-end" }}
      className="fw4 f3 lh-copy ph4 pv6"
    >
      Product designer at Twitter & <br></br> Behavioral design teacher at
      Aprender.
    </h1>
  )
}
