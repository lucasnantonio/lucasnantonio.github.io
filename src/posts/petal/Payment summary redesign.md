---
path: "/blog/payment-summary-redesign"
date: "2019-05-04"
title: Payment summary redesign
category: Petal
topics:
  - design
published: true
role:
  - design
cover_image: "../../images/hero-petal.png"
Impact: number of tickets about minimum payment before and after; engagement with summary feed event;
---

# Settings page redesign

## Problem

### 1. Users were unable to find the minimum payment amount

The goal of the original design on the payments page was to keep the minimum payment always one tap or interaction away from users, as a way to nudge them towards bigger, more healthy payment amounts, contrary to what most credit card companies do. The hypothesis was that by using the payment amount slider, they would find the minimum amount for themselves. This was proved wrong by the large amount of support tickets related to being unable to find minimum payment in-app.

### 2. Statement summary was difficult to understand and out of sync with statement PDF

The statement summary component is a simpler version of the user's statement PDF, with the goal of providing the necessary information without having users download a PDF every time they wanted to check an amount or line item. It was one of those screens where more information was added iteratively until the thing itself didn't make much sense anymore.

### 3. When users tap the Statement event on their feed, nothing shows up.

Every event on a user's feed is tappable and opens up a detailed view. Since there were known problems with its original design, and didn't accurately represent the user's statement state, the team never took the time to plug it into the feed events, which led to a suboptimal experience.

## Exploration

These three problems combined pointed at a solution which was, initially, just to add minimum payment to the statement summary:

[image]

This, however, made it even more difficult to parse. By taking a step back, we explored a different layout which would allow for better information hierarchy.

The designs went through multiple versions and getting the right labels and math done was very tricky, but eventually we arrived at three main directions:

### Option 1

The summary as a live updating ledger of your remaining statement balance. This meant that the main number was the remaining amount, which updates as users make their payments.
The statement total balance, printed on the PDF, which doesn't change, is lower on the hierarchy.

### Option 2

The summary as a simple summary of your PDF, presented in a more friendly way. It wouldn't self-update to avoid unnecessary complexity.

### Option 3

A hybrid between 1 and 2. The solution we chose presents, on the top, an exact copy of what users would find in their PDF. The bottom rows, then, are used to give updates based on newly made payments.

This solution was chosen based on three main points:

1. It is more consistent with the statement PDF's information flow.
2. It makes the math easier, since you can read it from top-to-bottom to arrive at the remaining balance.
3. When tapping the feed items, the users can now see the same blue number being highlighted on both screens.

> Disclaimer about color contrast: I'm aware that these designs don't present enough color contrast to be compliant with WCGA's guidelines. It's a compromise I had to make at the time when the app's color schemes were under a wider discussion by the design team.
