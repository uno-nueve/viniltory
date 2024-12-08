import styled from "styled-components";

const Input = styled.input`
    width: 100%;
    height: 40px;
    padding: 20px, 0;
    border: none;
    border-bottom: 1px solid #9e9e9e;
    font-size: 1rem;

    &:hover {
        border-color: black;
    }

    &:focus {
        outline: none;
    }
`;

export default Input;
