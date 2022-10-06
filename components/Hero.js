import React from "react";
import Link from "next/link";
import {
    HeroWrapper,
    HeroBackgroundImage,
    HeroTextContainer,
    BuyHero,
} from "../styles/HeroStyle";
import {} from "../styles/ProductDetailsStyle";
import { buildImage } from "../src/cloudinary";

export default function Hero({ hero }) {
    const { heroText, heroLink, heroMedia, heroSubtitulo } = hero[0].attributes;

    const heroImageParentId =
        heroMedia.data[0].attributes.formats.large.provider_metadata.public_id;

    const img_url = buildImage(heroImageParentId).toURL();
    return (
        <HeroWrapper>
            <HeroBackgroundImage
                style={{
                    background: `linear-gradient(346deg, rgba(45,46,52,0.8786108193277311) 2%, rgba(36,34,46,0.09989933473389356) 100%), url(${img_url}) no-repeat center / cover`,
                }}
            >
                <HeroTextContainer>
                    <h1
                        style={{
                            fontFamily: "var(--ff-accent)",
                            fontSize: "4rem",
                            letterSpacing: "0.2rem",
                        }}
                    >
                        {heroText}
                    </h1>
                    <h3>{heroSubtitulo}</h3>
                    <Link href={heroLink}>
                        <BuyHero>TIENDA</BuyHero>
                    </Link>
                </HeroTextContainer>
            </HeroBackgroundImage>
        </HeroWrapper>
    );
}
