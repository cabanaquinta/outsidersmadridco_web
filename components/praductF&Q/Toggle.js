import React, { useState } from "react";
import { GoPlusSmall } from "react-icons/go";
import { BiMinus } from "react-icons/bi";

const Toggle = ({ children, title }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <div
            // layout
            className="question"
            onClick={() => setToggle(!toggle)}
        >
            <div className="faq-line"></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ fontSize: "0.8rem" }}>{title}</p>
                {/* <GoPlusSmall
                    style={{
                        transform: toggle ? "rotate(90deg)" : "rotate(-90deg)",
                    }}
                ></GoPlusSmall> */}
                {toggle ? <BiMinus></BiMinus> : <GoPlusSmall></GoPlusSmall>}
            </div>

            {toggle ? children : ""}
        </div>
    );
};

export default Toggle;
