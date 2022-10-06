import styled from "styled-components";

export const ProductStyle = styled.article`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0rem 1.7rem;
    min-width: 100%;

    img {
        object-fit: cover;
        cursor: pointer;
    }

    p {
        font-size: var(--fs-200);
        margin-top: var(--gap);
    }

    * + * {
        margin-top: 0.3rem;
    }
`;

export const ProductImage = styled.div`
    height: 100%;
    width: 100%;
    position: relative;

    @media (min-width: 30em) {
        width: 50%;
    }

    @media (min-width: 60em) {
        width: 70%;
    }
`;

export const VarianBottomWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: calc(var(--gap) / 2);
    margin-top: var(--gap);
    width: 100%;

    @media (min-width: 60em) {
        flex-direction: row;
        align-items: flex-start;
        gap: var(--gap);
    }
`;

export const VariantPickerWrapper = styled.select`
    padding: 0.2rem 0.5rem;
    font-size: var(--fs-200);
    border-radius: 0.25rem;
    border: 1px solid var(--semi-dark);
    min-width: 20%;
    border-color: var(--semi-dark);
    text-align: center;
    -webkit-appearance: none;
    cursor: pointer;
    color: var(--semi-dark) !important;
    background-color: transparent;

    @media (min-width: 60em) {
        min-width: 30%;
    }
`;

export const Buy = styled.button`
    width: 50%;
    font-size: 16px;
    color: var(--primary);
    background-color: var(--buttonBackground);
    font-weight: var(--fw-700);
    cursor: pointer;
    padding: 0.2rem 0.5rem;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 0.25rem;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    margin-top: 0rem !important;

    @media (min-width: 60em) {
        width: auto;
        min-width: 50%;
    }

    &:focus {
        outline: none;
    }

    &:hover {
        background-position: 100% 0;
        background-image: linear-gradient(
            to right,
            #29323c,
            #485563,
            #2b5876,
            #4e4376
        );
        -o-transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
    }
`;
