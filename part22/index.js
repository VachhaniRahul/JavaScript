// password generators

function generators(length, includeLowercase, includeuppercase, includeNumbers, includeSymbol) {

    const lowercaseLetter = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const number = '0123456789';
    const Symbols = '!@#$%^&*()_-+*/{}[]|\/?';

    let allowedLetters = '';
    let password = '';

    allowedLetters += includeLowercase ? lowercaseLetter : '';
    allowedLetters += includeuppercase ? uppercaseLetter : '';
    allowedLetters += includeNumbers ? number : '';
    allowedLetters += includeSymbol ? Symbols : '';

    if (length <= 0) {
        return `password length must be at least 1`

    }
    if (allowedLetters.length === 0) {
        return `At least 1 set of character needs to be selected`;

    }
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random()*allowedLetters.length);
        password += allowedLetters[randomIndex];
    }
    return password;
}

const passwordLength = 10;
const includeLowercase = false;
const includeuppercase = false;
const includeNumbers = false;
const includeSymbol = false;


const password = generators(passwordLength, includeLowercase, includeuppercase, includeNumbers, includeSymbol);

console.log(password);

