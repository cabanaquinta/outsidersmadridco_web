import React from "react";
import Toggle from "./Toggle";
import { Faq } from "../../styles/ProductDetailsStyle";
import SizeTable from "./SizeTable";

const FaqSection = ({ result }) => {
    return (
        <Faq>
            <Toggle title="Descripción">
                <div className="answer">
                    <p style={{ fontSize: "var(--fs-200)" }}>
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </Toggle>
            {/* Only if there are sizes_available */}
            {result && (
                <Toggle title="Tallaje en cm">
                    <div className="answer">
                        <SizeTable result={result}></SizeTable>
                    </div>
                </Toggle>
            )}
            <Toggle title="Envio">
                <div className="answer">
                    <p style={{ fontSize: "var(--fs-200)" }}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Necessitatibus, neque.
                    </p>
                </div>
            </Toggle>
            <div className="faq-line"></div>
        </Faq>
    );
};

export default FaqSection;
