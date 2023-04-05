//Create a function that returns the encrypted string using the famous Caesar Cipher
function rot13(str) {
    //Assign a blank variable to be reassigned later on
    let cipher = "";
    //Loop through all characters of the string passed as an argument
    for(let i = 0; i < str.length; i++){
        //Find the index letter ASCII value using the charCodeAt() method
        let ascii = str[i].charCodeAt();
        //If the ASCII value is between 65 or 90(values for A to Z)
        if(ascii >= 65 && ascii <= 90){
            //Reasign the ascii variable using the character ASCII value minus 65 (to get a zero-based index), and add the number 13
            //Then, modulus this number with the 26 (because of the 26 alphabet letters) and add 65 again to get the corresponding ASCII values for uppercase letters
            ascii = ((ascii - 65 + 13) %26) + 65;
        }
        //Create a variable to store the converted ASCII value to a String using the fromCharCode() method
        let convert = String.fromCharCode(ascii);
        //Store he converted value to the blank cipher variable
        cipher += convert;
    }
    //After the loop, print the ciphertext and return it
    console.log(cipher);
    return cipher;
}

//Function calls:
rot13("SERR PBQR PNZC");