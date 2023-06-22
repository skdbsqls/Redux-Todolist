import React from "react";
import styled from "styled-components";
import Todo from "../components/Todo";
import Form from "../components/Form";
import { useSelector } from "react-redux/es/hooks/useSelector";

// 스타일 영역
const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  min-width: 800px;
`;

const MyTodoList = styled.main`
  width: 100%;
`;

const Header = styled.div`
  background-color: #fdffab;
  padding: 25px;
  margin-top: 20px;
  color: #9376e0;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  background-color: #fdffab;
  padding: 10px 20px;
  font-family: "yg-jalnan";
  color: #9376e0;
  font-size: 25px;
`;

const List = styled.div`
  background-color: #a8d8ea;
  padding: 20px;
  display: flex;
  gap: 20px 2%;
  flex-wrap: wrap;
`;

function Home() {
  const todos = useSelector((state) => {
    return state.todo;
  });
  return (
    <>
      <Layout>
        <MyTodoList>
          <Header>My To Do List ✏️</Header>
          <Form />
          <Title>Working...🔥</Title>
          <List>
            {todos.map((todo) => {
              if (!todo.isDone) {
                // 얘는 todos 에서 하나를 화면에 보여주는 놈
                return <Todo key={todo.id} todo={todo} />;
              }
            })}
          </List>
          <Title>Done..! 🎉</Title>
          <List>
            {todos.map((todo) => {
              if (todo.isDone) {
                return <Todo key={todo.id} todo={todo} />;
              }
            })}
          </List>
        </MyTodoList>
      </Layout>
    </>
  );
}

export default Home;
