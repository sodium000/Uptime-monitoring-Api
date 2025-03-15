

const utilities = {};
const crypto = require('crypto');
utilities.parseJSON = (jsonString)=>{
    let output ={};
    try{
        output = JSON.parse(jsonString)
    }
    catch{
        output = {};
    }
    return output;
}


// hash 
utilities.hash = (str) => {
    if (typeof str === 'string' && str.length > 0) {
        const hash = crypto.createHmac('sha256', "hsjdhsdhsjdhjshdjshd").update(str).digest('hex');
        return hash;
    }
    return false;
};

utilities.createRandomString = (strlength) => {
    let length = strlength;
    length = typeof (strlength)=== 'number'&& strlength > 0 ? strlength : false;
    if(length){
        const possiblecharacters = 'abcdefghijklmnopqrstuvwxyz1234567890';
        let output = '';
        for (let i = 1; i <= length; i += 1) {
            const randomCharacter = possiblecharacters.charAt(
                Math.floor(Math.random() * possiblecharacters.length)
            );
            output += randomCharacter;
        }
        return output; 
    }
    else{
        return false;
    }
    };



 

module.exports = utilities;