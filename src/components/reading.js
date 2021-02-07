import React from "react"

function Reading() {
  const books = [
    {
      year: 2020,
      title: "The happiness hypothesis",
      bookshop_url: "https://bookshop.org/a/9978/9780465028023",
      amazon_url: "https://amzn.to/3rucyRp",
      text:
        "I love Haidt's ability to go both wide and deep to connect centuries-old wisdom with current science. A highly rewarding, always interesing book.",
      img:
        "https://images-production.bookshop.org/spree/images/attachments/9845057/original/9780465028023.jpg?1588290604",
    },
    {
      year: 2020,
      title: "Behavioral Insights",
      bookshop_url: "https://bookshop.org/a/9978/9780262539401",
      amazon_url: "https://amzn.to/3tAN32J",
      text:
        "This is a good, foundational book on how Behavioral Insights evolved in the academic and business circles. It has examples from fields outside of technology so it helps expand our critial view.",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1597015463l/51456687.jpg",
    },
    {
      year: 2020,
      title: "Drive Your Plow Over the Bones of the Dead",
      bookshop_url: "https://bookshop.org/a/9978/9780525541349",
      amazon_url: "https://amzn.to/36R5QwW",
      text:
        "This is my second book from Olga Tokarczuk, and even thought very different from “Flights”, it didn't dissapoint me. I was hooked form the beginning. Her ability to see poetry in nature is very inspiring.",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1547225640l/42983724.jpg",
    },

    {
      year: 2020,
      title: "Buddhism: A Very Short Introduction",
      bookshop_url: "https://bookshop.org/a/9978/9780199663835",
      amazon_url: "https://amzn.to/3rzrbTk",
      text:
        "I love these tiny books from Oxford University Press. This one gave me an amazing first look at the world of buddhism.",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388193570l/74657.jpg",
    },
    {
      year: 2020,
      title: "Designing for Behavior Change",
      bookshop_url: "https://bookshop.org/a/9978/9781492056034",
      amazon_url: "https://amzn.to/3aDp0rc",
      text:
        "This book is the foundation of the Behavior Design course I teach. The frameworks introduced are a good way to remember the process, even though I feel like there's still room to make them less repetitive and more elegant. ",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1591624288l/49828193.jpg",
    },
    {
      year: 2020,
      title: "The Beauty of Everyday Things",
      bookshop_url: "https://bookshop.org/a/9978/9780241366356",
      amazon_url: "https://amzn.to/36R74bw",
      text:
        "This book made me pause and think about craftsmanship in ways I hadn't before. Beautiful.",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1548098576l/39895846.jpg",
    },
    {
      year: 2020,
      title: "On Writing Well",
      bookshop_url: "https://bookshop.org/a/9978/9780060891541",
      amazon_url: "https://amzn.to/3rzsEJk",
      text:
        "I can't believe we go through so many years of design school without reading something like this. We have a lot to learn from writers on achieving clarity dealing with the struggles that are part of doing creative work.",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1538764251l/53343.jpg",
    },
    {
      year: 2020,
      title: "How to Change Your Mind",
      bookshop_url: "https://bookshop.org/a/9978/9780735224155",
      amazon_url: "https://amzn.to/3tDDz6C",
      text:
        "There's a lot to question and to learn about the way we see and exist in the world. This book gave me great insight into the scaffolding we build in our minds to construct reality, and how psychadelics will open the way to new, more humane forms of consciousness.",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554267982l/44774807._SY475_.jpg",
    },
    {
      year: 2020,
      title: "Severance",
      bookshop_url: "https://bookshop.org/a/9978/9781250214997",
      amazon_url: "https://amzn.to/3tCqeM8",
      text:
        "It is so scary to think that this book was written before the pandemic. A lot of it feels like a prediction of how living in New York would be during 2020 and 2021.",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1507060524l/36348525._SY475_.jpg",
    },
    {
      year: 2020,
      title: "A New Program for Graphic Design",
      bookshop_url: "https://bookshop.org/a/9978/9781941753217",
      amazon_url: "https://amzn.to/2MAkMc5",
      text:
        "This book was a very unexpected, positive surprise. I was expecting a method book that would help improve my skills, and it is instead more of a design history book. Still, the principles behind it are so good, it gave me a renewed energy about all things design.",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1568586059l/51572616._SX318_SY475_.jpg",
    },
    {
      year: 2020,
      title: "Flights",
      bookshop_url: "https://bookshop.org/a/9978/9780525534204",
      amazon_url: "https://amzn.to/2Mz5EM1",
      text:
        "This is one of the most fascinating ficcion books I have ever read. It is hard, and infinitely enjoyable. Olga is a genius, and the complexity of her mind will leave an impact on me for years to come. I can't wait to read this book again.",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1512417961l/36885304.jpg",
    },
  ]
  const rows = books.map(item => (
    <div className="pv4 f3 bw2 bt b--near-white flex justify-between">
      <div className="mr4">
        <a href={item.url} target={"_blank"} className="link black fw5">
          {item.title}
        </a>
        <div className="f4 pt4 measure">{item.text}</div>
        <div className="f5 pt4 fw5">
          {" "}
          Get from
          <a
            className="link blue pv1 ph2 bw1 b--light-blue hover-bg-blue hover-white br-pill ba mh2"
            href={item.amazon_url}
            target="_blank"
          >
            Amazon
          </a>
          <a
            className="link blue pv1 ph2 bw1 b--light-blue hover-bg-blue hover-white br-pill ba"
            href={item.bookshop_url}
            target="_blank"
          >
            Local book shop
          </a>
        </div>
      </div>
      {item.img && <img className="w5-l w4  h-100" src={item.img}></img>}
    </div>
  ))
  return (
    <div>
      {rows}
      <div className="mt3 bt bw2 b--near-white pt4">
        <p className="measure lh-copy">
          This page contains affiliate links from Amazon and Bookshop.org. If
          you buy a book using these links, I may earn a comission.
        </p>
      </div>
    </div>
  )
}

export default Reading
