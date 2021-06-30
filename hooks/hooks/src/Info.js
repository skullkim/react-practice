import React, {useReducer} from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value,
    };
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: '',
    });

    const {name, nickname} = state;
    const onChange = (e) => {
        //액션은 어떤 값이여도 상관 없다.
        dispatch(e.target);
    };

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