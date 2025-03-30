import PropTypes from "prop-types";

export const Textarea = (props) => {
    const {
        label,
        placeholder,
        id,
        name,
        error,
        onChange,
    } = props;

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <textarea id={id} name={name} onChange={onChange} placeholder={placeholder || label} />
            {/* if error - show error */}
            {error && <span>{error}</span>} 
        </>
    );
};

Textarea.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};
