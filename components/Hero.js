import React from "react";
import Link from "next/link";
import {
    HeroWrapper,
    HeroBackgroundVideoWrapper,
    HeroTextContainer,
    BuyHero,
    HeroVideoOverlay,
    HeroBackgroundImage,
} from "../styles/HeroStyle";
import {} from "../styles/ProductDetailsStyle";
import { buildImage, buildVideo } from "../src/cloudinary";
import { useEffect, useRef } from "react";

export default function Hero({ hero }) {
    const { heroText, heroLink, heroMedia, heroSubtitulo, video } =
        hero[0].attributes;

    const heroImageParentId =
        heroMedia.data[0].attributes.formats.large.provider_metadata.public_id;

    const videoParentId = video.data.attributes.url;

    const img_url = buildImage(heroImageParentId).toURL();
    let video_url = buildVideo(videoParentId).publicID.split("/").slice(-1)[0];
    video_url = `https://res.cloudinary.com/dfhtfxlvx/video/upload/q_auto/f_auto/${video_url}`;

    const videoRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            videoRef.current.play();
        }, 0);
    }, []);

    return (
        <HeroWrapper>
            <HeroBackgroundVideoWrapper>
                <video
                    ref={videoRef}
                    controls={false}
                    autoPlay
                    muted
                    preload="auto"
                    loop
                    playsinline
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                    alt={"video-hero"}
                >
                    <source src={video_url}></source>
                    <HeroBackgroundImage
                        style={{
                            background: `linear-gradient(346deg, rgba(45,46,52,0.8786108193277311) 2%, rgba(36,34,46,0.09989933473389356) 100%), url(${video_url}) no-repeat center / cover`,
                        }}
                    ></HeroBackgroundImage>
                </video>
                <HeroVideoOverlay></HeroVideoOverlay>
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
            </HeroBackgroundVideoWrapper>

            {/* <HeroBackgroundImage
                style={{
                    background: `linear-gradient(346deg, rgba(45,46,52,0.8786108193277311) 2%, rgba(36,34,46,0.09989933473389356) 100%), url(${video_url}) no-repeat center / cover`,
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
            </HeroBackgroundImage> */}
        </HeroWrapper>
    );
}
