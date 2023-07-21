// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var lengthInput = this.prompt("Enter the length of the password (At least 8 characters but no more than 128):");
  var length = parseInt(lengthInput);

  if(Number.isNaN(length) || length < 8 || length >128){
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return;
  }

  var includeSpecial = this.confirm("Do you want to include special characters?");
  var includeNumeric = this.confirm("Do you want to include numeric characters?");
  var includeLowercase = this.confirm("Do you want to include lowercase characters?");
  var includeUppercase = this.confirm("Do you want to include uppercase characters?");

  if (!includeSpecial && !includeNumeric && !includeLowercase && !includeUppercase) {
    alert("You must select at least one character type.");
    return;
  }


}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions.call(this);
  // return options;

  var availableCharacters = [];
  var generatedPassword = "";

  if (options.includeSpecial) {
    availableCharacters = availableCharacters.concat(specialCharacters);
    generatedPassword += getRandom(specialCharacters);
  }

  if (options.includeNumeric) {
    availableCharacters = availableCharacters.concat(numericCharacters);
    generatedPassword += getRandom(numericCharacters);
  }
 
  return generatedPassword;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);