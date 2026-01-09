

   
export const checkValidData = (email, password) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  // const isNameValid = /^[A-Za-z][A-Za-z ]{1,29}$/.test(username);

  // const isPhoneNumberValid = /^(?:\+91|0)?[6-9]\d{9}$/.test(phoneNumber);


  // if(!isNameValid) {
  //   return "Name must be alphabetic & 2-30 chars."
  // }

  // if(!isPhoneNumberValid) {
  //   return "Invalid phone number."
  // }

  if (!isEmailValid) {
    return "Invalid email.";
  }

  if (!isPasswordValid) {
    return "Weak password.";
  }

  return null;
};
