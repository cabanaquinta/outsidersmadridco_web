import React from "react";
import { client, queryContact } from "../graphql";
import { FaExternalLinkAlt } from "react-icons/fa";
import Map from "../components/Map/index";
import {
    ContactWrapper,
    ContactInfoWrapper,
    Email,
    GetDirections,
    MapWrapper,
    ContactSection,
} from "../styles/ContactStyle";
import { Gap } from "../styles/LayOutStyle";

export default function contact({ contact }) {
    const { address, email } = contact;
    return (
        <ContactSection>
            <ContactWrapper>
                <ContactInfoWrapper>
                    <h3>Donde Estamos</h3>
                    <div>
                        <p>{address}</p>
                        <Email>{email}</Email>
                    </div>
                    <GetDirections
                        href={`https://www.google.com/maps/dir//${40.360462},${-3.5971498}/@${40.360462},${-3.7038},12z/`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Get Directions <FaExternalLinkAlt />
                    </GetDirections>
                </ContactInfoWrapper>
                <MapWrapper>
                    <Map></Map>
                </MapWrapper>
                <div></div>
            </ContactWrapper>
            <Gap></Gap>
        </ContactSection>
    );
}

export async function getStaticProps() {
    const product_data = await client.query({
        query: queryContact,
    });

    const contact = product_data.data.locations.data[0].attributes;

    return {
        props: {
            contact,
        },
    };
}
