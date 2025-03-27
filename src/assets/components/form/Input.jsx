import PropTypes from "prop-types";

export const Input = (props) => {
    const {
        label,
        type,
        placeholder,
        id,
        name,
        error,
    } = props;

    return (
        <>
            <label for={id}>{label}</label>
            <input id={id} name={name} type={type} placeholder={placeholder || label} />
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
