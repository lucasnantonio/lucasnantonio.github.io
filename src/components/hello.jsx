import React, { useState } from "react"
import PhraseWithFootnote from "../components/phraseWithFootnote"
import { useEffect } from "react"

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const Hello = ({ setSelectedTopics, setAll }) => {
  const [visitor, setVisitor] = useState(null)
  function getVisitor() {
    setVisitor(window.location.search.split("?")[1])
  }
  useEffect(() => getVisitor())

  function setTopic(item) {
    setAll(false)
    setSelectedTopics([item])
  }

  return (
    <div className="flex flex-column mb6 mt6">
      <div className="">
        <h1 className="f2 neue-regular black lh-title mb0">
          {!visitor
            ? `Lucas Neumann`
            : `Hi there, ${capitalizeFirstLetter(atob(visitor))}!`}
          <br />
          {visitor && `I'm Lucas Neumann.`}
        </h1>
        <p className="f2 measure-narrow black-40 lh-copy mt0">
          <br /> I help companies{" "}
          <span
            className="underline-hover hover-black pointer"
            onClick={() => setTopic("Design Ops")}
          >
            build design teams,
          </span>{" "}
          <span
            className="underline-hover hover-black pointer"
            onClick={() => setTopic("Research")}
          >
            run user research,
          </span>{" "}
          <span
            className="underline-hover hover-black pointer"
            onClick={() => setTopic("Product Design")}
          >
            and design experiences.
          </span>{" "}
          <br />
          {/* <a
            className="link black-40 underline-hover hover-black"
            href="http://www.futurebrand.com"
            target="blank"
            style={{ cursor: "ne-resize" }}
          >
            Futurebrand
          </a>
          ,{" "}
          <a
            className="link black-40 underline-hover hover-black"
            href="http://www.insitum.com"
            target="blank"
            style={{ cursor: "ne-resize" }}
          >
            Insitum
          </a>
          ,{" "}
          <a
            className="link black-40 underline-hover hover-black"
            href="http://www.kano.me"
            target="blank"
            style={{ cursor: "ne-resize" }}
          >
            Kano
          </a>{" "}
          &{" "} */}
          <a
            className="link black-40 underline-hover hover-black"
            href="http://www.nubank.com.br/en"
            target="blank"
            style={{ cursor: "ne-resize" }}
          >
            Nubank
          </a>{" "}
          alumnus, currently managing design at{" "}
          <a
            className="link black-40 underline-hover hover-black"
            href="http://www.petalcard.com"
            target="blank"
            style={{ cursor: "ne-resize" }}
          >
            Petal
          </a>
          .
        </p>
      </div>
    </div>
  )
}

export default Hello
