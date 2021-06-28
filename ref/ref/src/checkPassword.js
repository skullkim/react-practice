import React, {useState}  from 'react';

const CheckPassword = () => {
    const [passwd, setPasswd] = useState('');
    const onChange = (e) => {
        setPasswd(e.target.value);
    }
    const onClick = () => {
        alert(passwd === '000' ? 'success' : 'fail');
        setPasswd(passwd, '');
    }
    return(
        <div>
            <input type="password"
                   placeholder={"password"}
                   name={"passwd"}
                   onChange={onChange}
            />
            <button
                onClick={onClick}
            >confirm</button>
        </div>
    );
};

export default CheckPassword;