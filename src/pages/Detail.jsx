import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";

// 스타일 영역
const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const TodoContainer = styled.div`
  width: 500px;
  height: 300px;
  background-color: #fdffab;
  border-radius: 15px;
  padding: 10px;
  font-size: 18px;
  gap: 20px;
`;

const TodoID = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  font-size: 15px;
  color: #2b2730;
`;

const TodoTitle = styled.div`
  margin-left: 20px;
  font-size: 25px;
  color: #9376e0;
  margin-top: 30px;
`;

const TodoContent = styled.div`
  margin-top: 30px;
  margin-left: 20px;
  height: 130px;
  font-size: 18px;
  color: #2b2730;
`;

const Button = styled.button`
  border-radius: 10px;
  padding: 8px 15px;
  font-size: 15px;
  color: white;
  border: none;
  outline: none;
  margin-right: 10px;
  background-color: #9376e0;
  margin-left: 395px;
`;

function Detail() {
  //todos 가져오기
  const todos = useSelector((state) => {
    return state.todo;
  });

  // useParams !!
  const params = useParams();

  // 어떤 todo인지 찾아보기
  const selectData = todos.find((todo) => {
    return todo.id === params.id;
  });

  // useNavigate
  const navigate = useNavigate();

  const navigateButtonHandler = () => {
    navigate("/");
  };

  return (
    <>
      <Layout>
        <TodoContainer key={selectData.id}>
          <TodoID>ID : {selectData.id}</TodoID>
          <TodoTitle>{selectData.title}</TodoTitle>
          <TodoContent>{selectData.content}</TodoContent>
          <Button onClick={navigateButtonHandler}>이전으로</Button>
        </TodoContainer>
      </Layout>
    </>
  );
}

export default Detail;
