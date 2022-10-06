import React from "react";
import RecommendedProduct from "./RecommendedProduct";
import { formatVariantName } from "../lib/format-variant-name";

export default function RecommendedForYou({ RecommendedProducts }) {
    const products = RecommendedProducts.map(
        ({ result: { sync_product, sync_variants } }) => ({
            ...sync_product,
            variants: sync_variants.map(({ name, ...variant }) => ({
                name: formatVariantName(name),
                ...variant,
            })),
        })
    );
    console.log(products);
    const isThereRecommendedProducts = products.length > 0;
    return (
        <div>
            <h3>Otras Cosillas Que te Pueden Gustar</h3>
            <div
                style={{
                    maxHeight: "80vh",
                    marginTop: "3rem",
                    marginBottom: "3rem",
                }}
            >
                {isThereRecommendedProducts &&
                    products.map((product) => {
                        return (
                            <RecommendedProduct
                                key={product.id}
                                product={product}
                            ></RecommendedProduct>
                        );
                    })}
            </div>
        </div>
    );
}
