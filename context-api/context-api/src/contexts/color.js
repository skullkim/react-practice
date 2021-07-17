import React, {createContext, useState} from 'react';

//createContext의 기본 값은 실제 Provider의 value에 넣는 객체의 형태와 일치시키는 것이 좋다
//일치시키면 Context를 볼떄 내부 값 파앆용이, Provider 오사용으로 안한 에러 발생 방지 효과 있음.
const ColorContext = createContext({
    state: {color: 'black', subcolor: 'red'},
    actions: {
        setColor: () => {},
        setSubColor: () => {},
    }
});

const ColorProvider = ({children}) => {
    const [color, setColor] = useState('black');
    const [subcolor, setSubcolor] = useState('red');

    //상태를 state로, setState는 actions로 묶어서 전달한다.
    const value = {
        state: {color, subcolor},
        actions: {setColor, setSubcolor}
    };
    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
}

//const ColorConsumer = ColorContext.Consumer와 같은 의미
const {Consumer: ColorConsumer} = ColorContext;

//ColorProvider와 ColorConsumer 내보내기
export {ColorProvider, ColorConsumer};

export default ColorContext;