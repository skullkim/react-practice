import React, {useState} from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        {id: 1, text: 'a'},
        {id: 2, text: 'b'},
        {id: 3, text: 'c'},
        {id: 4, text: 'd'},
    ]);
    const [input_text, setInputText] = useState('');
    const [next_id, setNextId] = useState(5);
    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {
        const next_name = names.concat({
            id: next_id,
            text: input_text,
        });
        setNextId(next_id + 1);//next_id값 1 증가
        setNames(next_name);//name 값을 업데이트 한다
        setInputText('');//text를 비운다
    }
    const name_list = names.map(name => <li key={name.id}>{name.text}</li>);
    return(
        <div>
            <input value={input_text} onChange={onChange}/>
            <button onClick={onClick}>add</button>
            <ul>{name_list}</ul>
        </div>
    );
};

export default IterationSample;