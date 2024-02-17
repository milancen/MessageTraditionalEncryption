const encryption = require('./encryption.js');
const caesarEncryption = encryption.caesarEncryption;
const symbolEncryption = encryption.symbolEncryption;




function userCommandLineInput(){
    console.log(process.argv);
    if(process.argv[2].toLowerCase() === 'caesar'){
        let text = process.argv[3];
        let amount = parseInt(process.argv[4]);
        let output = caesarEncryption(text, amount);
        console.log(output);
    }
    if(process.argv[2].toLowerCase() === 'symbol'){
        let text = process.argv[3];
        let output = symbolEncryption(text);
        console.log(output);
    } 
}

userCommandLineInput();