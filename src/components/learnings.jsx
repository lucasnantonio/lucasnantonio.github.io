import React from "react"
import { minWidth } from "../components/utils"
import publication from "../images/icons/Publication.svg"
export default function Learnings({ list }) {
  return (
    <div
      style={{ maxWidth: minWidth }}
      className="br3 center mt4 bt b--near-white pv4"
    >
      <div className="flex items-center learnings-header">
        <img
          className={"mr3"}
          style={{ width: "24px" }}
          src={publication}
        ></img>
        <h2 className="f3"> Key Learnings</h2>
      </div>
      <ol className="f3 lh-copy">
        {list.map(item => {
          return <li key={item}>{item}</li>
        })}
      </ol>
    </div>
  )
}
