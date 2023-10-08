# How React Works

This is a deep dive into react internals and how its code is written.
We will see the concepts used, the key code-paths and the mysteries behind React.

This is a work in progress and far from being finished. You can [follow me on X](https://twitter.com/incepterr)
to be notified by the updates while waiting for a newsletter or other format.

This project can be found on [GitHub pages](https://incepter.github.io/how-react-works/).

## Note to initial viewers & collaborators

So the purpose of this project is to dive into the implementation details of
React and explain how things works. It is not actual coding with more of a
documentation. I just started few weeks ago and my main
focus is on React code exploration and information gathering.

This project would need a lot of help from you guys if possible.
For example, here is the list of things I would like you to help me with, please:

- Feedback, feedback... The most important thing for me is how you find the
  project ? Is the idea interesting, or I should go invest my efforts
  somewhere else ?
- Rewording, I'm bad at it, and sometimes I think that I explained something very
  good, but in reality it is only me that will understand. For this, please feel
  free to criticize any sentence and fill a PR with either a `todo` annotation
  around it, or if you find a better wording, why not.
- Deployment, this project should be automatically deployed in either github
  pages or at Vercel.
- Figures and diagrams: People will understand better with figures mostly
  for stack traces to resume the work of functions, I still need to make those
  and put them in all functions. This can be a React component that I can import
  into the markdown files and use directly.
- Many more... If you think of anything else, please fire an issue or a PR to
  add it here in this readme.

### How to run the project

```shell
git clone https://github.com/incepter/how-react-works
pnpm i -r
cd packages/howreactworks
pnpm start
```
