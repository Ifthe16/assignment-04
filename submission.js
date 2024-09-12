function calculateTax(income, expenses) {
    if (typeof income !== 'number' || typeof expenses !== 'number') {
        return "Invalid Input";
    }
    if (income < 0 || expenses < 0 || income < expenses) {
        return "Invalid Input";
    }
    const monthlySavings = income - expenses;
    const tax = monthlySavings * 0.2;
    return tax;
}


function sendNotification(email) {
    if (typeof email !== 'string') {
        return "Invalid Email";
    }
    if (email.includes('@') !== true) {
        return "Invalid Email";
    }
    const splitEmail = email.split('@');
    const userName = splitEmail[0];
    const domainName = splitEmail[1];
    const notification = userName + ' sent you an email from ' + domainName;
    return notification;
}


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


function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        return "Invalid Input";
    }
    if (typeof obj.name !== 'string' || typeof obj.testScore !== 'number' || typeof obj.schoolGrade !== 'number' || typeof obj.isFFamily !== 'boolean') {
        return "Invalid Input";
    }
    if (obj.testScore > 50 || obj.schoolGrade > 30) {
        return "Invalid Input";
    }
    let totalMarks = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily === true) {
        totalMarks += 20;
    }
    if (totalMarks >= 80) {
        return true;
    }
    else {
        return false;
    }
}


function waitingTime(waitingTimes, serialNumber) {
    if (Array.isArray(waitingTimes) === false || typeof serialNumber !== 'number') {
        return 'Invalid Input';
    }
    if (serialNumber <= waitingTimes.length) {
        return 'Invalid Input';
    }
    let sum = 0;
    for (const time of waitingTimes) {
        sum += time;
    }
    const avg = sum / waitingTimes.length;
    const roundedAvg = Math.round(avg);
    const totalRemainingPerson = serialNumber - 1;
    const remainingPerson = totalRemainingPerson - waitingTimes.length;
    const needToWait = remainingPerson * roundedAvg;
    return needToWait;
}