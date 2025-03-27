import PropTypes from "prop-types";

export const Button = (props) => {
    const {
        type,
        label,
    } = props;

    return (
        <button type={type}>{label}</button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['button', 'submit'])
};

Button.defaultProps = {
    type: "button"
};
