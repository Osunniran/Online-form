function signup() {

    // username validation
    if((username.value).length <=5 ) {
        invalid6.innerHTML = 'Username too short'
    } else {
        invalid6.innerHTML = ''
    }

    // phone number validation
    if(( telephone.value).length === 11){
        invalid.innerHTML = ''
    }  else{
        invalid.innerHTML = 'Incorrect Phone Number! Check Again.'
    }
    if(isNaN(telephone.value)){
        invalid1.innerHTML = 'Invalid Phone Number'
    } else{
        invalid1.innerHTML = ''
    }

    console.log(typeof(telephone));

    //  email validation
    if((email.value).includes('@') && (email.value).includes('.com')){
        invalid2.innerHTML = 'Email added Successfully.'
    } else{
        invalid2.innerHTML = 'Input a valid Email Address!' 
    }
    
    // password validation

    if (pswrd.value === pswrd2.value) {
        invalid5.innerHTML = ''
    }   else {
        invalid5.innerHTML = 'Password does not match!'
    }

    if((pswrd.value).includes('@') && (pswrd.value).includes('#') && (pswrd.value).includes('$') && (pswrd.value).includes('!') && (pswrd.value).includes('&') && (pswrd.value).includes('_')){
        invalid4.innerHTML = 'Password Added Succesfully'
    }  else{
        invalid4.innerHTML = 'Password must contain "@" '
    }
    
    if((pswrd2.value).includes('@')){
        invalid4.innerHTML = 'Password Added Succesfully'
    }  else{
        invalid4.innerHTML = 'Password must contain "@" '
    }

    if ((pswrd.value).length >= 7 && (pswrd2.value).length >= 7){
        invalid3.innerHTML = ''
    }  else{
        invalid3.innerHTML = 'Password less than 7 characters!'
    }

    if ((pswrd.value).length <= 0 && (pswrd2.value).length <= 0 ) {
        invalid3.innerHTML = 'Input your Password'
    } else {
        invalid3.innerHTML = ''
    }



    // let password1 = document.getElementById('pswrd')
    // let password2 = document.getElementById('pswrd2').value
}