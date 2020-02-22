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
        <h1 className="f3 neue-regular black tracked-tight fw5 lh-title">
          {!visitor
            ? `Lucas Neumann`
            : `Hi there, ${capitalizeFirstLetter(atob(visitor))}!`}
          <br />
          {visitor && `I'm Lucas Neumann.`}
        </h1>
        <p className="f4 w-50-l black-40 lh-copy">
          <br /> Design generalist at heart. I help companies{" "}
          <span
            className="underline-hover hover-black pointer"
            onClick={() => setTopic("Design Ops")}
          >
            build healthy design teams,
          </span>{" "}
          <span
            className="underline-hover hover-black pointer"
            onClick={() => setTopic("Research")}
          >
            understand users through research,
          </span>{" "}
          <span
            className="underline-hover hover-black pointer"
            onClick={() => setTopic("Product Design")}
          >
            and design experiences for millions of people.
          </span>{" "}
          <br />
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
