import { useState } from "react";
import Reason from "./component/Reason";
import { useInput } from "./useInput";

// function createIssue(inputVal) {
//   let root = ReactDOM.createRoot(document.getElementById('issueReason'));
//   root.render(<Reason issue={inputVal}/>);
// };


function App() {
  const [inputVal, issueChange, issueSubmit] = useInput('', showIssue);
  const [show, setShow] = useState(false);

  function showIssue() {
    setShow(!show);
  }

  return (
    <div className="font-sans container mx-auto mt-4 p-2 shadow bg-sky-100 rounded ">
      <div>
        <h1 className="text-xl font-semibold text-center">IDEA Pad</h1>
        <h2 className="mt-4 text-lg">I. 문제점</h2>
        <div className="flex item-center">
        {show && <span className="w-full pl-2 bg-blue-500 text-white">{inputVal}</span>}
        {!show && <input
            className="w-full"
            type="text"
            value={inputVal}
            onChange={issueChange}
          /> }
          <button
            className="ml-4 px-4 bg-blue-500 text-white rounded whitespace-nowrap"
            onClick={issueSubmit}
          >{!show? "확인" : "수정"}</button>
        </div>
      </div>
      {show && <Reason issue={inputVal}/>}
    </div>
  );
}

export default App;
