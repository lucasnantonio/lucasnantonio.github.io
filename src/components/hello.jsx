import React, { useState } from "react"
import PhraseWithFootnote from "../components/phraseWithFootnote"
import { useEffect } from "react"

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

// function greet () {

//   if (visitor && atob(visitor)){
//   greeting.innerHTML = "Hi there, " + capitalizeFirstLetter(atob(visitor)) + "! <br /> It's nice to have you here."
//   presentation.innerHTML = "I am a product designer at Nubank."
// }
// }

const Hello = () => {
  const [visitor, setVisitor] = useState(null)
  function getVisitor() {
    setVisitor(window.location.search.split("?")[1])
  }
  useEffect(() => getVisitor())

  return (
    <div className="flex flex-column mb6 mt6">
      <div className="">
        <h1 className="f3 neue-regular black tracked-tight fw5 lh-title">
          {!visitor
            ? `Lucas Neumann`
            : `Hi there, ${capitalizeFirstLetter(atob(visitor))}!`}
          <br />
          {visitor && `I'm Lucas Neumann.`}
        </h1>
        <p className="f4 measure-narrow black-40 lh-copy">
          <br /> Futurebrand, Insitum, & Nubank alumnus, I currently manage
          product design at Petal in New York. I help companies cultivate user
          research, design empowering products, and grow healthy design teams.
        </p>
      </div>
    </div>
  )
}

export default Hello
