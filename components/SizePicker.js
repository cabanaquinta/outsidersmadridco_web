import React from "react";
import { ColorSizeWrapper } from "../styles/ProductDetailsStyle";

const SizePicker = ({ sizes, sizeSelected, ...props }) => {
    const sizeSelectedLen = sizeSelected.split("/");
    const sizeSelectedCustom =
        sizeSelectedLen.length > 1
            ? sizeSelectedLen[1].replace(" ", "")
            : sizeSelectedLen[0];
    return (
        <ColorSizeWrapper>
            <p>
                TALLA: <span>{sizeSelectedCustom}</span>
            </p>

            <div>
                {sizes.map((size, index) => (
                    <button
                        style={{
                            background:
                                sizeSelectedCustom === size
                                    ? "var(--buttonBackground)"
                                    : "var(--light)",

                            color:
                                sizeSelectedCustom === size
                                    ? "var(--light)"
                                    : "var(--buttonBackground)",
                        }}
                        key={index}
                        value={size}
                        {...props}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </ColorSizeWrapper>
    );
};

export default SizePicker;
