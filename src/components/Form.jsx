import React from "react";
import styled from "styled-components";
import uuid from "react-uuid";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";

// 스타일 영역
const TodoInput = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a8d8ea;
  padding: 20px;
  color: #9376e0;
  font-size: 18px;
`;

const Input = styled.input`
  font-size: 13px;
  border-radius: 10px;
  padding: 10px;
  margin-left: 10px;
  margin-right: 50px;
  border: none;
  outline: none;
`;

const AddButton = styled.button`
  background-color: #9376e0;
  border-radius: 10px;
  padding: 8px 30px 8px 30px;
  font-size: 15px;
  color: white;
  border: none;
  outline: none;
`;

function Form() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // action객체를 store에 던져주는 방법!!
  // dispatch 가져오기
  const dispatch = useDispatch();

  // form 태그 이벤트 방지
  const submitHandler = (event) => {
    event.preventDefault();
  };

  // 제목 입력값 받기
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  // 내용 입력값 받기
  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  // todo 추가하기
  const clickAddButtonHandler = () => {
    // 입력값 검사!
    if (title === "") {
      alert("제목을 입력해주세요!");
    } else if (content === "") {
      alert("내용을 입력해주세요!");
    } else {
      dispatch(
        addTodo({
          id: uuid(),
          title: title,
          content: content,
          isDone: false,
        })
      );
      // 추가하고 나면 input 비우기!!
      setTitle("");
      setContent("");
    }
  };
  // 여기에서 store에 접근하여, todo의 값을 읽어오고 싶다!
  // 이때 사용하는 hook이 바로 useSelector
  // 이때 (state)는 store에 있는 모든 state!
  const todos = useSelector((state) => {
    return state.todo;
  });

  return (
    <>
      <TodoInput onSubmit={submitHandler}>
        제목 &nbsp;
        <Input autoFocus value={title} onChange={titleChangeHandler}></Input>
        내용 &nbsp;
        <Input value={content} onChange={contentChangeHandler}></Input>
        <AddButton
          type="submit"
          onClick={clickAddButtonHandler}
          //   {() => {
          //     // 여기에 todo 추가해주는 로직을 써준다!
          //     // dispatch의 인자로 action 객체를 넣어준다!
          //     // action creator로 action 객체를 return 하는 함수를 만들어 줬기 때문에
          //     // dispatch(addTodo())로 써주면 됨!
          //     // todo를 payload로 넘겨주기
          //     dispatch(
          //       addTodo({
          //         id: uuid(),
          //         title: title,
          //         content: content,
          //         isDone: false,
          //       })
          //     );
          //     dispatch({
          //         type: "todo/ADD_PLUS",
          //         payload: {
          //             id: Math.random(),
          //             title: title,
          //             content: content,
          //             isDone: false,
          //           },
          //       });
          //   }}
        >
          등록
        </AddButton>
      </TodoInput>
    </>
  );
}

export default Form;
