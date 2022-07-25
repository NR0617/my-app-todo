import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainPage = styled.div`
    /* border: 1px solid #000; */
    display: flex;
    justify-content: center;
    align-items: center;
    //width: 100%;
`;

const InputContainers = styled.div`
    border: 1px solid #000;
    width: 70vw;
    height: 60vh;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Text = styled.span`
    font-size: 1.5rem;
    padding-bottom: 20px;
`;

const Input = styled.input`
    height: 80%;
    width: 70%;
    margin-left: 10px;
    font-size: 1.3rem;
`;

const InputContainer1 = styled.div`
    display: flex;
    width: 30rem;
    margin-bottom: 20px;
    margin-top: 20px;
`;
const InputContainer2 = styled.div`
    display: flex;
    width: 30rem;
    height: 30rem;
`;

const Button = styled.button`
    background: none;
    margin-bottom: 50px;
    border: 1px solid black;
    height: 2rem;
    font-size: 1.2rem;
`;
const ButtonContainer = styled.div`
    width: 11rem;
    display: flex;
    justify-content: space-between;
`;

function InputPage({ setSchedule, schedule }) {
    const newSchedule = {};

    const handleTitle = function (title) {
        newSchedule.name = title;
    };
    const handleTodo = function (todo) {
        newSchedule.todo = todo;
    };
    const handleSchedule = function () {
        newSchedule.id = 2 + schedule.length;
        setSchedule([...schedule, newSchedule]);
    };

    return (
        <MainPage>
            <InputContainers>
                <InputContainer1>
                    <Text>제목</Text>
                    <Input
                        onKeyUp={(e) => {
                            handleTitle(e.target.value);
                        }}
                    />
                </InputContainer1>
                <InputContainer2>
                    <Text>일정</Text>
                    <Input
                        onKeyUp={(e) => {
                            handleTodo(e.target.value);
                        }}
                    />
                </InputContainer2>
                <Link to="/">
                    <ButtonContainer>
                        <Button onClick={handleSchedule}>입력하기</Button>
                        <Button>돌아가기</Button>
                    </ButtonContainer>
                </Link>
            </InputContainers>
        </MainPage>
    );
}

export default InputPage;
