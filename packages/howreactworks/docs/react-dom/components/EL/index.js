import * as React from "react";
import "./ELComponent.styles.css";
import CodeBlock from '@theme/CodeBlock';
import vsDarkTheme from 'prism-react-renderer/themes/vsLight';
import vsLightTheme from 'prism-react-renderer/themes/vsDark';
import githubTheme from 'prism-react-renderer/themes/github';

let separation = 30;

export function EventLoopComponent(props) {
  let {
    // an array of objects representing statements
    // a stack has the following properties
    // - statement: the code that this statement contains
    // - isAsync: whether this is an async fn (setTimeout, fetch...)
    // - asyncCallback: the callback that will be executed asynchronously
    stack = [],
    // the current index
    index: indexProp = 0,
    showCallbackQueue = true
  } = props;

  let index = indexProp;
  let stackLength = stack.length;
  if (!stackLength) {
    return null;
  }
  // this will keep index between 0 and the length of the stack
  // if (index >= stackLength) {
  //   index = (index + stackLength) % stackLength;
  // }

  // this stack is marked as "already executed"
  let executedStack = stack.slice(0, Math.min(index, stackLength - 1));

  // this stack is what's scheduled in the callback queue
  // it has the asyncCallback of async statements
  let callbackQueueStack = executedStack
    .filter((t) => t.isAsync)
    .map((t) => ({
      fromAsync: true,
      statement: t.asyncCallback
    }));

  // the maxIndex is the given stack length + what's present in the callback queue
  let maxIndex = stackLength + callbackQueueStack.length;

  if (index >= maxIndex) {
    index = (index + maxIndex) % maxIndex;
    executedStack = stack.slice(0, Math.min(index, stackLength - 1));
    callbackQueueStack = executedStack
      .filter((t) => t.isAsync)
      .map((t) => ({
        fromAsync: true,
        statement: t.asyncCallback
      }));
  }

  let remainingStack;
  let currentStatement;

  if (index >= stackLength) {
    if (index > maxIndex) {
      throw new Error("Index is too bug " + index);
    }

    let stackToUse = [...stack, ...callbackQueueStack];

    currentStatement = stackToUse[index];
    executedStack = stackToUse.slice(0, index);
    remainingStack = stackToUse.slice(index + 1);
    callbackQueueStack = [];
  } else {
    currentStatement = stack[index];
    remainingStack = stack.slice(index + 1);
  }

  let cbQueueIndex = 0;

  // console.log("====", useDocusaurusContext())

  return (
    <div className="el_container">
      <div className="el_callstack">
        {executedStack.map((executed) => (
          <StatementElement key={executed.statement} data={executed}/>
        ))}
        {currentStatement && (
          <StatementElement
            isCurrent
            data={currentStatement}
            key={currentStatement.statement}
          />
        )}
        {remainingStack.map((remaining) => (
          <StatementElement data={remaining} key={remaining.statement}/>
        ))}
      </div>
      {showCallbackQueue && (
        <div className="el_callback_queue">
          {callbackQueueStack.map((cQueue) => (
            <StatementElement
              style={{
                bottom:
                  cbQueueIndex-- * separation +
                  callbackQueueStack.length * separation
              }}
              data={cQueue}
              key={cQueue.statement}
              className="el_cb_queue_element"
            />
          ))}
        </div>
      )}
    </div>
  );
}

function StatementElement({
                            data,
                            className: classNameProp,
                            style,
                            isCurrent
                          }) {
  let {statement, fromAsync} = data;

  let className = classNameProp;
  if (!className) {
    className = `el_cs_element ${isCurrent ? "el_cs_current" : ""} ${
      fromAsync ? "el_cs_element_async" : ""
    }`;
  }
  return (
    <pre style={style} className={className}>
      <CodeBlock language="ts" theme={githubTheme}>
        {fromAsync ? "🔂" : ""}
        {statement}
      </CodeBlock>
    </pre>
  );
}

export function AnimatedEventLoop(props) {
  let [currentIndex, setCurrentIndex] = React.useState(0);
  let {delay = 2000, ...remainingProps} = props;

  React.useEffect(() => {
    let id = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, delay);
    return () => clearInterval(id);
  }, [delay]);

  return <EventLoopComponent {...remainingProps} index={currentIndex} />
}
