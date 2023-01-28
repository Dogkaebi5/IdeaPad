import Input from "./Input";

function Service() {
  return (
    <div>
      <h2 className="mt-4 text-lg">VI. 문제 정의</h2>
      <div className="flex item-center mt-1"><Input placeholder={"누구를 위한"} />|<Input placeholder={"언제 사용"}/></div>
      <div className="flex item-center mt-1"><Input placeholder={"해결할 문제"} /><p className="mx-2 whitespace-nowrap">을/를</p></div>
      <div className="flex item-center mt-1"><Input placeholder={"해결 방법"} /></div>
      <div className="flex item-center mt-1"><Input placeholder={"제공 서비스"} /></div>
    </div>
  );
}

export default Service;