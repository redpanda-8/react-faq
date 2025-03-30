import PropTypes from "prop-types";
import styles from "./Button.module.css"

export const Button = (props) => {
    const {
        type,
        label,
        onClick,
    } = props;

    return (
        <button className={styles.cBtn} type={type} onClick={onClick}>{label}</button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['button', 'submit'])
};

Button.defaultProps = {
    type: "button"
};
