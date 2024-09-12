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

const time = waitingTime([3, 5, 7, 11, 6], 10);
console.log(time);