// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function randomPass() {
    let chars =
      "0123456789abcdefghijklmnopqrstuvwxyz!@#$%4^&()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 8;
    let password = "";
  
    for (let i = 0; i < passwordLength; i++) {
      const element = Math.floor(Math.random() * chars.length);
  
      password += chars.substring(element, element + 1);
    }
    return password;
  }
  
  console.log(randomPass());