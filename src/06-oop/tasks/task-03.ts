/**
 * A school library wants to create a digital system for managing books.
 * 
 * Each book has:
 * - ISBN
 * - Title
 * - Author
 * - Total pages
 * - Borrowing status
 * 
 * The library wants to prevent users from directly changing the borrowing status.
 * Instead, the status can only change through:
 * - borrow()
 * - returnBook()
 * 
 * Business Rules
 * - A book can only be borrowed when: status = available
 * - When a book is borrowed: available → borrowed
 * - A borrowed book cannot be borrowed again.
 * - When the book is returned: borrowed → available
 * - An available book cannot be returned.
 * 
 * Tasks:
 * - create class Book that minimum has property and method below:
 *   - private status: string;
 *   - borrow()
 *   - returnBook()
 *   - showInfo()
 *   - isAvailable()
 * - implement class with at least 2 objects
 */class Book {
    private status: string;

    private isbn: string;
    private title: string;
    private author: string;
    private totalPages: number;

    constructor(
        isbn: string,
        title: string,
        author: string,
        totalPages: number
    ) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.totalPages = totalPages;

        // Initial status
        this.status = "available";
    }

    // Borrow the book
    borrow(): void {
        if (this.status === "available") {
            this.status = "borrowed";
            console.log(`"${this.title}" berhasil dipinjam.`);
        } else {
            console.log(`"${this.title}" sedang dipinjam.`);
        }
    }

    // Return the book
    returnBook(): void {
        if (this.status === "borrowed") {
            this.status = "available";
            console.log(`"${this.title}" berhasil dikembalikan.`);
        } else {
            console.log(`"${this.title}" belum dipinjam.`);
        }
    }

    // Check whether the book is available
    isAvailable(): boolean {
        return this.status === "available";
    }

    // Display book information
    showInfo(): void {
        console.log("====== BOOK INFORMATION ======");
        console.log(`ISBN: ${this.isbn}`);
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Total Pages: ${this.totalPages}`);
        console.log(`Status: ${this.status}`);
    }
}


// Create at least 2 book objects

const book1 = new Book(
    "978-602-123456-1",
    "Laskar Pelangi",
    "Andrea Hirata",
    529
);

const book2 = new Book(
    "978-602-987654-2",
    "Bumi",
    "Tere Liye",
    440
);


// Show initial information
book1.showInfo();
book2.showInfo();


// Borrow book 1
book1.borrow();

console.log(`Book 1 available? ${book1.isAvailable()}`);


// Try to borrow book 1 again
book1.borrow();


// Return book 1
book1.returnBook();

console.log(`Book 1 available? ${book1.isAvailable()}`);


// Try to return book 1 again
book1.returnBook();


// Borrow book 2
book2.borrow();


// show informasi final
book1.showInfo();
book2.showInfo();