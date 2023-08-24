
# Entry

## `createRoot`

The implementation of the `createRoot` function does a lot of work and steps,
the following illustration gives an overall idea of the work, we will go through
each step in details just after:
1. Ensure that the given `Node` is valid as a react container
2. Warn in dev about wrong chosen root `Node`
3. Close over the received options
4. Create an `Opaque` Fiber root object
    1. [Create a `FiberRoot` object](https://github.com/facebook/react/blob/e6fae308e9300ca545003ac147cc7e4e541f561c/packages/react-reconciler/src/ReactFiberRoot.js#L47)
    2. assign callbacks options
    3. [Create a `FiberNode` object as a `HostRootFiber`](https://github.com/facebook/react/blob/e6fae308e9300ca545003ac147cc7e4e541f561c/packages/react-reconciler/src/ReactFiber.js#L134)
    4. Reference the `FiberNode` as `current` in the `FiberRoot`
    5. Reference the `FiberRoot` as `stateNode` in the `FiberNode`
    6. Create an `initialState` object with the initialChildren and hydration mode and cache
        1. If cache is enabled, create a cache object and attach it into `initialState`
    7. Attach the `initialState` as  `memoizedState` to `FiberRoot`
    8. Create and attach an `UpdateQueue` to the `FiberNode`
    9. Return the `FiberRoot` object
5. Mark the given `Node` as Root to the created `FiberRoot.current` object
6. Attach the `ReactDOMClientDispatcher` as current `Dispatcher`
7. Listen to all browsers events on the given `Node` element
8. Return an instance of `ReactDOMRoot` referencing the `FiberRoot` itself

## `root.render`

The `root.render` function is defined as `ReactDOMRoot.prototype.render`
in the [`ReactDOMRoot.js`](https://github.com/facebook/react/blob/e6fae308e9300ca545003ac147cc7e4e541f561c/packages/react-dom/src/client/ReactDOMRoot.js#L104)
file. Break-through:
1. Close over the `FiberRoot`
2. Warn in dev about incompatible `.render` element tree
3. Call on a `updateContainer` function with the given tree and `FiberRoot`
   1. Invoke in dev some internal `onScheduleRoot` events
   2. Reference the `FiberNode` as current from the `FiberRoot`
   3. Detect the current `updateLane`
      1. When not in a ConcurrentContext, return NoLanes
      2. When an render phase update, __todo__
   4. Create an `update` object with the following
      1. payload as `{element}` where element is out react tree
      2. callback as a function to be called after render is finished
      3. Callback is passed as null in this particular case (root.render)
   5. Add this update object to the `updateQueue` of the `FiberNode`
   6. Schedule a `'render'` on the root `FiberNode`
      1. Mark the `FiberRoot` as updated:
         1. Merge the `root.pendingLanes` with the current `updateLane`
         2. Clear the `root.suspendedLanes` and `root.pingedLanes`
      2. A bunch of checks that are falsy so they are skipped
         1. 
      3. 
   7. Entangle transitions
