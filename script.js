// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJCLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|" ;
var passwordLength;
var checkUppercase;
var checkNumber;
var checkSpecial;

function chooseLength(){
    passwordLength = prompt("Choose the character length of your password (8-128 characters):");

        if (passwordLength < 8){
            alert("Length must be between 8-128 characters")
            chooseLength();
        }else if (passwordLength>128){
            alert("Length must be between 8-128 characters");
            chooseLength();
        }else if (isNaN(passwordLength)){
            alert("Password length must be a number value between 8-128");
            chooseLength();
        }else{
            alert("You will now be asked what types of characters to include \n(default is lowercase letters)");
        }
        return passwordLength;
}

function passUppercase(){
    checkUppercase = prompt("Include uppercase letters in password \n (Yes or NO)");
    checkUppercase = checkUppercase.toLowerCase();

    if (checkUppercase === null || checkUppercase === ""){
        alert("Answer Yes(Y) or NO(N)");
        passUppercase();
    }else if (checkUppercase === "yes" || checkUppercase === "y"){
        checkUppercase = true;
        return checkUppercase;
    }else if (checkUppercase === "no" || checkUppercase === "n"){
        checkUppercase = false;
        return checkUppercase;
    }else{
        alert("Answer Yes(Y) or NO(N)");
        passUppercase();
    }
    return checkUppercase;
}

function passNumbers(){
    checkNumber = prompt("Include numbers in password \n (Yes or NO)");
    checkNumber = checkNumber.toLowerCase();

    if (checkNumber === null || checkNumber === ""){
        alert("Answer Yes(Y) or NO(N)");
        passNumbers();
    }else if (checkNumber === "yes" || checkNumber === "y"){
        checkNumber = true;
        return checkNumber;
    }else if (checkNumber === "no" || checkNumber === "n"){
        checkNumber = false;
        return checkNumber;
    }else{
        alert("Answer Yes(Y) or NO(N)");
        passNumbers();
    }
    return checkNumber;
}

function passSpecial(){
    checkSpecial = prompt("Include special characters in password \n (Yes or NO)");
    checkSpecial = checkSpecial.toLowerCase();

    if (checkSpecial === null || checkSpecial === ""){
        alert("Answer Yes(Y) or NO(N)");
        passSpecial();
    } else if (checkSpecial === "yes" || checkSpecial === "y"){
        checkSpecial = true;
        return checkSpecial;
    } else if (checkSpecial === "no" || checkSpecial === "n"){
        checkSpecial = false;
        return checkSpecial;
    } else {
        alert("Answer Yes(Y) or NO(N)");
        passSpecial();
    }
    return checkSpecial;
}

function generatePassword(){
    chooseLength();
    console.log(passwordLength);
    passUppercase();
    console.log(checkUppercase);
    passNumbers();
    console.log(checkNumber);
    passSpecial();
    console.log(checkSpecial);

    var passwordChar = lowerChar;
    var password = "";
    if (checkUppercase && checkNumber && checkSpecial){
        passwordChar += upperChar + numberChar + specialChar;
    }else if (checkUppercase && checkNumber){
            passwordChar += upperChar + numberCharChar;
    }else if (checkNumber && checkSpecial){
        passwordChar += numberChar + specialChar;
    }else if (checkUppercase && checkSpecial){
        passwordChar += upperChar + specialChar;
    }else if (checkUppercase){
        passwordChar += upperChar;
    }else if (checkNumber){
        passwordChar += numberChar;
    }else if (checkSpecial){
        passwordChar += specialChar;
    }else{
        passwordChar += lowerChar;
    }

    for (var i = 0; i < passwordLength; i++){
        password += passwordChar.charAt(Math.floor(Math.random() * passwordChar.length));
    }
    return password
}

// Write password to the #password input

function writePassword() {
  var password = "";
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// function resetText(){
//     document.getElementById("password").value = "Your Secure Password";
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);