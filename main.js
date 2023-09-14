const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit',e => {
    e.preventDefault();
    validateInputs();
});

const setError =(element,message) => {
    const inputFunction = element.parentElement;
    const errorDisplay = inputFunction.querySelector('.error');

    errorDisplay.innerText = message;
    inputFunction.classList.add('error');
    inputFunction.classList.remove('success');
}

    const setSuccess = element => {
        const inputFunction = element.parentElement;
        const errorDisplay = inputFunction.querySelector('.error');
        errorDisplay.innerText='';
        inputFunction.classList.add('success');
        inputFunction.classList.remove('error');
    }

    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

const validateInputs = () =>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        setError(username,'Username is required');
    }else{
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email,'Email is required');
    }else if(!isValidEmail(emailValue)){
        setError(email,'Please enter a valid email address');
    }else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password,'Strong password needed');
    }else if(passwordValue.length < 10){
        setError(password,'Password must be of 10 character');
    } else {
        setSuccess(password);
    }

    if(password2Value === ''){
        setError(password2,'Please confirm your password');
    }else if(password2Value !== passwordValue){
        setError(password2,'Password did not match' )
    }else {
        setSuccess(password2);
    }
};