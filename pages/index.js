import Head from "next/head";
import Hero from "../components/Hero";
import { Gallery } from "../styles/GalleryStyle";
import { Gap } from "../styles/LayOutStyle";
import Product from "../components/Product";
import { client, queryHero } from "../graphql";
import { printful } from "../lib/printful-client";
import { formatVariantName } from "../lib/format-variant-name";

export default function Home({ hero, products_ }) {
    return (
        <div>
            <Head>
                <title>home</title>
                <link
                    rel="icon"
                    href="/medium_OUTSIDERMOTORCO_REDONDO_5a10b04f52.png"
                />
                <title>Outsiders</title>
            </Head>
            <>
                <Hero hero={hero}></Hero>
                <Gap gap={"4rem"}></Gap>
                <h2>Productos Destacados</h2>
                <Gallery>
                    {products_.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </Gallery>
            </>
        </div>
    );
}

export async function getStaticProps() {
    let pages_data = await client.query({
        query: queryHero,
    });

    pages_data = pages_data.data.pages.data;

    const hero = pages_data.filter(
        (page) => page.attributes.section === "hero"
    );

    // PRINTFUL

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
            hero,
            products_,
        },
    };
}
