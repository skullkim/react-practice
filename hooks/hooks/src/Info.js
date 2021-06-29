import React, {useState} from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeNickName = (e) => {
        setNickname(e.target.value);
    }

    return(
        <div>
            <div>
                <input type="text" placeholder={"name"} onChange={onChangeName}/>
                <input type="text" placeholder={"nickname"} onChange={onChangeNickName}/>
            </div>
            <div>
                <div>name: {name}</div>
                <div>nickname: {nickname}</div>
            </div>
        </div>
    )
}

export default Info;