function validateFormData(formData) {
    const errors = {};

    // Check name
    if (typeof formData.name !== 'string' || formData.name.trim() === '') {
        errors.name = 'Name is required.';
    }

    // Check email
    if (typeof formData.email !== 'string' || formData.email.trim() === '') {
        errors.email = 'Email is required.';
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            errors.email = 'Email is not valid: should be example@mail.com.';
        }
    }

    // Check message
    if (typeof formData.message !== 'string' || formData.message.trim() === '') {
        errors.message = 'Message is required';
    }

    // Check country (select)
    if (typeof formData.country !== 'string' || formData.country.trim() === '') {
        errors.country = 'Country selection is required.';
    }

    return errors;
}

export {validateFormData}