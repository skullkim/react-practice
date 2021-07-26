import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Counter from '../components/Counter';
import {increase, decrease} from '../modules/counter';

const CounterContainer = ({number, increase, decrease}) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
    );
};


//컴포넌트를 리덕스와 연동하기 위해 react-redux에서 제공하는 connect()를 사용해야 한다
//connect는 첫 인자로 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위한 설정 함수
//두 번쨰 인자로 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위한 함수를 사용한다.
export default connect(
    state => ({
        number: state.counter.number,
    }),
    {
        increase,
        decrease,
    },
    //connect는 호출되면 또 다른 함수를 반환하는데, 이 함수의 인자로
    //연동할 컴포넌트를 넣어 주면 된다.
)(CounterContainer); //연동할 컴포넌