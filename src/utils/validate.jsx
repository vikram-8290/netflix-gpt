export const CheckValidateData = (email,password) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()]).{8,}$/;
    if(!emailRegex.test(email)){
        return "Invalid Email";
    }
    if(!passwordRegex.test(password)){
        return "Invalid Password";
    }
    return null;
}