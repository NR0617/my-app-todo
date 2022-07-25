import React, { useState } from "react";
import styled from "styled-components";
import "./Schedule.css";

const Li = styled.li`
    border: 1px solid blue;
    width: 70vw;
    height: 5vw;
    display: flex;
    align-items: center;
    /* &.checked {
        text-decoration: line-through;
    } */
`;

const Checkbox = styled.input`
    margin-left: 20px;
`;

const Name = styled.span`
    /* border: 1px solid purple; */
    margin-left: 20px;
    font-size: 1.5em;
    flex-basis: 6em;
`;

// const CheckedName = styled.span`
//     /* border: 1px solid purple; */
//     margin-left: 20px;
//     font-size: 1.5em;
//     flex-basis: 6em;
//     text-decoration: line-through;
// `;

const Todo = styled.span`
    /* border: 1px solid black; */
    margin-left: 20px;
    font-size: 1.5em;
    flex-basis: 31em;
`;
const Button = styled.span`
    cursor: default;
`;

export default function Schedule({
    id,
    name,
    todo,
    handleClick,
    // check,
    // setSchedule,
    // schedule,
}) {
    const [check, setCheck] = useState(false);
    const onClick = () => {
        setCheck(!check);
    };

    const onChange = (e) => {
        setCheck(e.target.checked);
    };

    // const handleChecked = function () {
    //     schedule.check = !check;
    //     setSchedule([...schedule]);
    // };

    return (
        <Li>
            {/* <Checkbox
                type={"checkbox"}
                onChange={onChange}
                className={check ? "checked" : null}
            /> */}
            {check ? (
                <Name onClick={onClick}>안했다</Name>
            ) : (
                <Name onClick={onClick}>했다</Name>
            )}
            <Name className={check ? "checked" : null}>{name}</Name>
            <Todo className={check ? "checked" : null}>{todo}</Todo>
            <Button onClick={(e) => handleClick(e, id)}>X</Button>
        </Li>
    );
}
