import React from "react";
// import { Gallery } from "../../styles/Gallery";
import ShopFilter from "../../components/ShopFilter";
import Product from "../../components/Product";

import {
    client,
    queryCategories,
    queryProductsByCategory,
} from "../../graphql";

export default function ProductDetails({ products }) {
    return (
        <>
            {/* <ShopFilter></ShopFilter>
            <Gallery>
                {products.map((product) => (
                    <Product key={product.attributes.slug} product={product} />
                ))}
            </Gallery> */}
        </>
    );
}

export async function getStaticProps({ params }) {
    const data = await client.query({
        query: queryProductsByCategory,
        variables: {
            slug: params.categorySlug,
        },
    });

    const products = data.data.categories.data[0].attributes.products.data;
    return {
        props: {
            products,
        },
    };
}

export async function getStaticPaths() {
    const data = await client.query({
        query: queryCategories,
    });

    const categories = data.data.categories.data;

    const paths = categories.map((category) => {
        return {
            params: {
                categorySlug: category.attributes.slug,
            },
        };
    });

    return {
        paths: paths,
        fallback: false,
    };
}
