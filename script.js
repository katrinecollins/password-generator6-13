
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

  // ending 

  for (let i = 0; i < passwordsize; i++) {

   //  && AND  --> if at least one of the statements is false, then the final outcome is false
   //  || OR   --> if at least one of the statements is true, then the final outcome is true
   //  ! NOT

      if (isLowerCase && finalPassword.length < passwordsize) {
        // var lowercase = "abcdefghijklmnopqrstuvwxyz"
        //                  012345
    
        var randomPickLowerCase = Math.floor(Math.random() * lowercase.length)
        //  randomPickLowerCase = 15
    
        var pickOneLowerCaseLetter = lowercase.charAt(randomPickLowerCase)
        // pickOneLowerCaseLetter =  "abcdefghijklmnopqrstuvwxyz".charAt(15)
        // pickOneLowerCaseLetter =  "p"
    
        finalPassword =finalPassword+ pickOneLowerCaseLetter 
        // finalPassword =  "" + "p"
        // finalPassword = "p"
      }
    
    
      if(isUpperCase && finalPassword.length < passwordsize){
        var randomPickUpperCase = Math.floor(Math.random() * uppercase.length)
        // 2
    
        var pickOneUpperCaseLetter = uppercase.charAt(randomPickUpperCase)
        // C
    
        finalPassword =finalPassword+ pickOneUpperCaseLetter
        // finalPassword = "p" + "C"
        // finalPassword= "pC"
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



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)