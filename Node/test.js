const crypto = require('crypto');

function hashPIN(pin) {
    // Create a SHA-256 hash object
    const hash = crypto.createHash('sha256');
    
    // Update the hash object with the PIN
    hash.update(pin);
    
    // Calculate the digest (hash) of the input PIN
    const hashedPIN = hash.digest('hex');
    
    return hashedPIN;
}

// Example usage:
const pin = '1234'; // Replace this with the actual PIN
const hashedPIN = hashPIN(pin);
console.log('Hashed PIN:', hashedPIN);
