import { useState } from "react";

export function useInput(initialVal, submitAct) {
    const [inputVal, setInputVal] = useState(initialVal);
    const [bool, setBool] = useState(false);

    const handleChange = (e) => { setInputVal(e.target.value);};

    const handleSubmit = () => {
        submitAct(inputVal);
    }

    const handleBool = () => {
        setBool(!bool)
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            handleSubmit();
        }
    }

    return [inputVal, bool, handleChange, handleSubmit, handleKeyPress, handleBool];
}