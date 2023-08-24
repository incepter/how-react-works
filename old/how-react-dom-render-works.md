## How `ReactRoot.render` works

In this section, we will see explore how the following code works under the hood:

```tsx
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root")); // 1

function App() {
  return <h1>Hello, world!</h1>
}

root.render(<App />);  // 2
```

The very first steps to follow when creating a React application per the docs
is to call `createRoot` on a DOM `Element`, then call a `render` function on the
received `root` object.

### `createRoot` under the hood

All the work described in this section happens before rendering your application
and is done by React when preparing the `HostRoot` (your container).

#### Signature
```typescript
function createRoot(
  container: Element | Document | DocumentFragment,
  options?: CreateRootOptions,
): RootType {
  // [Native code]
}
```

Where the `CreateRootOptions` is:

```typescript
export type CreateRootOptions = {
  unstable_strictMode?: boolean, // StrictMode configuration at root level
  unstable_concurrentUpdatesByDefault?: boolean, // enable concurrent updates
  unstable_transitionCallbacks?: TransitionTracingCallbacks, // TransitionTracing stuff
  identifierPrefix?: string, // React Flight root's identifierPrefix
  onRecoverableError?: (error: mixed) => void, // called when react auto recovers from errors
  ...
};
```

#### Implementation

##### Capturing variables
Aside from Dev mode, the initial step by `createRoot` is to initialize enough
variables especially for optional options:

```typescript
// whether to enable the StrictMode for the entire root
let isStrictMode = false;
// used to decide whether our root is blocking or concurrent
let concurrentUpdatesByDefaultOverride = false;
// used by React Flight protocol, useId and useFormAction..
let identifierPrefix = '';
// called when react recovers from errors, fallback to console.error
let onRecoverableError = defaultOnRecoverableError;
// related to TransitionTracing, which is still obscure to me
let transitionCallbacks = null;

if (options !== null && options !== undefined) {
    if (options.unstable_strictMode === true) {
      isStrictMode = true;
    }
    if (
      // /!\ this is put behind a feature flag
      allowConcurrentByDefault &&
      options.unstable_concurrentUpdatesByDefault === true
    ) {
      concurrentUpdatesByDefaultOverride = true;
    }
    if (options.identifierPrefix !== undefined) {
      identifierPrefix = options.identifierPrefix;
    }
    if (options.onRecoverableError !== undefined) {
      onRecoverableError = options.onRecoverableError;
    }
    if (options.unstable_transitionCallbacks !== undefined) {
      transitionCallbacks = options.unstable_transitionCallbacks;
    }
}
```
