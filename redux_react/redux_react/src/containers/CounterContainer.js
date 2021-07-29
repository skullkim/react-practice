import React, {useCallback} from 'react';
import {bindActionCreators} from 'redux';
import {useSelector, useDispatch, useAction} from 'react-redux';
import Counter from '../components/Counter';
import {increase, decrease} from '../modules/counter';

const CounterContainer = () => {
    //useSelect()의 파라미터는 connect()의 첫 파라미터인
    //mapStateToProps에 해당한다
    const number = useSelector(state => state.counter.number);
    //컴포넌트 내부에서 스토어의 내장 함수 dispatch를 사용할 수 있게 해준다
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [decrease]);
    return (
        <Counter
            number={number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    );
};

export default CounterContainer;

