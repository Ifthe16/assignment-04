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

const tax = calculateTax(10000, 3000);
console.log(tax);

