
var generatePassword = function () {
  var finalPassword = "" 
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase = "ABCDEFGHIJKLONOPQRSTUVWXYZ"
  var specialCharcters = "%$#()"
  var number = "0123456789"

  var passwordsize = prompt("How many characters would you like your password to contain?")

  console.log(passwordsize)

  var isLowerCase = confirm("Does your password include lowercase?")

  console.log(isLowerCase) 
  
  var isUpperCase = confirm("Does your password include Uppercase?")

  console.log(isUpperCase)
  
  var isSpecialCharacter= confirm("Does your password include  special?")

  console.log(isSpecialCharacter)
  
  var isNumber = confirm("Does your password include number?")
  
  console.log(isNumber)



  for (let i = 0; i < passwordsize; i++) {



      if (isLowerCase && finalPassword.length < passwordsize) {

    
        var randomPickLowerCase = Math.floor(Math.random() * lowercase.length)

    
        var pickOneLowerCaseLetter = lowercase.charAt(randomPickLowerCase)
       
    
        finalPassword =finalPassword+ pickOneLowerCaseLetter 
      
      }
    
    
      if(isUpperCase && finalPassword.length < passwordsize){
        var randomPickUpperCase = Math.floor(Math.random() * uppercase.length)

    
        var pickOneUpperCaseLetter = uppercase.charAt(randomPickUpperCase)
        
    
        finalPassword =finalPassword+ pickOneUpperCaseLetter
       
      }
    
    
      if(isSpecialCharacter  && finalPassword.length < passwordsize){
        var randomPickSpecial = Math.floor(Math.random() * specialCharcters.length)
        var pickOneSpecialCharacterLetter = specialCharcters.charAt(randomPickSpecial)
        finalPassword =finalPassword+ pickOneSpecialCharacterLetter
      }
    
    
      if(isNumber && finalPassword.length < passwordsize){
        var randomPickNumber = Math.floor(Math.random() * number.length)
        var pickOneNumber = number.charAt(randomPickNumber)
        finalPassword =finalPassword+  pickOneNumber
      }
    
  }


  console.log(finalPassword)



  return finalPassword
}




var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword)