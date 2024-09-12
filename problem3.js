function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    }
    for (let letter = 0; letter < name.length; letter++) {
        if (!isNaN(name[letter]) && name[letter] !== ' ') {
            return true;
        }
    }
    return false;
}

const checkedName = checkDigitsInName('Angela White');
console.log(checkedName);
