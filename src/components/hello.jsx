import React, { useState } from "react"
import PhraseWithFootnote from "../components/phraseWithFootnote"

const Hello = () => {
  return (
    <div className="flex flex-column mb6 mt6">
      <div className="">
        <h1 className="f3 neue-regular black tracked-tight fw5">
          Lucas Neumann
        </h1>
        <p className="f4 measure-narrow black-40 lh-copy">
          <br /> Futurebrand, Insitum, & Nubank alumnus, now managing product
          design at Petal in New York. I help companies cultivate user research,
          design empowering products, and grow healthy design teams.
        </p>
      </div>
    </div>
  )
}

export default Hello
