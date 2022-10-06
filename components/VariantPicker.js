import { VariantPickerWrapper } from "../styles/ProductStyle";
const VariantPicker = ({ variants, ...props }) => {
    if (variants.length === (0 || 1)) return null;

    return (
        <VariantPickerWrapper {...props}>
            {variants.map(({ external_id, name }) => (
                <option key={external_id} value={external_id}>
                    {name}
                </option>
            ))}
        </VariantPickerWrapper>
    );
};

export default VariantPicker;
