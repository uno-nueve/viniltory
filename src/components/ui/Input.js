import styled from "styled-components";

const Input = styled.input`
    width: 100%;
    height: 40px;
    padding: 1.25rem 0;
    border: none;
    border-bottom: 1px solid #9e9e9e;
    font-size: 1rem;
    background: none;
    color: #ffffff;

    &:hover {
        border-color: #ffffff;
    }

    &:focus {
        outline: none;
    }
`;

export default Input;
