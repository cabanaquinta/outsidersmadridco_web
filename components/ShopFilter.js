import React from "react";
import { FilterGallery } from "../styles/GalleryStyle";
import { Gap } from "../styles/LayOutStyle";
import Link from "next/link";

export default function ShopFilter() {
    return (
        <>
            <Gap></Gap>
            <FilterGallery>
                <ul>
                    <Link href={"/"}>Todo</Link>
                </ul>
                <ul>
                    <Link href={"/"}>Camisetas</Link>
                </ul>
                <ul>
                    <Link href={"/"}>Accesorios</Link>
                </ul>
            </FilterGallery>
        </>
    );
}
