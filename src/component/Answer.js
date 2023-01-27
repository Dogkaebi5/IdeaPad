function Answer(props) {
  return (
    <div className="text-sm">
      {props.id > 0 && 
        <div>
          <p className="w-full bg-blue-300 text-white">❗ {props.item}</p>
          {props.show && <p className="mt-2">❔ 왜 " <span className="pl-2 pr-2 bg-white">{props.item}</span> " ?</p>}
        </div>
      }
      </div>
    
  );
}

export default Answer;
