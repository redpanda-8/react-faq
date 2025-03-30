import PropTypes from "prop-types";
import styles from "./Input.module.css";

export const Textarea = (props) => {
    const {
        label,
        placeholder,
        id,
        name,
        error,
        onChange,
        required,
        value,
        info,
    } = props;

    return (
        <div className={styles.formRow}>
            <label className={styles.label} htmlFor={id}>{label} {required && <span className={styles.errorMsg}>*</span> }</label>
            <textarea className={styles.input} id={id} name={name} onChange={onChange} placeholder={placeholder || label} required={required} value={value} />
            {/* if error - show error */}
            {info && <span className={styles.infoMsg}>{info}</span>}
            {error && <span className={styles.errorMsg}>{error}</span>} 
        </div>
    );
};

Textarea.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};
