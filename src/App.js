import * as ReactDOM from 'react-dom/client';
import Reason from "./component/Reason";
import { useInput } from "./useInput";

function createIssue(inputVal) {
  let root = ReactDOM.createRoot(document.getElementById('issueReason'));
  root.render(<Reason issue={inputVal}/>);
};

function App() {
  const [inputVal, handleChange, handleSubmit] = useInput('', createIssue);

  return (
    <div className="font-sans container mx-auto mt-4 p-2 shadow bg-sky-100 rounded ">
      <div>
        <h1 className="text-xl font-semibold text-center">IDEA Pad</h1>
        <h2 className="mt-4 text-lg">I. 문제점</h2>
        <div className="flex item-center">
          <input
            className="w-full"
            type="text"
            value={inputVal}
            onChange={handleChange}
          />
          <button
            className="ml-4 px-4 bg-blue-500 text-white rounded whitespace-nowrap"
            onClick={handleSubmit}
          >확인</button>
        </div>
      </div>
      <div id="issueReason"></div>
    </div>
  );
}

export default App;
