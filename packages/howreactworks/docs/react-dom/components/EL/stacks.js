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


export const S_05_WORK_LOOP_PERFORM_CW_01 = [
  {
    statement: `if ((executionContext & (RenderContext | CommitContext)) !== NoContext) {
  throw new Error('Should not already be working.');
}`,
  },
  {
    statement: `const originalCallbackNode = root.callbackNode;
const didFlushPassiveEffects = flushPassiveEffects();

if (didFlushPassiveEffects && root.callbackNode !== originalCallbackNode) {
  return null;
}`,
  },
  {
    statement: `let lanes = getNextLanes(
  root,
  root === workInProgressRoot ? workInProgressRootRenderLanes : NoLanes,
);
if (lanes === NoLanes) {
  return null;
}`,
  },
  {
    statement: `const shouldTimeSlice =
  !includesBlockingLane(root, lanes) &&
  !includesExpiredLane(root, lanes) &&
  (disableSchedulerTimeoutInWorkLoop || !didTimeout);`,
  },
  {
    statement: `let exitStatus = shouldTimeSlice
  ? renderRootConcurrent(root, lanes)
  : renderRootSync(root, lanes);`,
  },
  {
    statement: `if (renderWasSuccessfull) {
  root.finishedWork = finishedWork;
  root.finishedLanes = lanes;
  finishConcurrentRender(root, exitStatus, finishedWork, lanes);
} else {
  // manage errors and suspense
}`,
  },
  {
    statement: `ensureRootIsScheduled(root);
return getContinuationForRoot(root, originalCallbackNode);`,
  },
]

export const S_05_WORK_LOOP_RENDER_SYNC_01 = [
  {
    statement: `const prevExecutionContext = executionContext;
executionContext |= RenderContext;
const prevDispatcher = pushDispatcher(root.containerInfo);`,
  },
  {
    statement: `if (workInProgressRoot !== null || workInProgressRootRenderLanes !== lanes) {
   // [...] some work
   // highlight-next-line
   prepareFreshStack(root, lanes);
}`,
  },
  {
    statement: `do {
  try {
    if (didSuspendDuringHydration) {
      resetWIPStack();
      workInProgressRootExitStatus = RootDidNotComplete;
      break;
    }
    
    // [...] Other branches to break when needed

    // highlight-next-line
    workLoopSync();
    // Why a break here you wonder ? Hint: there is no break in the catch block
    break;
  } catch (e) {
    // highlight-next-line
    handleThrow(root, e);
  }
} while (true)`,
  },
  {
    statement: `if (didSuspendInShell) {
  root.shellSuspendCounter++;
}

executionContext = prevExecutionContext;
workInProgressRoot = null;
workInProgressRootRenderLanes = NoLanes;`,
  },
  {
    statement: `finishQueueingConcurrentUpdates();
return workInProgressRootExitStatus;`,
  },
]
