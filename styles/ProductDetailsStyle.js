import styled from "styled-components";

export const DetailsStyle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 90vh;
    margin-bottom: 2rem;

    @media (min-width: 60em) {
        margin-top: calc(var(--gap) + 1rem);
        flex-direction: row;
        justify-content: space-evenly;
        align-items: flex-start;
    }
`;

export const ProductImage = styled.div`
    height: 100%;
    width: 100vw;
    position: relative;

    @media (min-width: 30em) {
        width: 70%;
    }

    @media (min-width: 60em) {
        width: 45%;
    }
`;

export const ProductInfo = styled.div`
    width: 80%;
    text-align: center;
    margin-top: var(--gap);

    button {
        font-weight: medium;
        padding: 0.2rem 0.5rem;
        text-align: center;
    }

    @media (min-width: 60em) {
        text-align: initial;
        /* width: initial; */
        width: 30%;
        margin-top: 0;
    }
`;

export const ProductModifierWrapper = styled.div``;

export const Quantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;

    button {
        background: transparent;
        border: none;
        font-size: 1.5rem;
        display: flex;
    }

    span {
        font-size: var(--fs-200);
    }

    p {
        width: 1rem;
        text-align: center;
    }

    svg {
        color: #494949;
    }

    @media (min-width: 60em) {
        justify-content: flex-start;
    }
`;

export const ColorSizeWrapper = styled.div`
    margin-top: 1.5rem;
    p {
        font-size: var(--fs-200);
        span {
            font-weight: bolder;
            font-size: 0.9rem;
        }
    }
    div {
        justify-content: center;
        display: grid;
        grid-gap: 0.4rem;
        grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
    }
    button {
        border: 1px solid var(--semi-dark);
        padding: 0.4rem 0rem;
        font-size: var(--fs-200);
        border-radius: 0.2rem;
    }
`;

export const Faq = styled.div`
    display: block;
    margin-top: 3rem;
    text-align: left !important;
    span {
        display: block;
    }
    .question {
        margin: 0rem 0rem;
        cursor: pointer;
    }
    .faq-line {
        background: var(--semi-dark);
        height: 0.05rem;
        margin: 0.2rem 0rem;
        width: 100%;
    }
    .answer {
        p {
            padding: 1rem 0rem;
        }
    }
`;

export const SideImageWrapper = styled.div`
    position: absolute;
    top: 0;
    left: -6rem;
    overflow: scroll;
    max-height: 70%;
    display: none;

    @media (min-width: 60em) {
        display: initial;
    }
`;

export const SideImage = styled.img`
    width: 3.7rem;
    object-fit: cover;
    margin-bottom: 0.5rem;
    cursor: pointer;
`;

export const Buy = styled.button`
    width: 100%;
    font-size: 16px;
    color: var(--primary);
    background-color: var(--buttonBackground);
    font-weight: var(--fw-700);
    cursor: pointer;
    height: 50px;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 1px;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    margin-top: 3rem !important;

    @media (min-width: 60em) {
        width: auto;
        min-width: 80%;
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
