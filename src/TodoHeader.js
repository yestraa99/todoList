import styled from "styled-components";
export default function TodoHeader(){
    const TodoHeaderBlock = styled.div`
        padding: 48px 32px 24px;
        border-bottom: 1px solid #efecef;
        h1 {
            margin: 0;
            font-size: 36px;
            color: #343a40;
        }
        .day {
            margin-top: 4px;
            color: #868e96;
            font-size: 22px;
        }
        .tasks-left {
            color: #20c997;
            font-size: 18px;
            margin-top: 40px;
            font-weight: bold;
        }
    `;
    return (
        <TodoHeaderBlock>
            <h1>2022년 9시 27분</h1>
            <div className="day">월요일</div>
            <div className="tasks-left">할일 : 2개 남음</div>
        </TodoHeaderBlock>
    );
}