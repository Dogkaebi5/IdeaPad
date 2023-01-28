import { useState } from "react";

export function useInput(initialVal, submitAct) {
    const [inputVal, setInputVal] = useState(initialVal);

    const handleChange = (e) => { setInputVal(e.target.value);};

    const handleSubmit = () => {submitAct(inputVal);}

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            handleSubmit();
        }
    }

    return [inputVal, handleChange, handleSubmit, handleKeyPress];
}