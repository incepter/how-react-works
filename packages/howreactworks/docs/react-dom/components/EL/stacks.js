export const S_01_CREATE_ROOT_1 = [
  {
    statement: `if (!isValidContainer(container)) {
  throw new Error('createRoot(...): Target container is not a DOM element.');
}`,
  },
  {
    statement: `let isStrictMode = false;
let identifierPrefix = '';
// ...other options

if (options) {
  if (options.unstable_strictMode === true) {
    isStrictMode = true;
  }
  // ...
}`,
  },
  {
    statement: `const fiberRoot = createContainer(
  container, // the host element
  ConcurrentRoot, // the root type, or RootTag
  null, // hydration callbacks
  isStrictMode, // options?.unstable_strictMode || false
  isConcurrentUpdatesByDefault,  // options?.unstable_concurrentUpdatesByDefault || false
  identifierPrefix, // options?.identifierPrefix || ''
  onRecoverableError, // options?.onRecoverableError || reportError || console.error
  transitionCallbacks, // options?.unstable_transitionCallbacks || null
);`,
  },
  {
    statement: "// Mark container as root\n" +
      "container.__reactContainer$randomValue = fiberRoot.current;",
  },
  {
    statement: "// Injet ReactDom dispatcher\n" +
      "Dispatcher.current = ReactDOMClientDispatcher;",
  },
  {
    statement: "return new ReactDOMRoot(fiberRoot);",
  },
]

export const S_02_ROOT_RENDER_1 = [
  {
    statement: `// 1\nconst current = container.current;`
  },
  {
    statement: `// 2\nconst lane = requestUpdateLane(current);`
  },
  {
    statement: `// 3\ncontainer.context = getContextForSubtree(parentComponent);`
  },
  {
    statement: `// 4\nconst update = createUpdate(lane);
update.payload = {element};
update.callback = callback;`
  },
  {
    statement: `// 5\nconst root = enqueueUpdate(current, update, lane);`
  },
  {
    statement: `// 6\nscheduleUpdateOnFiber(root, current, lane);`,
    isAsync: true,
    asyncCallback: `processRootScheduleInMicrotask(root);`,
  },
  {
    statement: `// 7\nentangleTransitions(root, current, lane);`
  },
];

export const S_02_ROOT_RENDER_2 = [
  {
    statement: `root.render(children);`,
    isAsync: true,
    asyncCallback: `processRootScheduleInMicrotask(root);`,
  },
  {
    statement: `triggerImportantDataFetch();`
  },
  {
    statement: `RegisterServiceWorker();`
  },
];
