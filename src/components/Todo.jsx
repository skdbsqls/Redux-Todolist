import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";

// 스타일 영역
const TodoContainer = styled.div`
  width: 252px;
  height: 180px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  gap: 20px;
`;

const TodoTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
  color: #9376e0;
  margin-top: 5px;
`;

const TodoContent = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  height: 90px;
  font-size: 18px;
  color: #2b2730;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const Button = styled.button`
  border-radius: 10px;
  padding: 8px 15px;
  font-size: 15px;
  color: white;
  border: none;
  outline: none;
  background-color: ${(props) => props.backgroundColor};
`;

function Todo({ todo }) {
  const dispatch = useDispatch();

  // todo 삭제
  const clickRemoveButtonHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  // todo 토글
  const clickToggleButtonHandler = (id) => {
    dispatch(toggleStatusTodo(id));
  };

  return (
    <TodoContainer key={todo.id}>
      <TodoTitle>{todo.title}</TodoTitle>
      <TodoContent>{todo.content}</TodoContent>
      <ButtonContainer>
        <Button
          backgroundColor="#ff8aae"
          onClick={() => clickRemoveButtonHandler(todo.id)}
        >
          삭제
        </Button>
        <Button
          backgroundColor="#49BEB7"
          onClick={() => clickToggleButtonHandler(todo.id)}
        >
          {todo.isDone ? "취소" : "완료"}
        </Button>
        <Button backgroundColor="#9376e0">
          <Link
            to={`/detail/${todo.id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            상세보기
          </Link>
        </Button>
      </ButtonContainer>
    </TodoContainer>
  );
}

export default Todo;
