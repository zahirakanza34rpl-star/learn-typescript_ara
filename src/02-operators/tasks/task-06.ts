/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const hourlyRate = 8000
const hours = 7
const minutes = 35

const totalMinutes = (hours * 60) + minutes;

const remainingMinutes = totalMinutes % 60;

const billedHours = remainingMinutes > 0 ? hours + 1 : hours;

const totalPayment = billedHours * hourlyRate;

const discount = billedHours > 5 ? totalPayment * 0.15 : 0;

const finalPayment = totalPayment - discount;

console.log("Total Minutes      :", totalMinutes);
console.log("Remaining Minutes  :", remainingMinutes);
console.log("Billed Hours       :", billedHours);
console.log("Payment Before Disc: Rp" + totalPayment);
console.log("Discount           : Rp" + discount);
console.log("Final Payment      : Rp" + finalPayment);