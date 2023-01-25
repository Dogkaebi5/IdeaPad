import React from "react";
import { useState } from "react";
import { useInput } from "../useInput";
import Answer from "./Answer";

function Reason(props) {
  const [inputVal, handleChange, handleSubmit] = useInput('', addReason);
  const [reasons, setReasons] = useState([{
    id: '0',
    value: props.issue,
  }]);

  function addReason(inputVal) {
    setReasons([...reasons, {
        id: reasons.length + "",
        value: inputVal,
      }]);
    }

  return (
    <div>
      <div>
        <h2 className="mt-4 text-lg">II. 문제분석</h2>
        <div>
          {reasons.map((item) => {
            return <Answer id={item.id} item={item.value}/>;
          })}

          <div className="flex item-center">
            <input
              className="w-full"
              value={inputVal}
              onChange={handleChange}/>
            <button
              className="ml-4 px-4 bg-blue-500 text-white rounded whitespace-nowrap"
              onClick={handleSubmit}
            >확인</button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="mt-4 text-lg">III. 솔루션</h2>
        <input className="w-full"/>
        <div className="mt-2 grid grid-cols-5 gap-2 content-center">
          <div className="text-sm text-center">사업 분류</div><input className="w-full col-span-4"/>
          <div className="text-sm text-center">시장 규모</div><input className="w-full col-span-4"/>
          <div className="text-sm text-center">이해 관계</div><input className="w-full col-span-4"/>
          <div className="text-sm text-center">법률/율리</div><input className="w-full col-span-4"/>
          <div className="text-sm text-center">지원금 여부</div><input className="w-full col-span-4"/>
        </div>
      </div>
    </div>
  );
}

export default Reason;
