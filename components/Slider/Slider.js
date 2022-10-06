import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./SliderButtoms";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

export default function Slider({ images, id, imageIndex }) {
    const moreThanOneImage = images.length > 1 ? true : false;
    const [viewportRef, embla] = useEmblaCarousel({ loop: true });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const onSelect = useCallback(() => {
        if (!embla) return;
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla]);

    useEffect(() => {
        if (!embla) return;
        embla.on("select", onSelect);
        onSelect();
    }, [embla, onSelect]);

    useEffect(() => {
        if (!embla) return;
        embla && embla.scrollTo(imageIndex, true);
    }, [imageIndex]);

    return (
        <div className="embla" ref={viewportRef}>
            <div className="embla__container">
                {images.map((image, index) => (
                    <Link href={`/products/${id}`} key={index}>
                        <div className="embla__slide">
                            <img
                                className="embla__slide__img"
                                src={image}
                                alt="Product Image"
                            />
                        </div>
                    </Link>
                ))}
            </div>

            {moreThanOneImage && (
                <>
                    <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                    <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
                </>
            )}
        </div>
    );
}
