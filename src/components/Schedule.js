import React, { useState } from "react";
import styled from "styled-components";
import "./Schedule.css";

const Li = styled.li`
    border: 1px solid blue;
    width: 70vw;
    height: 5vw;
    display: flex;
    align-items: center;
`;

const Name = styled.span`
    margin-left: 20px;
    font-size: 1.5em;
    flex-basis: 6em;
`;

const Todo = styled.span`
    margin-left: 20px;
    font-size: 1.5em;
    flex-basis: 31em;
`;
const Button = styled.span`
    cursor: default;
`;

export default function Schedule({ id, name, todo, handleClick }) {
    const [check, setCheck] = useState(false);
    const onClick = () => {
        // e.preventDefault();
        setCheck(!check);
    };

    return (
        <Li>
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
