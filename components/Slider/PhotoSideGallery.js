import React from "react";
import { SideImage, SideImageWrapper } from "../../styles/ProductDetailsStyle";

export default function PhotoSideGallery({ images, setImageIndex }) {
    const imagesLen = images.length > 1 ? true : false;
    return (
        imagesLen && (
            <SideImageWrapper>
                {images.map((image, index) => (
                    <div key={index} onClick={() => setImageIndex(index)}>
                        <SideImage src={image} alt="Product Image" />
                    </div>
                ))}
            </SideImageWrapper>
        )
    );
}
