function Btn(props) {
  return (
    <button className="ml-4 px-4 bg-blue-500 text-white rounded whitespace-nowrap"
      onClick={props.onClick}
    >{props.btnName}</button>
  )
}

export default Btn;