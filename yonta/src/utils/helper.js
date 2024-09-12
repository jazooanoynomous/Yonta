export function generateRandomCode() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const digits = '0123456789';
  
    // Generate two random letters
    let randomCode = '';
    for (let i = 0; i < 2; i++) {
      randomCode += letters.charAt(Math.floor(Math.random() * letters.length));
    }
  
    // Generate four random digits
    for (let i = 0; i < 4; i++) {
      randomCode += digits.charAt(Math.floor(Math.random() * digits.length));
    }
  
    return randomCode;
  }
  