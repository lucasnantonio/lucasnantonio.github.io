---
path: "/blog/petal-insights"
date: "2020-03-01"
title: Insights
subtitle: Helping customers control their spend
problem: How can we help new-to-credit customers understand and control their spend?
solution: Hackaton project that became one of our main threads of work for the quarter.
impact: Insights satisfaction score is 40% higher than other app sections.
myrole: Product design & prototyping.
category: Petal
topics:
  - Product Design
published: true
cover_image: "../../images/petal/petal-insights-13.png"
color: "#FFE6E6"
cover: true
team:
  - Josh Kaplan
link: http://www.petalcard.com
link_label: Petalcard.com
learnings:
  - Hackathons are great. The team was highly engaged and we shipped an amazing feature users love.
  - In areas where personal preference is divisive, such as budgeting, "disagree & commit" is a highly valuable principle to keep the team moving. Ship a reasonable version, with well-documented hypothesis and assumptions, and learn from there.
  - We didn't need advanced algorithms to deliver value to 80% of users. Most of their transactions tend to be with the same merchants and can be categorized with simple rules. Getting the other 20% right is another story, but not needed for an MVP like ours.
---

> "How might we help new-to-credit customers understand and control their spend so they're more comfortable and responsible using the Petal card?"

## Customer outcomes

1. Understand if my spend is trending up or down compared to the past
2. Understand where are my biggest opportunities to cut back

## Design questions

1. Which visual representations are best suited for each outcome?
2. How should we break down spend? By categories, by merchants, by place?
3. How should we group spend across time? Daily, weekly, monthly?
4. What is the hierarchy? What is more important?
5. How simple or how deep should we let the data exploration be?

![](../../images/petal/total-spend.png)
![](../../images/petal/category-spend.png)
![](../../images/petal/insights-nav.png)

## Releasing V1 as a way to learn

Since this was a hackathon, in 2 days we were ready to ship a version that displayed total spend, categories and merchant spend, and recurring subscriptions. We were eager to put it out to some users and hear their feedback.

<div style="background: #BCEDFF" class="w-100 pa4 tc">
  <video class="w-100 mw5 br2" autoplay muted loop>
  <source src="../../images/petal/insights-1.mp4" type="video/mp4">
  </video>
</div>
<div style="background: #BCEDFF" class="w-100 pa4 tc mt5">
  <video class="w-100 mw5 br2" autoplay muted loop>
  <source src="../../images/petal/petal-feedback-flow.mp4" type="video/mp4">
  </video>
</div>

## Learnings from user feedback

Using our [contextual feedback widget](/blog/petal-feedback), we quickly learned that [1] customers loved the new page and [2] they were eager to see more and have more controls. A few highlights:

1. Customers would like to click on a category and see the purchases contained in it.

2. Customers would like to change the category associated with a purchase.

3. Customers would like to change the date ranges for their dashboard.

Here's an example of how we'd allow for a deep dive in a merchant or category:

<div 
style="background: #bdf5e8" 
class=" w-100 pa4 tc mt5">
  <video class="w-100 mw5 br2" autoplay muted loop>
  <source src="../../images/petal/insights-2.mp4" type="video/mp4">
  </video>
</div>

Which gives a chance to customize the theme based on the merchant's logo dominant color:

![](../../images/petal/insights-colors-4.png)

And here's a proposal for date range editing:

<div 
style="background: #BCEDFF" 
class=" w-100 pa4 tc mt5">
  <video class="w-100 mw5 br2" autoplay muted loop>
  <source src="../../images/petal/insights-4.mp4" type="video/mp4">
  </video>
</div>

This is just the beginning of Insights at Petal. Keep sending us your feedback :)
