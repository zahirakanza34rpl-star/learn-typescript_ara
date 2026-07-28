/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type book ={
    isbn: number
    title: string
    author: string
    totalpages: number
    category: string
    isAvailable: boolean
}

const book1: Book = {
  isbn: 01323,
  title: "Clean Code",
  author: "Robert C. Martin",
  totalPages: 464,
  category: "Programming",
  isAvailable: true
}

const book2: Book = {
  isbn: 11323,
  title: "Clean Room",
  author: "Robert ",
  totalPages: 434,
  category: "thriler",
  isAvailable: true
}

const book3: Book = {
  isbn: 77323,
  title: "Slide",
  author: "Martin",
  totalPages: 324,
  category: "Comedy",
  isAvailable: false
}

//book 1 
console.log("Book 1")
console.log(`Book isbn: ${book1.isbn}`)
console.log(`Book Title: ${book1.title}`)
console.log(`Author Name: ${book1.author}`)
console.log(`Total Pages: ${book1.totalPages}`)
console.log(`Book Category: ${book1.category}`)
console.log(`Is Book Available: ${book1.isAvailable}`)

// book 2
console.log("Book 2")
console.log(`Book isbn: ${book2.isbn}`)
console.log(`Book Title: ${book2.title}`)
console.log(`Author Name: ${book2.author}`)
console.log(`Total Pages: ${book2.totalPages}`)
console.log(`Book Category: ${book2.category}`)
console.log(`Is Book Available: ${book2.isAvailable}`)

// book 3
console.log("Book 3")
console.log(`Book isbn: ${book3.isbn}`)
console.log(`Book Title: ${book3.title}`)
console.log(`Author Name: ${book3.author}`)
console.log(`Total Pages: ${book3.totalPages}`)
console.log(`Book Category: ${book3.category}`)
console.log(`Is Book Available: ${book3.isAvailable}`)