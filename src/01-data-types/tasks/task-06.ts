/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type product ={
    productCode: number,
    productName: string,
    price: string,
    stock: number,
    weight: string,
    CusRating: number,
    isDiscount: boolean,
}

const product1: product ={
    productCode: 12,
    productName: "Pengki",
    price: "Rp12.000",
    stock: 34,
    weight: "400gr",
    CusRating: 5,
    isDiscount: true,
}

const product2: product ={
    productCode: 120,
    productName: "Sapu",
    price: "Rp23.000",
    stock: 340,
    weight: "400gr",
    CusRating: 5,
    isDiscount: true,
}

const product3: product ={
    productCode: 144
    productName: "Ember"
    price: "Rp40.000"
    stock: 23
    weight: "500gr"
    CusRating: 5
    isDiscount: false
}

// product 1
console.log("Product1")
console.log(`Product Code: ${product1.productCode}`)
console.log(`Product Name: ${product1.productName}`)
console.log(`Product Price: ${product1.price}`)
console.log(`Product Stock: ${product1.stock}`)
console.log(`Product Weight: ${product1.weight}`)
console.log(`Customer Rating: ${product1.CusRating}`)
console.log(`Is It Discount: ${product1.isDiscount}`)

// product 2
console.log("Product2")
console.log(`Product Code: ${product2.productCode}`)
console.log(`Product Name: ${product2.productName}`)
console.log(`Product Price: ${product2.price}`)
console.log(`Product Stock: ${product2.stock}`)
console.log(`Product Weight: ${product2.weight}`)
console.log(`Customer Rating: ${product2.CusRating}`)
console.log(`Is It Discount: ${product2.isDiscount}`)

// product 3
console.log("Product3")
console.log(`Product Code: ${product3.productCode}`)
console.log(`Product Name: ${product3.productName}`)
console.log(`Product Price: ${product3.price}`)
console.log(`Product Stock: ${product3.stock}`)
console.log(`Product Weight: ${product3.weight}`)
console.log(`Customer Rating: ${product3.CusRating}`)
console.log(`Is It Discount: ${product3.isDiscount}`)