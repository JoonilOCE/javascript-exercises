const repeatString = function(word, num){
    let string = ""; //create a variable which will store the final result
    for(i=0;i<num;i++){ 
        string += word; //every loop add one 'word' value to the string variable
    }
    return string; 
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
