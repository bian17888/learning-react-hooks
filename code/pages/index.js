/**
 * react hook demo - useState
 */
import React, {useState} from 'react';

const InputElement = ()=> {
    const [inputText, setInputText] = useState('')
    const [historyList, setHistoryList] = useState([]);

    return (
        <>
            <p>
                <input 
                    placeholder="enter" 
                    onChange={(e)=>{
                        setInputText(e.target.value);
                        setHistoryList([...historyList, e.target.value]);
                    }}/>
            </p>
            <p>{inputText}</p>
            <hr />
            <ul>
                {historyList.map((item, index)=>{
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </>
    )
    
}

export default InputElement;