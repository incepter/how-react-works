---
sidebar_position: 1
---

# Introduction

Hi, and welcome to this blog post series aiming to explain how react works
under the hood.

## What is this

This is a deep dive into react internals with the goal to explain the concepts
put into making react the tool you've been using for a couple of years now.

This is not a course or tutorial on how to use react, but more of an explanation
of react's codebase. You don't need to know any of this to be a creative and
successful react developer.

The goal of this project is to explain how all the these things are made into
react, the concepts used and the important "code paths" to mention:

- How createRoot() works
- How root.render() works
- How the work loop works
- How work tags work
- How Hooks work
- How each hook works
- How effects work
- How the scheduler works
- How suspense works
- How StrictMode works
- How feature flags work
- How bundling works
- How renderers work
- How Dispatcher works
- How Server side rendering work
- How RSC works
- How Float/Fizz work
- And so on...

This is an ambitious list of what this blog post series may achieve over time.
My theory is that this list can be made by different people initiatives.

## Motivations

Well, the react codebase is surely intimidating and you will be overwhelmed
each time you visit it. I struggled years trying to understand it a little, and
I am still very far from that.

This project would explain all the needed pieces to be comfortable with react's
codebase, not an easy task, but let's dream big and get going.

## Audience and requirements

This blog post series is destined to people that have used React for few years,
or that are willing to contribute to React, or that are curious to know how
React is written and how its code looks like.

The readers should then be familiar with the following React concepts:
- Component types
- Component lifecycle
- Elements Vs Components
- Effects, hooks
- Commit
- Reconciliation
And so on.

Understanding the requirements will be automatic if you've used React few years,
and this will help shorten these blog posts and focus on the main goal.

## How will it go

Each section would contain a lot of links towards React's codebase and
code snippets of either real react code or a simplified versions.

I will try to follow the natural react order, ie: I will start by explaining
the very first steps that we are told to do to use React: `createRoot`,
then the `root.render` function. Then will follow with what is done during
render, effects...


