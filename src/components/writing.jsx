import React from "react"

function Writing() {
  const articles = [
    {
      title: "Getting the O-1 US Visa as a designer",
      url:
        "https://uxdesign.cc/getting-the-o-1-us-visa-as-a-designer-5ff6ee04869f",
    },
    {
      title: "A better way to gather real-time user feedback",
      url:
        "https://medium.com/petal/a-new-way-to-gather-real-time-user-feedback-58ce2ab5e9d",
    },
    {
      title: "Automated Research: Talking to users, on repeat.",
      url: "https://medium.com/petal/automated-research-69b762be1d8c",
    },
    {
      title: "Listening to user feedback",
      url:
        "https://medium.com/nubank-design/listening-to-user-feedback-b8380a37e781",
    },
    {
      title: "How we designed our Bank Account — NuConta Part II",
      url: "https://medium.com/nubank-design/nuconta-part-ii-685b446addc6",
    },
    {
      title: "What it feels like to become a designer",
      url:
        "https://medium.com/@lucasnantonio/to-my-fellow-designers-and-architects-97f3526c7cfc",
    },
    {
      title: "Why ❤️ trumps 👏",
      url:
        "https://medium.com/@lucasnantonio/why-%EF%B8%8F-trumps-8766ddc0c0e6",
    },
    {
      title: "First steps for better UX research",
      url:
        "https://medium.com/nubank-design/first-steps-for-better-ux-research-6fd863af7c6d",
    },
    {
      title: "Design Principles at Nubank",
      url:
        "https://medium.com/nubank-design/design-principles-at-nubank-d14317715bb1",
    },
  ]
  const rows = articles.map(item => (
    <div className="pv4 f4 bw2 bt b--near-white ">
      <a href={item.url} target={"_blank"} className="link black">
        {item.title}
      </a>
    </div>
  ))
  return <div>{rows}</div>
}

export default Writing
