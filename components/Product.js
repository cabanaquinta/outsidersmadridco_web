import { useEffect, useState } from "react";
import {
    ProductStyle,
    VarianBottomWrapper,
    ProductImage,
    Buy,
} from "../styles/ProductStyle";
import VariantPicker from "./VariantPicker";
import Slider from "./Slider/Slider";

export default function Product({ product }) {
    // console.log(product);
    const { id, name, variants } = product;

    let images = new Set(
        variants.map((variant) => {
            return variant.files.find(({ type }) => type === "preview")[
                "preview_url"
            ];
        })
    );
    images = [...images];

    const [firstVariant] = variants;
    const oneStyle = variants.length === 1;

    const [activeVariantExternalId, setActiveVariantExternalId] = useState(
        firstVariant.external_id
    );

    const [imageIndex, setImageIndex] = useState(0);

    const activeVariant = variants.find(
        (v) => v.external_id === activeVariantExternalId
    );

    const activeVariantFile = activeVariant.files.find(
        ({ type }) => type === "preview"
    );

    const formattedPrice = new Intl.NumberFormat("en-EU", {
        style: "currency",
        currency: activeVariant.currency,
    }).format(activeVariant.retail_price);

    // Once I pick an option from the list, run an use-effect to drag the slider
    const findIndex = (imageJson) => {
        const indexOfTargetVariant = images.findIndex(
            (image) => image == activeVariantFile.preview_url
        );
        setImageIndex(indexOfTargetVariant);
    };

    useEffect(() => {
        findIndex(activeVariantExternalId);
    }, [activeVariantExternalId]);

    return (
        <ProductStyle>
            <ProductImage>
                {activeVariantFile && (
                    <Slider
                        images={images}
                        imageIndex={imageIndex}
                        id={id}
                    ></Slider>
                )}
            </ProductImage>
            <p>{name}</p>
            <div>{formattedPrice}</div>
            <VarianBottomWrapper>
                <VariantPicker
                    value={activeVariantExternalId}
                    onChange={({ target: { value } }) => {
                        setActiveVariantExternalId(value);
                    }}
                    variants={variants}
                    disabled={oneStyle}
                />
                <Buy
                    className="snipcart-add-item"
                    data-item-id={activeVariantExternalId}
                    data-item-price={activeVariant.retail_price}
                    data-item-url={`/products/${id}`}
                    data-item-description={activeVariant.name}
                    data-item-image={activeVariantFile.preview_url}
                    data-item-name={`${name} ${activeVariant.name}`}
                >
                    Comprar
                </Buy>
            </VarianBottomWrapper>
        </ProductStyle>
    );
}
