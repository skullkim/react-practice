import React, {useState} from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: '',
    });
    const {username, message} = form;
    const onChange = (e) => {
        const nextForm = {
            ...form,//기존의 form 내용을 이 자리에 복사하고
            [e.target.name]: e.target.value//원하는 값을 덮어 씌운다
        };
        setForm(nextForm);
    };

    const onClick = () => {
        alert(`${username}: ${message}`);
        setForm({
            username: '',
            message: ''
        });
    };

    const onKeyPress = (e) => {
        if(e.key === 'Enter'){
            onClick();
        }
    };

    return (
        <div>
            <h1>Practice Event</h1>
            <input type="text"
                   name="username"
                   placeholder="username"
                   value={username}
                   onChange={onChange}
            />
            <input type="text"
                   name="message"
                   placeholder={"input anything"}
                   value={message}
                   onChange={onChange}
                   onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>confirm</button>
        </div>
    );
};

export default EventPractice;