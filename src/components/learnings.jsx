import React from "react"
import { minWidth } from "../components/utils"

export default function Learnings ({ list }) {
    return (
        <div style={{
            maxWidth: minWidth,
        }} className="bg-lightest-blue pa4 br3 ph6-l ph5 center pv5-l pv4">
            <h3 className="f3 fw5 mb5">Learnings</h3>
            <ol className="f4 lh-copy">
                {list.map((item) => {
                    return (
                        <li key={item}>{item}</li>
                    )
                })}
            </ol>
        </div>
    )
}