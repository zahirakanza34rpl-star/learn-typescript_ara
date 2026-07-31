/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const MechanicalKeyboard = 850000
const KeyboardQty = 1

const WirelessMouse = 275000
const MouseQty = 2

const MousePad = 120000
const PadQty = 1

const isPremium = true

const subtotal = 
(MechanicalKeyboard * KeyboardQty) +
(WirelessMouse * MouseQty) +
(MousePad * PadQty)

let totalItems = 0

for(let i = 0; i < KeyboardQty; i++){
    totalItems++;
}

for(let i = 0; i < MouseQty; i++){
    totalItems++;
}

for(let i = 0; i < PadQty; i++){
    totalItems++;
}

const hasDiscount = subtotal > 1000000

const discount = hasDiscount ? subtotal * 0.10 : 0
const shippingCost = isPremium ? 0 : 20000
const finalPayment = subtotal - discount +  shippingCost

console.log("Subtotal       : Rp", subtotal)
console.log("Total items    : Rp", totalItems)
console.log("Discount       : Rp", discount)
console.log("Free shipping  : Rp", isPremium)
console.log("Final Payment  : Rp", finalPayment)