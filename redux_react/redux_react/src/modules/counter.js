//액션 타입 정의
//액션 타입은 '모듈 이름/액션 이름' 형식으로 해서 중복을 피한다
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션 생성 함
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

//초기 상태
const initialState = {
    number: 0
};

//reducer 함수
function counter (state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1,
            }
        case DECREASE:
            return {
                number: state.number - 1,
            }
        default:
            return state;
    }
}

export default counter;
