import React from "react"
import { minWidth } from "../components/utils"
export default function Learnings ({ list }) {
    return (
        <div style={{ maxWidth: minWidth }}
            className="bg-near-white br3 center pv5-l ph4 pv4 ba b--near-white mt4">
            <div className="center" style={{ maxWidth: '42rem' }}>
                <h3 className="f5 ttu fw5 mb5 black-80"> Key Learnings</h3>
                <ol className="f4 lh-copy">
                    {list.map((item) => {
                        return (
                            <li key={item}>{item}</li>
                        )
                    })}
                </ol>
            </div>
        </div>
    )
}