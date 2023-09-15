

export const checkValidData = (fullName, email, password) =>{


    const isFullNameValid = /^[a-zA-Z\s]+$/.test(fullName);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    

    if(!isFullNameValid) return "Invalid Name";
    if(!isEmailValid) return "Invalid Email";
    if(!isPasswordValid) return "Invalid Password";
    

    return null;
}