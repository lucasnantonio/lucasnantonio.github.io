import React from "react"

function Reading() {
  const books = [
    {
      year: 2020,
      title: "The happiness hypothesis",
      bookshop_url: "https://bookshop.org/a/9978/9780465028023",
      amazon_url: "https://amzn.to/3rucyRp",
      text:
        "I love how Haidt connects old wisdom with current science to find balanced insights about how to live. Highliy recommended",
    },
  ]
  const rows = books.map(item => (
    <div className="pv4 f3 bw2 bt b--near-white ">
      <a href={item.url} target={"_blank"} className="link black fw5">
        {item.title}
      </a>
      <div className="f4 pt4 measure">{item.text}</div>
      <div className="f5 pt4 fw5">
        {" "}
        Get from
        <a
          className="link blue pv1 ph2 bw1 b--light-blue br-pill ba mh2"
          href={item.amazon_url}
          target="_blank"
        >
          Amazon
        </a>
        <a
          className="link blue pv1 ph2 bw1 b--light-blue br-pill ba"
          href={item.bookshop_url}
          target="_blank"
        >
          Local book shop
        </a>
      </div>
    </div>
  ))
  return <div>{rows}</div>
}

export default Reading
