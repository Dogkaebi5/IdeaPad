import React from "react";

function Answer(props) {
    return (
    <p key={props.id} className="pl-2 text-sm">
      → 왜 " <span className="bg-white">{props.item}</span> "
    </p>
  );
  
}

export default Answer;
