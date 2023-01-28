function Input(props) {
  return(
      <input
        className="w-full pl-2"
        placeholder={props.placeholder}
        value={props.inputValue}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      />
    )
}

export default Input;