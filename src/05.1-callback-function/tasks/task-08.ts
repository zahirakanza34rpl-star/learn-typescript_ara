/**
 * A company has a simple data-processing engine used to analyze transaction records.
 */

import { triggerAsyncId } from "node:async_hooks";

const transactions = [
    {
        id: "TRX001",
        customer: "Alya",
        amount: 850000,
        status: "paid"
    },
    {
        id: "TRX002",
        customer: "Budi",
        amount: 1250000,
        status: "pending"
    },
    {
        id: "TRX003",
        customer: "Citra",
        amount: 450000,
        status: "paid"
    },
    {
        id: "TRX004",
        customer: "Dimas",
        amount: 2100000,
        status: "paid"
    },
    {
        id: "TRX005",
        customer: "Eka",
        amount: 780000,
        status: "cancelled"
    }
];

function processTransactions<T>(
    transaction: typeof transactions,
    callback: (transaction: typeof transactions[number]) => T
): T[]{
    return transaction.map (callback)
}


function getCustomerName(
    transaction: typeof transactions[number]
): string {
    return transaction.customer
}


function getTransactionCategory(
    transaction: typeof transactions[number]
): string {

    if (transaction.amount >= 2000000000){
        return "High Value"
    } else if (transaction.amount >= 1000000000){
        return "Medium Value"
    } else {
        return "Low Value"
    }
}

function calculatePlatformFee(
    transaction: typeof transactions[number]
): number {

    if (transaction.status === "paid") {
        return transaction.amount * 0.02
    } else if (transaction.status === "pending") {
        return transaction.amount * 0.01
    } else {
        return 0
    }
}

console.log("====== CUSTOMER NAMES ======");
console.log(
    processTransactions(transactions, getCustomerName)
);


console.log("====== TRANSACTION CATEGORY ======");
console.log(
    processTransactions(transactions, getTransactionCategory)
);


console.log("====== PLATFORM FEE ======");
console.log(
    processTransactions(transactions, calculatePlatformFee)
);

/** TASKS:
 * - Extract customer's name only in array
 * - Determine Transaction Category with rules below:
 *   - ≥ Rp2,000,000 → HIGH VALUE
 *   - ≥ Rp1,000,000 → MEDIUM VALUE
 *   - < Rp1,000,000 → LOW VALUE
 * - Calculate platform fee:
 *   - Paid transactions → 2%
 *   - Pending transactions → 1%
 *   - Cancelled transactions → 0%
 */