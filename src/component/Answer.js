import React, { useState } from "react";



function Answer(props) {
    return (
    <p key={props.id} className="text-sm">
      <p className="w-full pl-2 bg-blue-300 text-white">{props.id}. {props.item}</p>
      → 왜 " <span className="pl-2 pr-2 bg-white">{props.item}</span> " ?
    </p>
  );
  
}

export default Answer;
