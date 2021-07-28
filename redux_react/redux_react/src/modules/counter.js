import {createAction, handleActions} from 'redux-actions';
//액션 타입 정의
//액션 타입은 '모듈 이름/액션 이름' 형식으로 해서 중복을 피한다
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션 생성 함
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//초기 상태
const initialState = {
    number: 0,
};

//reducer 함수
//첫 파라미터는 각 액션에 대한 업데이트 함수, 두 번째는 초기 상태
const counter = handleActions({
    [INCREASE]: (state, action) => ({number: state.number + 1}),
    [DECREASE]: (state, action) => ({number: state.number - 1}),
}, initialState);

export default counter;
