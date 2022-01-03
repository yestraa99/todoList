import styled from "styled-components";
import TodoItem from "./TodoItem";
export default function TodoList(){
    const TodoListBlock = styled.div`
        flex: 1;
        padding: 20px 32px 48px;
        overflow-y: auto;
    `;
    return(
        <div>
            <TodoListBlock>
                <TodoItem text="프로젝트 생성하기" done={true} />
                <TodoItem text="컴포넌트 스타일 하기" done={false} />
                <TodoItem text="기능설정하기" done={true} />
            </TodoListBlock>
        </div>
    );
}