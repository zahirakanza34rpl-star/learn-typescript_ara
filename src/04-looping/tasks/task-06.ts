/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

const stocks: number[] = [
    25, 0, 18, 6, 42,
    9, 0, 55, 13, 2,
    30, 8, 41, 0, 16
];

let totalInventory: number = 0;
let outOfStockCount: number = 0;
let lowStockCount: number = 0;
let safeStockCount: number = 0;

for (let i: number = 0; i < stocks.length; i++) {
    const currentStock: number = stocks[i];

    totalInventory += currentStock;

    if (currentStock === 0) {
        outOfStockCount++; 
    } else if (currentStock < 10) {
        lowStockCount++;   
    } else {
        safeStockCount++;  
    }
}

const averageStock: number = totalInventory / stocks.length;

console.log(`Out of Stock Products : ${outOfStockCount} items`);
console.log(`Low Stock Products    : ${lowStockCount} items`);
console.log(`Safe Stock Products   : ${safeStockCount} items`);
console.log(`Total Inventory       : ${totalInventory} pcs`);
console.log(`Average Stock Quantity: ${averageStock.toFixed(2)}`);
