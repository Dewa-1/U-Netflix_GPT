export const checkValidData = (email, password) => {

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const isPasswordValid =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            .test(password);






    if (!isEmailValid) {
        return "Invalid email.";
    }

    if (!isPasswordValid) {
        return "Weak password.";
    }

    return null;
};
