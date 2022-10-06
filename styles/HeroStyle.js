import styled from "styled-components";

export const HeroWrapper = styled.header`
    width: 100%;
    height: 80vh;
    position: relative;
`;

export const HeroBackgroundImage = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.274), rgba(0, 0, 0, 0.274));
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    position: absolute;
    height: 100%;
    color: var(--light);
`;

export const HeroTextContainer = styled.div`
    height: 100%;
    width: 90%;
    max-width: 1000px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* * + * {
        margin-top: var(--gap);
    } */
`;

export const BuyHero = styled.button`
    font-size: var(--fs-400);
    color: var(--dark);
    background-color: var(--light);
    font-weight: var(--fw-700);
    cursor: pointer;
    height: 35px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 3px;
    width: 40%;
    position: relative;
    transition: 0.3s;
    overflow: hidden;
    display: inline-block;
    margin-top: calc(var(--gap) * 1.7);

    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

    @media (min-width: 60em) {
        width: 30%;
    }

    &:focus {
        outline: none;
    }

    &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.06);
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
    }

    &:hover:after {
        transform: translateX(0%) translateY(0%) rotate(45deg);
    }

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
            rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }

    &:hover .box-description {
        opacity: 1;
    }
`;
