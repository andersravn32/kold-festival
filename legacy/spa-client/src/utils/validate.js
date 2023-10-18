const containsNumber = (str) => {
    return /\d/.test(str);
}
const validate = (firstName, lastName, email, message) => {
    if (!firstName || !lastName || !email || !message){
        return false;
    }

    if (containsNumber(firstName) || containsNumber(lastName)){
        return false;
    }

    if (!email.includes('@') || !email.includes('.')){
        return false;
    }

    if (message.length >= 1000){
        return false;
    }

    return true;
}
export default validate; 