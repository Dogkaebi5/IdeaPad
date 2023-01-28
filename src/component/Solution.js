import React, { useState } from "react"
import { useInput } from "../useInput";

function Solution(){
  const actSubmit = () => {setIsShowSolution(!isShowSolution)};
  const [inputVal, handleChange, handleSubmit, handleEnter] = useInput ("", actSubmit);
  const [isShowSolution, setIsShowSolution] = useState(false);

  return (
    <div>
      <h2 className="mt-4 text-lg">III. 솔루션</h2>
      <div className="mt-2 flex item-center">
        {isShowSolution && <span className="w-full pl-2 bg-blue-500 text-white">{inputVal}</span>}
        {!isShowSolution && <input className="w-full pl-2"
          value={inputVal}
          onChange={handleChange}
          onKeyDown={handleEnter}
        />}
        <button
          className="ml-4 px-4 bg-blue-500 text-white rounded whitespace-nowrap"
          onClick={handleSubmit}
        >{!isShowSolution? "확인" : "수정"}</button>
      </div>
      <div className="mt-2 grid grid-cols-5 gap-2 content-center">
        <div className="text-sm text-center">사업 분류</div>
        <input className="w-full col-span-4" />
        <div className="text-sm text-center">시장 규모</div>
        <input className="w-full col-span-4" />
        <div className="text-sm text-center">이해 관계</div>
        <input className="w-full col-span-4" />
        <div className="text-sm text-center">법률/율리</div>
        <input className="w-full col-span-4" />
        <div className="text-sm text-center">지원금 여부</div>
        <input className="w-full col-span-4" />
      </div>
    </div>
  );
}

export default Solution;