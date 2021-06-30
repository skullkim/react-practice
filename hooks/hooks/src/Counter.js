import React, {useState, useEffect} from 'react';

const Counter = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log('effect');
        console.log(value);
        return () => {
            console.log('cleanup');
            console.log(value);
        };
    }, [value]);

    return (
        <div>
            <p>{value}</p>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button>
        </div>
    )
}

export default Counter;