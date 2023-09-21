import * as React from "react";

export default function TBDBanner() {
  return (
    <div style={{padding: 8, textDecoration: "Window"}}>
      <i>
        <p>
          This section is not available yet. Please
          <a href="https://github.com/incepter/how-react-works/issues/new"
             target="_blank"> fill an issue.</a>
        </p>
        <p>
          While waiting for the newsletter, you can get notified when new
          content drops by following
          <a href="https://x.com/incepterr" target="_blank"> me on X.</a>
        </p>
      </i>
    </div>
  );
}
