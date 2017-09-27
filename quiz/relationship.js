function getRelationship(x, y) {
    // Your code goes here!
    var msg;
    
    if (isNaN(x) || isNaN(y)) {
        msg = 'Can\'t compare relationships because ';

        if(isNaN(x) && isNaN(y)) {
            msg += x + ' and ' + y + ' are not numbers';
        } else {
            if (isNaN(x)) {
                msg += x;
            } else {
                msg += y;
            }
            msg += ' is not a number';
        }
    } else {
        if (x < y) {
            msg = '<';
        } else if (x === y) {
            msg = '=';
        } else {
            msg = '>';
        }
    }
    return msg;
}

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));
