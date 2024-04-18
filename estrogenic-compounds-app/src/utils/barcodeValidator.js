// barcodeValidator.js

function isValidUPCA(barcode) {
    // Check if the barcode has a length of 12 digits
    if (barcode.length !== 12) {
      return false;
    }
  
    // Check if all characters in the barcode are digits
    if (!/^\d+$/.test(barcode)) {
      return false;
    }
  
    // Calculate the check digit
    let sum = 0;
    for (let i = 0; i < 11; i++) {
      let digit = parseInt(barcode[i]);
      sum += i % 2 === 0 ? digit * 3 : digit;
    }
    let checkDigit = (10 - (sum % 10)) % 10;
  
    // Compare the calculated check digit with the last digit of the barcode
    return checkDigit === parseInt(barcode[11]);
  }
  
  export { isValidUPCA };
  
