import {createAction, handleActions} from 'redux-actions';
//액션 타입 지정
const CHANGE_INPUT = 'todos/CHNAGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

//액션 생성 함수
//createAction으로 액션을 만들면 액션에 필요한 추가 데이터는 payload라는 이름을 사용한다.
//{type: CHANGE_INPUT, payload: input}
export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3;//insert 한번 호출 시 +1
export const insert = createAction(INSERT, text => ({
   id: id++,
   text,
   done: false,
}));

export const toggle = createAction(TOGGLE, id => id);

export const remove = createAction(REMOVE, id => id);

const initialState = {
   input: '',
   todos: [
      {
         id: 1,
         text: 'learn basic redux',
         done: true,
      },
      {
         id: 2,
         text: 'use react and redux',
         done: false,
      }
   ],
};

//createAction을 사용했기 때문에 모든 값은 action.payload로 조회 한다.
const todos = handleActions({
   [CHANGE_INPUT]: (state, action) => ({...state, input: action.payload}),
   [INSERT]: (state, action) => ({
      ...state,
      todos: state.todos.concat(action.payload),
   }),
   //이와 같이 payload를 사용하는 대신 비구조화 할당을 통해 payload이름을 새로 설정할 수 있다.
   [TOGGLE]: (state, {payload: id}) => ({
      ...state,
      todos: state.todos.map(todo =>
          todo.id === id ? {...todo, done: !todo.done} : todo,
      ),
   }),
   [REMOVE]: (state, action) => ({
      ...state,
      todos: state.todos.filter(todo => todo.id !== action.payload),
   }),
}, initialState);

export default todos;