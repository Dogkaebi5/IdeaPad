import React, { useState } from "react"
import { useInput } from "../useInput";
import Btn from "./Btn";
import Input from "./Input";

function GridInput() {return (<input className="w-full col-span-4" />);}
function GridTitle({title}) {return (<div className="text-sm text-center">{title}</div>)}

function Solution(props){
  const actSubmit = (input) => {
    setIsShowSolution(!isShowSolution);
    setSolution(input);
    props.handleShowService(true);
  };

  const [inputVal, handleChange, handleSubmit, handleEnter] = useInput ("", actSubmit);
  const [isShowSolution, setIsShowSolution] = useState(false);
  const [solution, setSolution] = useState("");

  return (
    <div>
      <h2 className="mt-4 text-lg">III. 솔루션</h2>
      <div className="mt-2 flex item-center">
        {isShowSolution && <span className="w-full pl-2 bg-blue-500 text-white">{solution}</span>}
        {!isShowSolution && <Input inputVal={inputVal} onChange={handleChange} onKeyDown={handleEnter} />}
        <Btn onClick={handleSubmit} btnName={!isShowSolution? "확인" : "수정"} />
      </div>
      <div className="mt-2 grid grid-cols-5 gap-1 content-center">
        <GridTitle title={"사업 분류"}/><GridInput/>
        <GridTitle title={"시장 규모"}/><GridInput/>
        <GridTitle title={"이해 관계"}/><GridInput/>
        <GridTitle title={"법률/율리"}/><GridInput/>
        <GridTitle title={"지원금 여부"}/><GridInput/>
      </div>
    </div>
  );
}

export default Solution;