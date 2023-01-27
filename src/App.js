import { useState } from "react";
import Reason from "./component/Reason";
import Solution from "./component/Solution";
import { useInput } from "./useInput";

// function createIssue(inputVal) {
//   let root = ReactDOM.createRoot(document.getElementById('issueReason'));
//   root.render(<Reason issue={inputVal}/>);
// };
function showIssue(){}

function App() {
  const [inputVal, showReason, issueChange, issueSubmit, handleEnter, handleBool] = useInput('', showIssue);
  const [showSolution, setShowSolution] = useState(false);
  const getShow = (x) => {setShowSolution(x);}
  const shutSolution = () => {setShowSolution(false)}

  return (
    <div className="font-sans container mx-auto mt-4 p-2 shadow bg-sky-100 rounded ">
      <div>
        <h1 className="text-xl font-semibold text-center">IDEA Pad</h1>
        <h2 className="mt-4 text-lg">I. 문제점</h2>
        <div className="flex item-center">
        {showReason && <span className="w-full pl-2 bg-blue-500 text-white">{inputVal}</span>}
        {!showReason && <input
            className="w-full pl-2"
            type="text"
            value={inputVal}
            onChange={issueChange}
            onKeyDown={handleEnter}
          /> }
          <button
            className="ml-4 px-4 bg-blue-500 text-white rounded whitespace-nowrap"
            onClick={() => {issueSubmit(); handleBool(); shutSolution()}}
          >{!showReason? "확인" : "수정"}</button>
        </div>
      </div>
      {showReason && <Reason issue={inputVal} getShow={getShow}/>}
      {showSolution && <Solution/>}
      
    </div>
  );
}

export default App;
