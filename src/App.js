import { useState } from "react";
import Btn from "./component/Btn";
import Input from "./component/Input";
import Reason from "./component/Reason";
import Service from "./component/Service";
import Solution from "./component/Solution";
import { useInput } from "./useInput";

// function createIssue(inputVal) {
//   let root = ReactDOM.createRoot(document.getElementById('issueReason'));
//   root.render(<Reason issue={inputVal}/>);
// };

function App() {
  const issueSubmit = (inputVal) => {
    setIssue(inputVal);
    setIsShowSolution(false);
    setIsShowService(false);
    setIsSubmitIssue(!isSubmitIssue);
  }
  const [inputVal, handleIssueChange, handleIssueSubmit, handleEnter] = useInput('', issueSubmit);
  
  const [isSubmitIssue, setIsSubmitIssue] = useState(false);
  const [isShowSolution, setIsShowSolution] = useState(false);
  const [isShowService, setIsShowService] = useState(false);
  
  const [issue, setIssue] = useState("");

  const showingSolution = (isShow) => {setIsShowSolution(isShow);};
  const showingService = (isShow) => {setIsShowService(isShow);};

  return (
    <div className="font-sans container mx-auto mt-4 p-2 shadow bg-sky-100 rounded ">
      <div>
        <h1 className="text-xl font-semibold text-center">IDEA Pad</h1>
        <h2 className="mt-4 text-lg">I. 문제점</h2>
        <div className="flex item-center">
          {isSubmitIssue && <span className="w-full pl-2 bg-blue-500 text-white">{issue}</span>}
          {!isSubmitIssue && <Input inputVal={inputVal} onChange={handleIssueChange} onKeyDown={handleEnter}/>}
          <Btn onClick={handleIssueSubmit} btnName={!isSubmitIssue? "확인" : "수정"} />
        </div>
      </div>
      {isSubmitIssue && <Reason issue={issue} handleShowSolution={showingSolution}/>}
      {isShowSolution && <Solution handleShowService={showingService} />}
      {isShowService && <Service/>}
    </div>
  );
}

export default App;
