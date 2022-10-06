import React from "react";
import { useState, useEffect } from "react";
import {
    DetailsStyle,
    ProductInfo,
    Quantity,
    Buy,
    ProductImage,
    ProductModifierWrapper,
} from "../../styles/ProductDetailsStyle";
import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";

import ColorPicker from "../../components/ColorPicker";
import SizePicker from "../../components/SizePicker";

import Head from "next/head";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { printful } from "../../lib/printful-client";
import { formatVariantName } from "../../lib/format-variant-name";
import Slider from "../../components/Slider/Slider";

import PhotoSideGallery from "../../components/Slider/PhotoSideGallery";
import FaqSection from "../../components/praductF&Q/FaqSection";
import RecommendedForYou from "../../components/RecommendedForYou";

export default function ProductDetails({ product, result, relatedProducts }) {
    const { id, name, variants } = product;
    const variants_ = variants.map((variant) => {
        const [_, colorSize] = variant.product.name.split("(");
        const [color, size] = colorSize.split("/");
        return {
            ...variant,
            color,
            size: size.replace(")", "").replace(" ", ""),
        };
    });
    // Colors
    let colors = new Set(
        variants_.map(({ color, ...variant }) => {
            return color;
        })
    );
    colors = [...colors];

    const filterColorSize = (value, type) => {
        if (type === "color") {
            const [{ external_id, ...variant }, ..._] = variants_.filter(
                ({ color }) => color == value
            );
            setActiveColor(value);
            setActiveVariantExternalId(external_id);
        }
        if (type === "size") {
            const [{ external_id, ...variant }, ..._] = variants_.filter(
                ({ color, size }) => color == activeColor && size == value
            );
            external_id && setActiveVariantExternalId(external_id);
        }
    };

    // Dealing with printful
    const [firstVariant] = variants_;
    const oneStyle = variants_.length === 1;
    const [quantity, setQuantity] = useState(1);
    const [imageIndex, setImageIndex] = useState(0);
    const [activeColor, setActiveColor] = useState(firstVariant.color);
    const [activeVariantExternalId, setActiveVariantExternalId] = useState(
        firstVariant.external_id
    );

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 0) setQuantity((prev) => prev - 1);
    };

    // Images
    let images = new Set(
        variants_.map((variant) => {
            return variant.files.find(({ type }) => type === "preview")[
                "preview_url"
            ];
        })
    );
    images = [...images];

    const activeVariant = variants_.find(
        (v) => v.external_id === activeVariantExternalId
    );

    // Sizes
    let sizes = new Set(
        variants_.map(({ color, size }) => {
            if (activeColor === color) {
                return size;
            }
        })
    );
    sizes = [...sizes].filter((size) => size != undefined);

    const activeVariantFile = activeVariant.files.find(
        ({ type }) => type === "preview"
    );

    const formattedPrice = new Intl.NumberFormat("en-EU", {
        style: "currency",
        currency: activeVariant.currency,
    }).format(activeVariant.retail_price);

    // Update the slider image on selection
    const findIndex = () => {
        const indexOfTargetVariant = images.findIndex(
            (image) => image == activeVariantFile.preview_url
        );
        setImageIndex(indexOfTargetVariant);
    };

    useEffect(() => {
        findIndex(activeVariantExternalId);
    }, [activeVariantExternalId]);

    return (
        <>
            <Head>
                <title>product-detail</title>
                <link
                    rel="icon"
                    href="/medium_OUTSIDERMOTORCO_REDONDO_5a10b04f52.png"
                />
                <title>Outsiders</title>
            </Head>
            <>
                <IoArrowBackOutline
                    href={"/tienda"}
                    style={{ cursor: "pointer" }}
                    size="1.3em"
                >
                    <Link href={"/tienda"}></Link>
                </IoArrowBackOutline>

                <DetailsStyle>
                    <ProductImage>
                        {activeVariantFile && (
                            <Slider
                                images={images}
                                imageIndex={imageIndex}
                                id={id}
                            ></Slider>
                        )}
                        <PhotoSideGallery
                            images={images}
                            setImageIndex={setImageIndex}
                        />
                    </ProductImage>
                    <ProductInfo>
                        <div>
                            <h2>
                                {name} - {activeVariant.color}
                            </h2>
                            <p>{formattedPrice}</p>
                        </div>
                        <ProductModifierWrapper>
                            <ColorPicker
                                colors={colors}
                                colorSelected={activeVariant.color}
                                disabled={oneStyle}
                                onClick={({ target: { value } }) =>
                                    filterColorSize(value, "color")
                                }
                            />
                            <SizePicker
                                sizes={sizes}
                                sizeSelected={activeVariant.name}
                                disabled={oneStyle}
                                onClick={({ target: { value } }) =>
                                    filterColorSize(value, "size")
                                }
                            />
                            <Quantity>
                                <span>Quantity</span>
                                <button onClick={() => decreaseQuantity()}>
                                    <AiFillMinusCircle />
                                </button>
                                <p>{quantity}</p>
                                <button onClick={() => increaseQuantity()}>
                                    <AiFillPlusCircle />
                                </button>
                            </Quantity>
                        </ProductModifierWrapper>
                        <Buy
                            className="snipcart-add-item"
                            data-item-id={activeVariantExternalId}
                            data-item-price={activeVariant.retail_price}
                            data-item-url={`/products/${id}`}
                            data-item-description={`${activeVariant.name}`}
                            data-item-image={activeVariantFile.preview_url}
                            data-item-name={name}
                            data-item-quantity={quantity}
                        >
                            Comprar
                        </Buy>
                        <FaqSection result={result} />
                    </ProductInfo>
                </DetailsStyle>
                <RecommendedForYou
                    RecommendedProducts={relatedProducts}
                ></RecommendedForYou>
            </>
        </>
    );
}

export async function getStaticProps({ params }) {
    const {
        result: { sync_product, sync_variants },
    } = await printful.get(`sync/products/${params.productSlug}`);

    const product = {
        ...sync_product,
        variants: sync_variants.map(({ name, ...variant }) => ({
            name: formatVariantName(name),
            ...variant,
        })),
    };

    const productId = product?.variants?.[0]?.product.product_id;
    const categoryId = product?.variants?.[0]?.main_category_id;
    console.log(categoryId);
    // "code": 200, handle it
    const { result } = await printful.get(
        `products/${productId}/sizes?unit=cm`
    );

    const category = await printful.get(
        `sync/products?category_id=${categoryId}`
    );

    var relatedProducts = await Promise.all(
        category.result.flatMap(async ({ id }) => {
            if (id != params.productSlug) {
                return await printful.get(`sync/products/${id}`);
            }
        })
    );

    relatedProducts = relatedProducts.filter(
        (product) => product !== undefined
    );

    return {
        props: {
            result,
            product,
            relatedProducts,
        },
    };
}

export async function getStaticPaths() {
    const { result: productIds } = await printful.get("sync/products");

    const paths_ = productIds.map(({ id }) => {
        return {
            params: {
                productSlug: id.toString(),
            },
        };
    });

    return {
        paths: paths_,
        fallback: false,
    };
}
