import React from 'react';
import useInputs from "./useInputs";

const Info = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickname: '',
    });
    const {name, nickname} = state;

    return (
        <div>
            <div>
                <input type="text"
                       name={"name"}
                       value={name}
                       onChange={onChange}
                />
                <input type="text"
                       name={"nickname"}
                       value={nickname}
                       onChange={onChange}
                />
            </div>
            <div>
                <div>이름: {name}</div>
            </div>
            <div>닉네임: {nickname}</div>
        </div>
    );
};

export default Info;