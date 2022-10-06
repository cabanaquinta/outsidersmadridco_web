import styled from "styled-components";

export const Gallery = styled.div`
    display: grid;
    grid-gap: 7rem;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    margin: calc(var(--gap) + 2rem) auto 10rem auto;
`;

export const FilterGallery = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    margin-bottom: var(--gap);

    @media (min-width: 60em) {
        justify-content: flex-start;
    }

    * + * {
        margin-left: 2em;
    }

    span {
        margin-left: 0.5em;
    }

    ul a {
        padding: calc(var(--fs-200) * 0.6) calc(1.33 * var(--fs-200));
        font-size: var(--fs-200);
        background-color: var(--primary);

        &:hover {
            background-color: var(--dark);
            color: var(--light);
            transition: 0.1s ease-in-out;
        }

        &:hover {
            background-color: var(--dark);
            transition: 0.1s ease-in-out;
        }
    }
`;
