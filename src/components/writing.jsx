import React, { useState } from "react"
import { motion } from "framer-motion"
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const article = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

function Writing() {
  const articles = [
    {
      title: "A checklist for behavioral design",
      subtitle:
        "Understanding the why behind people's behaviors and designing helpful, ethical interventions.",
      url: "https://uxdesign.cc/a-checklist-for-behavioral-design-fb768a8d5615",
    },
    {
      title: "Getting the O-1 US Visa as a designer",
      subtitle: "Tips for designers who want to come live and work in the US.",
      url:
        "https://uxdesign.cc/getting-the-o-1-us-visa-as-a-designer-5ff6ee04869f",
    },
    {
      title: "A better way to gather real-time user feedback",
      subtitle: "How we created an always-on system for user feedback at Petal",
      url:
        "https://medium.com/petal/a-new-way-to-gather-real-time-user-feedback-58ce2ab5e9d",
    },
    {
      title: "Automated Research: Talking to users, on repeat.",
      subtitle: "Tips to make research operations move faster.",
      url: "https://medium.com/petal/automated-research-69b762be1d8c",
    },
    {
      title: "Listening to user feedback",
      subtitle: "How we kept our attention in the customer at Nubank",
      url:
        "https://medium.com/nubank-design/listening-to-user-feedback-b8380a37e781",
    },
    {
      title: "How we designed our Bank Account — NuConta Part II",
      subtitle: "Building a revolutionary bank account, from scratch.",
      url: "https://medium.com/nubank-design/nuconta-part-ii-685b446addc6",
    },
    {
      title: "Why ❤️ trumps 👏",
      subtitle: "A critique of Medium's new clap interaction.",
      url:
        "https://medium.com/@lucasnantonio/why-%EF%B8%8F-trumps-8766ddc0c0e6",
    },
    {
      title: "First steps for better UX research",
      subtitle: "Setting up UX research at Nubank.",
      url:
        "https://medium.com/nubank-design/first-steps-for-better-ux-research-6fd863af7c6d",
    },
    {
      title: "Design Principles at Nubank",
      subtitle: "Reflections on writing the foundations of our design culture.",
      url:
        "https://medium.com/nubank-design/design-principles-at-nubank-d14317715bb1",
    },
  ]
  const Item = ({ item }) => {
    let [isHovered, setHover] = useState(false)
    return (
      <motion.a
        variants={article}
        key={item.title}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        href={item.url}
        target={"_blank"}
        className=" pv4 f3 bw2 bt b--near-white flex justify-between relative link black"
      >
        <div>
          <h2 className={`f3 fw6 ${isHovered && "underline"}`}>{item.title}</h2>
          <div className="f4 pt0 measure black-50 pb3">{item.subtitle}</div>
        </div>
      </motion.a>
    )
  }

  const rows = articles.map(item => <Item key={item.title} item={item} />)
  return (
    <motion.div
      key="writing"
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}
    >
      {rows}
    </motion.div>
  )
}

export default Writing
