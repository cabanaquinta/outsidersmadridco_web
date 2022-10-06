import React from "react";
import { ColorSizeWrapper } from "../styles/ProductDetailsStyle";

const ColorPicker = ({ colors, colorSelected, ...props }) => {
    return (
        <ColorSizeWrapper>
            <p style={{ fontSize: "var(--fs-200)" }}>
                COLOR: <span>{colorSelected}</span>
            </p>
            <div>
                {colors.map((color, index) => (
                    <button
                        style={{
                            background:
                                colorSelected === color
                                    ? "var(--buttonBackground)"
                                    : "var(--light)",
                            color:
                                colorSelected === color
                                    ? "var(--light)"
                                    : "var(--buttonBackground)",
                        }}
                        key={index}
                        value={color}
                        {...props}
                    >
                        {color}
                    </button>
                ))}
            </div>
        </ColorSizeWrapper>
    );
};

export default ColorPicker;
