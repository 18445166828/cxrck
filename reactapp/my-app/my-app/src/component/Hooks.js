import React, {Fragment, useState, useEffect,useCallback} from 'react';

const useCount = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('更新');//? 为什么会输出两次呢？
        document.title = `数量为${count}`
    },[count])
    const setDec = useCallback(
        () => {
            setCount(count - 1)
        },
        [count],
    )
    const setInc = useCallback(
        () => {
            setCount(count + 1)
        },
        [count]
    )
    return [count,setDec,setInc];
}

const Counter = () => {
    const [count,setDec,setInc] = useCount();
    console.log(useState());
    return (
        <Fragment>
            <button onClick={setDec}>-</button>
            <span>{count}</span>
            <button onClick={setInc}>+</button>
        </Fragment>
    )
}

export default Counter;