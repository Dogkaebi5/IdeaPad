import React from "react";
import { useState } from "react";
import { useInput } from "../useInput";
import Answer from "./Answer";

function Reason(props) {
  const [inputVal, handleChange, handleSubmit, handleEnter] = useInput("", addReason);
  const [reasons, setReasons] = useState([
    { /* id: '0', value: props.issue, */ },
  ]);
  const [isShowInput, setIsShowInput] = useState(true);

  function addReason(inputVal) {
    setReasons([...reasons,
      {
        id: reasons.length + "",
        value: inputVal,
      },]);
    props.handleShowSolution(true);
    if(reasons.length > 4){setIsShowInput(false);}

  }
  return (
    <div>
      <div>
        <h2 className="mt-4 text-lg">II. 문제분석</h2>
        <p className="text-sm mt-1">왜 " <span className="pl-2 pr-2 bg-white">{props.issue}</span>"? </p>
        <div>
          {reasons.map((item) => {
            return (<Answer key={item.id} item={item.value} id={item.id} show={isShowInput}/>);
          })}
        </div>
        {isShowInput && (
          <div className="mt-2 flex item-center">
            <input className="w-full pl-2"
              value={inputVal}
              placeholder={"이유"}
              onChange={handleChange}
              onKeyDown={handleEnter}
            />
            <button className="ml-4 px-4 bg-blue-500 text-white rounded whitespace-nowrap"
              onClick={handleSubmit}
            >확인</button>
          </div>
        )}
        {!isShowInput && (
          <div className="flex justify-end mt-2">
            <button className="px-4 bg-blue-500 text-white rounded"
              onClick={() => {setIsShowInput(!isShowInput);}}
            >이유추가</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Reason;
