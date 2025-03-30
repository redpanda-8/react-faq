import PropTypes from "prop-types";
import styles from "./Input.module.css";

export const Select = (props) => {
    const {
        label,
        placeholder,
        id,
        name,
        error,
        value,
        onChange,
        required,
        info,
        options,
    } = props;

    return (
        <div className={styles.formRow}>
            <label className={styles.label} htmlFor={id}>{label}{required && <span className={styles.errorMsg}>*</span> }</label>
            <select
                className={styles.input}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
            >
                <option value="" disabled>
                    {placeholder || `Select ${label}`}
                </option>
                {options?.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {/* if error - show error */}
            {info && <span className={styles.infoMsg}>{info}</span>} 
            {error && <span className={styles.errorMsg}>{error}</span>} 
        </div>
    );
};

Select.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};
