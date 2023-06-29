function generatePassword() {
    console.log('Clicked');
    let length = document.getElementById('rangeValue').textContent;
    let includeUpperCase = document.getElementById('uppercase').checked;
    let includeLowerCase = document.getElementById('lowercase').checked;
    let includeNumbers = document.getElementById('numbers').checked;
    let includeCharacters = document.getElementById('characters').checked;

    if (!includeUpperCase && !includeLowerCase && !includeNumbers && !includeCharacters) {
        includeLowerCase = true; 
        document.getElementById('lowercase').checked = true;
    }

    let uppercaseInput = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowercaseInput = 'abcdefghijklmnopqrstuvwxyz';
    let numbersInput = '1234567890';
    let charactersInput = '~`!@#$%^&*()_-+={}["]:;,<>?/|\*';

    let checkedChars = [];

    if(includeUpperCase) {
        checkedChars.push(...uppercaseInput);
    }

    if(includeLowerCase) {
        checkedChars.push(...lowercaseInput);
    }

    if(includeNumbers) {
        checkedChars.push(...numbersInput);
    }

    if(includeCharacters) {
        checkedChars.push(...charactersInput);
    }

    let password = '';
    for(let i=0; i<length; i++) {
        let randomIndex = Math.floor(Math.random() * checkedChars.length);
        password += checkedChars[randomIndex];
    }

    document.querySelector('.password-field').textContent = password;
}

document.querySelector('.generate-password').addEventListener('click', generatePassword);