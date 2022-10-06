import styled from "styled-components";

export const PagesWrapper = styled.div`
    width: 90%;
    margin: auto;
`;

export const HeaderWrapper = styled.header`
    padding: 2rem 0rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    min-height: 10vh;
    width: 90%;
    margin: auto;

    @media (min-width: 60em) {
        flex-direction: row;
    }
`;

export const NavList = styled.ul`
    flex-basis: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: 1rem;
    gap: 1rem;

    @media (min-width: 60em) {
        margin-bottom: 0rem;

        li + li {
            margin-left: 5em;
        }
    }
`;

export const NavLogoWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    flex-basis: 10%;
    font-family: var(--ff-accent);
    font-weight: var(--fw-700);
    margin-bottom: 1rem;
    max-height: 2rem;
    cursor: pointer;

    @media (min-width: 60em) {
        margin-bottom: 0rem;
    }

    h1 {
        margin-top: 0.3rem;
    }
`;

export const NavLogoIMG = styled.img`
    width: 3rem;
    object-fit: cover;
    margin-right: 0.1em;
`;

export const ShopWrapper = styled.div`
    flex-basis: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    cursor: pointer;

    &:hover {
        img {
            transform: translateX(0.1rem);
            transition: 0.2s ease;
        }
    }

    > div {
        text-align: center;
    }
`;

export const Footer = styled.div`
    color: var(--light);
    background-color: var(--dark);
    padding: 4rem;
    font-size: var(--fs-400);

    a {
        color: var(--light);
    }

    span {
        font-size: var(--fs-400);
    }
`;

export const Gap = styled.div`
    margin-top: ${(props) => (props.gap ? props.gap : "var(--gap)")};
`;

export const FooterMainWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @media (min-width: 60em) {
        flex-direction: row;
        align-items: flex-start;
    }
`;

export const FooterNav = styled.div`
    display: flex;
    gap: 2.5rem;

    dt {
        color: var(--grey);
        font-weight: 20;
        margin-bottom: 0.2rem;
    }

    dd {
        font-weight: var(--fw-700);
    }

    @media (min-width: 60em) {
        gap: 5rem;
    }
`;

export const FooterSecondaryWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    margin-top: 3rem;
    font-size: var(--fs-200);

    span {
        font-size: var(--fs-200);
    }
`;
