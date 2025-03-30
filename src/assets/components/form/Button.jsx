import PropTypes from "prop-types";

export const Button = (props) => {
    const {
        type,
        label,
        onClick,
    } = props;

    return (
        <button type={type} onClick={onClick}>{label}</button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['button', 'submit'])
};

Button.defaultProps = {
    type: "button"
};
