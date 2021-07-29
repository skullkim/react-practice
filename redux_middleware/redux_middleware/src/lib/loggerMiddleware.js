//lib/loggerMiddleware.js
//store는 리덕스 스토어 인스턴스
//action은 디스패치된 액션
//next는 함수형태 이며, sotre.dispatch와 비슷한 역할을 한다
//next(action)을 하면 다음에 처리할 미들웨어 에게 액션을 넘긴다.
//다음 미들웨어가 없으면 리듀서에게 액션을 넘긴다.
//next를 사용하지 않으면 액션이 리듀서에 전달되지 않는다.
const loggerMiddleWare = store => next => action => {
    console.group(action && action.type);//액션 타입으로 log를 그룹화
    console.log('previous state', store.getState());
    console.log('action', action);
    next(action);//다음 미들웨어 또는 리듀서에 전달
    console.log('next state', store.getState());
    console.groupEnd();
};

export default loggerMiddleWare;