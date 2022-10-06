import React from "react";

export default function SizeTable({ result }) {
    const [_, supplierSizes] = result.size_tables;
    return (
        <>
            <div>
                {supplierSizes && (
                    <img
                        style={{ minHeight: "3rem" }}
                        src={supplierSizes.image_url}
                    ></img>
                )}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${
                            result.available_sizes.length + 1
                        }, minmax(40px, 1fr))`,
                        fontSize: "0.8rem",
                        padding: "1rem 0rem",
                    }}
                >
                    <span style={{ padding: "2px" }}></span>
                    {result.available_sizes.map((value, index) => {
                        return (
                            <span style={{ padding: "2px" }} key={index}>
                                {value}
                            </span>
                        );
                    })}
                    {/* Table Row */}
                    <div
                        style={{
                            gridColumn: "1 / -1",
                            display: "grid",
                            gridTemplateColumns: `repeat(${
                                supplierSizes.measurements[0].values.length + 1
                            }, minmax(40px, 1fr))`,
                        }}
                    >
                        <span style={{ padding: "2px" }}>
                            {supplierSizes.measurements[0].type_label ===
                            "Length"
                                ? "Largo"
                                : "Ancho"}
                        </span>
                        {supplierSizes.measurements[0].values.map(
                            (value, index) => {
                                return (
                                    <span
                                        style={{ padding: "2px" }}
                                        key={index}
                                    >
                                        {value.value}
                                    </span>
                                );
                            }
                        )}
                    </div>
                    {/* Table Row */}
                    <div
                        style={{
                            gridColumn: "1 / -1",
                            display: "grid",
                            gridTemplateColumns: `repeat(${
                                supplierSizes.measurements[1].values.length + 1
                            }, minmax(40px, 1fr))`,
                        }}
                    >
                        <span style={{ padding: "2px" }}>
                            {supplierSizes.measurements[1].type_label ===
                            "Length"
                                ? "Largo"
                                : "Ancho"}
                        </span>
                        {supplierSizes.measurements[1].values.map(
                            (value, index) => {
                                return (
                                    <span
                                        style={{ padding: "2px" }}
                                        key={index}
                                    >
                                        {value.value}
                                    </span>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
