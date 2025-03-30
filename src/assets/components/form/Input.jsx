import PropTypes from "prop-types";
import styles from "./Input.module.css";

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
        required,
        info,
    } = props;

    return (
        <div className={styles.formRow}>
            <label className={styles.label} htmlFor={id}>{label}{required && <span className={styles.errorMsg}>*</span> }</label>
            <input className={styles.input} id={id} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder || label} required={required} />
            {/* if error - show error */}
            {info && <span className={styles.infoMsg}>{info}</span>} 
            {error && <span className={styles.errorMsg}>{error}</span>} 
        </div>
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
