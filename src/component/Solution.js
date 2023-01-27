import React from "react"

function Solution(){
  return (
    <div>
      <h2 className="mt-4 text-lg">III. 솔루션</h2>
      <div className="mt-2 flex item-center">
        <input className="w-full pl-2" />
        <button className="ml-4 px-4 bg-blue-500 text-white rounded whitespace-nowrap">확인</button>
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