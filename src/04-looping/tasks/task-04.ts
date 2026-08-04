/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales: number[] = [
    125000, 350000, 78000, 910000, 150000, 
    420000, 275000, 99000, 640000, 18000
];

let totalRevenue: number = 0;
let largeTransactionsCount: number = 0;

let highestTransaction: number = sales[0];
let lowestTransaction: number = sales[0];

for (let i: number = 0; i < sales.length; i++) {
    const currentSale: number = sales[i];

    totalRevenue += currentSale;

    if (currentSale >= 300000) {
        largeTransactionsCount++;
    }

    if (currentSale > highestTransaction) {
        highestTransaction = currentSale; 

    if (currentSale < lowestTransaction) {
        lowestTransaction = currentSale; 
    }
}

const averageTransaction: number = totalRevenue / sales.length;


console.log(`Total Sales Revenue         : Rp ${totalRevenue.toLocaleString('id-ID')}`);
console.log(`Highest Transaction         : Rp ${highestTransaction.toLocaleString('id-ID')}`);
console.log(`Lowest Transaction          : Rp ${lowestTransaction.toLocaleString('id-ID')}`);
console.log(`Large Transactions (>=300k) : ${largeTransactionsCount} transactions`);
console.log(`Average Transaction         : Rp ${averageTransaction.toLocaleString('id-ID')}`);
}