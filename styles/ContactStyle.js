import styled from "styled-components";

export const ContactSection = styled.div`
    min-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0rem;

    @media (min-width: 60em) {
        margin-bottom: 8rem;
        min-height: 90vh;
    }
`;

export const ContactWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 80%;
    gap: var(--gap);

    @media (min-width: 60em) {
        flex-direction: row;
    }
`;

export const ContactInfoWrapper = styled.div`
    flex-basis: 50%;

    * + * {
        margin-top: var(--gap);
    }
`;

export const Email = styled.p`
    font-style: italic;
    margin-top: 0.3rem !important;
`;

export const GetDirections = styled.a`
    display: inline-flex;
    align-items: center;
    color: blue;
    font-size: var(--fs-400);
    font-style: italic;

    svg {
        font-size: 0.9em;
        margin-left: 0.4em;
    }
`;

export const MapWrapper = styled.div`
    width: 100%;
    aspect-ratio: 800/500;
    z-index: 0;
`;
