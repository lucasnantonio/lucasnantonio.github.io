import React from "react"
import { minWidth } from "../components/utils"
import publication from "../images/icons/Publication.svg"
export default function Learnings({ list }) {
  return (
    <div
      style={{ maxWidth: minWidth }}
      className="br3 center pv5-l ph4 pv4 mt4 ba bw1 b--near-white"
    >
      <div className="center" style={{ maxWidth: "42rem" }}>
        <div className="flex items-center mb4">
          <img
            className={"mr3"}
            style={{ width: "34px" }}
            src={publication}
          ></img>
          <h3 className="f5 ttu fw5 black-60 ml2"> Key Learnings</h3>
        </div>
        <ol className="f4 lh-copy">
          {list.map(item => {
            return <li key={item}>{item}</li>
          })}
        </ol>
      </div>
    </div>
  )
}
