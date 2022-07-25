import React from "react";
import Schedule from "../components/Schedule";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const MainPage = styled.div`
    /* border: 1px solid #000; */
    display: flex;
    justify-content: center;
    align-items: center;
    //width: 100%;
`;

const ScheduleList = styled.ul`
    /* border: 1px solid blue; */
    width: 70vw;
    height: 90vw;
    padding: 0 0 0 0;
`;

const Input = styled.input`
    height: 80%;
    width: 70%;
    margin-left: 10px;
    font-size: 1.3rem;
`;
// const Button = styled.button`
//     width: 70vw;
//     height: 5vw;
//     background: white;
//     border: none;
//     font-size: 2em;
// `;
const InputContainer1 = styled.div`
    display: flex;
    width: 30rem;
    margin-bottom: 20px;
    margin-top: 20px;
`;
const Button1 = styled.button`
    background: none;
    border: 1px solid black;
    margin-left: 10px;
    width: 5rem;
    font-size: 1.2rem;
`;

function TodoList({ schedule, setSchedule, onChange, check }) {
    const handleClick = function (e, id) {
        // e.preventDefault();
        const filtered = schedule.filter((el, idx) => el.id !== id);
        setSchedule([...filtered]);
    };
    const newSchedule = {};

    const handleTitle = function (e) {
        newSchedule.name = e.target.value;
    };
    const handleTodo = function (e) {
        newSchedule.todo = e.target.value;
    };

    const handleSchedule = function () {
        newSchedule.id = 2 + schedule.length;
        setSchedule([...schedule, newSchedule]);
    };

    return (
        <MainPage>
            <ScheduleList>
                <InputContainer1>
                    <Input
                        placeholder="제목"
                        onKeyUp={(e) => {
                            handleTitle(e);
                        }}
                    />

                    <Input
                        placeholder="내용"
                        onKeyUp={(e) => {
                            handleTodo(e);
                        }}
                    />
                    <Button1 onClick={handleSchedule}>입력</Button1>
                </InputContainer1>
                {schedule.map(function (el) {
                    return (
                        <Schedule
                            key={el.id}
                            id={el.id}
                            name={el.name}
                            todo={el.todo}
                            handleClick={handleClick}
                            // check={el.check}
                            // schedule={schedule}
                            // setSchedule={setSchedule}
                        />
                    );
                })}
                {/* <Link to="/input">
                    <Button>+</Button>
                </Link> */}
            </ScheduleList>
        </MainPage>
    );
}

export default TodoList;
