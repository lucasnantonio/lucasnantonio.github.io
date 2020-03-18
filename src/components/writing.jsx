import React from "react"

function Writing() {
  const articles = [
    {
      title: "How we designed our Bank Account — NuConta Part II",
      time: "7 min read",
    },
    { title: "First steps for better UX research", time: "8 min read" },
    { title: "Design Principles at Nubank", time: "6 min read" },
    { title: "What it feels like to become a designer", time: "3 min read" },
    { title: "A critique of Medium's claps", time: "5 min read" },
  ]
  const rows = articles.map(item => (
    <span className="">
      <div className="mono nowrap">{item.title}</div>
    </span>
  ))
  return <div>{rows}</div>
}

export default Writing
