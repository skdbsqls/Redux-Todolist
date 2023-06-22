import uuid from "react-uuid";
// action value
// Reducer와 컴포넌트의 호출부가 일치해야됨
// 문자열이 아니라 변수형태로 관리하고 싶다!
const ADD_TODO = "todo/ADD_PLUS";
const DELETE_TODO = "todo/DELETE_TODO";
const TOGGLE_STATUS_TODO = "todo/TOGGLE_STATUS_TODO";

// action creator
// action 객체를 만들어주는 함수!
// todo를 추가해줄거니까 todo를 payload로
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const toggleStatusTodo = (id) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload: id,
  };
};

// useState의 초기 값을 initialState로 만들어줌!
// 초기 상태값(state)
const initialState = [
  {
    id: uuid(),
    title: "리액트 공부하기",
    content: "개인과제 완성하기",
    isDone: false,
  },
  {
    id: uuid(),
    title: "알고리즘 공부하기",
    content: "프로그래머스 문제풀기",
    isDone: true,
  },
];

// Reducer : state의 변화를 일으키는 함수 (state 제어)
// state를 action의 type에 따라 변경하는 함수
// input : state와 action
// action 객체는 action type를 payload 만큼 처리하는 것!
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    // return [{
    //   id: 1,
    //   title: "리액트 공부하기",
    //   content: "개인과제 완성하기",
    //   isDone: false,
    // },
    // {
    //   id: Math.random(),
    //   title: title,
    //   content: content,
    //   isDone: false,
    // }]
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case TOGGLE_STATUS_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todos;
