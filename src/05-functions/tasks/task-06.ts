/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

function calculateTotalSales(sales: number[]): number {
    let total = 0;

    for (const sale of sales) {
        total += sale;
    }

    return total;
}

function findHighestTransaction(sales: number[]): number {
    let highest = sales[0];

    for (const sale of sales) {
        if (sale > highest) {
            highest = sale;
        }
    }

    return highest;
}

function findLowestTransaction(sales: number[]): number {
    let lowest = sales[0];

    for (const sale of sales) {
        if (sale < lowest) {
            lowest = sale;
        }
    }

    return lowest;
}

function calculateAverageSale(sales: number[]): number {
    let total = 0;

    for (const sale of sales) {
        total += sale;
    }

    return total / sales.length;
}

function countLargeTransactions(
    sales: number[],
    minimumAmount: number
): number {
    let count = 0;

    for (const sale of sales) {
        if (sale > minimumAmount) {
            count++;
        }
    }

    return count;
}

const sales: number[] = [
    250000,
    750000,
    500000,
    1200000,
    350000
];

console.log("Total Sales:", calculateTotalSales(sales));
console.log("Highest Transaction:", findHighestTransaction(sales));
console.log("Lowest Transaction:", findLowestTransaction(sales));
console.log("Average Transaction:", calculateAverageSale(sales));
console.log(
    "Transactions above Rp500,000:",
    countLargeTransactions(sales, 500000)
);