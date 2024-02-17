function caesarEncryption(text, amount = 0){
    let newString = [];
    for(let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        let newCode;
        if(char >= 65 && char <= 90) {
            newCode = (char  - 65 + amount) % 26 + 65;
        }else if(char >= 97 && char <= 122){
            newCode = (char  - 97 + amount) % 26 + 97;
        }
        newString.push(String.fromCharCode(newCode));
    }
    return newString.join('');
}

function symbolEncryption(text){
    const symbols = {
        'i': '!',
        '!': 'i',
        'l': '1',
        '1': 'l',
        's': '$',
        '$': 's',
        'o': '0',
        '0': 'o',
        'a': '@',
        '@': 'a',
        'e': '3',
        '3': 'e',
        'b': '6',
        '6': 'b'
      };
    let output = '';
    for(let i = 0; i < text.length; i++){
        let char = text[i].toLowerCase();

        if(symbols[char]){
            output += symbols[char];
        }else{
            output += char;
        }
    }

    return output;
}


module.exports.caesarEncryption = caesarEncryption;
module.exports.symbolEncryption = symbolEncryption;