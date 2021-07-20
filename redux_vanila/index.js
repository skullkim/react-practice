import {createStore} from "redux";

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

//프로젝트의 상태에 변화를 일으키는 것이 액션이다.
//액션의 이름은 대문자로 작성하고 고유해야 한다.
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

//위의 액션 이름을 사용해 만든 액션 객체, 액션 객체는 반드시 type 값을 가져야 한다.
const toggleSwitch = () => ({type: TOGGLE_SWITCH});
const increase = (difference) => ({type: INCREASE, difference});
const decrease = () => ({type: DECREASE});

//초기값
const initialState = {
  toggle: false,
  counter: 0
};

//reducer 함수는 변화를 일으킨다.
//리듀서 함수가 맨처음에 호출되면 undefined이고 이떄문에 기본설정을 한다.
//리듀서 내부에서는 불변성을 유지해야 한다.
function reducer(state = initialState, action) {
  switch(action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,//불변성 유지
        toggle : !state.toggle,
      };
    case INCREASE:
      console.log(typeof(action.difference));
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      }
    default:
      return state;
  }
}

//store를 만든다
const store = createStore(reducer);

//상태가 업데이트 될때 마다 호출된다.
//리액트가 아니기 때문에 이미 html을 사용해 만들어진 UI의 속성을 상태에 따라 변경해 준다.
const render = () => {
  const state = store.getState();//현재 상태를 불러온다
  if(state.toggle) {
    divToggle.classList.add('active');
  }
  else {
    divToggle.classList.remove('active');
  }
  counter.innerText = state.counter;
}

render();

//스토어의 상태가 바뀔때 마다 render가 호출되도록 한다.
//subscribe의 인자로 함수 형태의 값을 전달하면
//이 함수는 추후 액션이 발생해 상태가 없데이트 될 떄 호출된다
//리액트에서는 subscribe하는 작업을 상태 조회 과정에서 react-redux 라이브러리가
//대신 해준다.
store.subscribe(render);

//액션을 발생시키는 것을 dispatch라 하며 인자로 액션 객체를 넣어 준다.
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  store.dispatch(increase(1));
}
btnDecrease.onclick = () => {
  store.dispatch(decrease());
}