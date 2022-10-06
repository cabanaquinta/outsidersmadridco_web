import React from "react";
import Head from "next/head";
import Product from "../components/Product";
import { Gallery } from "../styles/GalleryStyle";
import ShopFilter from "../components/ShopFilter";
// import { client, queryProducts, queryHero } from "../graphql";
import { printful } from "../lib/printful-client";
import { formatVariantName } from "../lib/format-variant-name";

export default function Shop({ products_ }) {
    return (
        <>
            <Head>
                <title>shop</title>
                <link
                    rel="icon"
                    href="/medium_OUTSIDERMOTORCO_REDONDO_5a10b04f52.png"
                />
                <title>Outsiders</title>
            </Head>
            <>
                <ShopFilter></ShopFilter>
                <Gallery>
                    {products_.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </Gallery>
            </>
        </>
    );
}

export async function getStaticProps() {
    const { result: productIds } = await printful.get("sync/products");

    const allProducts = await Promise.all(
        productIds.map(
            async ({ id }) => await printful.get(`sync/products/${id}`)
        )
    );

    const products_ = allProducts.map(
        ({ result: { sync_product, sync_variants } }) => ({
            ...sync_product,
            variants: sync_variants.map(({ name, ...variant }) => ({
                name: formatVariantName(name),
                ...variant,
            })),
        })
    );

    return {
        props: {
            products_,
        },
    };
}
