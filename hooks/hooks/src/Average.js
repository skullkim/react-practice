import React, {useState, useMemo, useCallback, useRef} from 'react';

const getAverage = (numbers) => {
    console.log('calculating average');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const avg = useMemo(() => getAverage(list), [list]);
    const inputE1 = useRef(null);

    const onChange = useCallback((e) => {
        setNumber(e.target.value);
    }, []);//컴포넌트가 처음 렌더링 될때만 함수 생성

    const onInsert = useCallback((e) => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputE1.current.focus();
    }, [number, list]);

    return (
        <div>
            <input type="text" value={number} onChange={onChange} ref={inputE1}/>
            <button onClick={onInsert}>confirm</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                average: {avg}
            </div>
        </div>
    );
}

export default Average;
