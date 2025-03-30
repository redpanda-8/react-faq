import PropTypes from "prop-types";

export const Input = (props) => {
    const {
        label,
        type,
        placeholder,
        id,
        name,
        error,
        value,
        onChange,
    } = props;

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder || label} />
            {/* if error - show error */}
            {error && <span>{error}</span>} 
        </>
    );
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'email', 'tel']),
    placeholder: PropTypes.string
};

Input.defaultProps = {
    type: "text"
};
