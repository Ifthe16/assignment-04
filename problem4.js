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

const person = { name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true }

const calculateScore = calculateFinalScore(person);
console.log(calculateScore);



