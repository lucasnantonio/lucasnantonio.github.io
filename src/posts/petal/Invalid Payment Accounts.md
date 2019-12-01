---
path: "/blog/petal-onboarding"
date: "2019-05-04"
title: "Invalid Payment Accounts"
category: "Petal"
color: "#f2f2f2"
cover_image: "../../images/hero-petal.png"
published: false
topics:
  - design
---

# Invalid account error

## Problem

When a member schedules a payment, we don't have a way of checking wether that account really exist or wether the details are accurate. We only get an error after the system tried to execute the payment. Before, the app didn't reflect the fact that their account was invalid, which led to multiple payments failing in sequence.

## Hypothesis

- By flagging to the user that the account they have submitted is invalid, we can nudge them to verify the account's details and reduce the number of failed attempts.

## Goals

- Reduce number of failed payment attempts using invalid account details.

## Results

XX% Reduction in failed attempts

## Before

## After
