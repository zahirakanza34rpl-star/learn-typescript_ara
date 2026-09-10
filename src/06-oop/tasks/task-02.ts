/**
 * A digital wallet application stores information about a user's account.
 * 
 * A wallet has:
 * - Owner name
 * - Wallet ID
 * - Balance
 * 
 * For example, Jude Bellingham creates a wallet with:
 * | Property        | Value           |
 * | --------------- | --------------- |
 * | Wallet ID       | WAL001          |
 * | Owner           | Harry Maguire   |
 * | Initial Balance | Rp500,000       |
 * 
 * The application allows the user to:
 * - Deposit money
 * - Withdraw money
 * - Check the current balance
 * However, the balance must not be changed directly from outside the class.
 * 
 * Student Tasks:
 * Create: class DigitalWallet
 * Use:
 * - private balance: number;
 * 
 * The class should provide public methods:
 * - deposit(amount)
 * - withdraw(amount)
 * - getBalance()
 * - showWalletInfo()
 * 
 * Business Rules
 * deposit():
 * - Amount must be greater than 0.
 * 
 * withdraw():
 * - Amount must be greater than 0.
 * - Amount cannot exceed the current balance.
 */

class DigitalWallet {
    private balance: number;
    private walletId: string;
    private owner: string;

    constructor(
        walletId: string,
        owner: string,
        balance: number
    ) {
        this.walletId = walletId;
        this.owner = owner;
        this.balance = balance;
    }

    // Deposit money
    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposit berhasil: Rp${amount}`);
        } else {
            console.log("Deposit harus lebih dari 0.");
        }
    }

    // Withdraw money
    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Withdrawal harus lebih dari 0.");
        } else if (amount > this.balance) {
            console.log("Saldo tidak mencukupi.");
        } else {
            this.balance -= amount;
            console.log(`Withdrawal berhasil: Rp${amount}`);
        }
    }

    // Check balance
    getBalance(): number {
        return this.balance;
    }

    // Show wallet information
    showWalletInfo(): void {
        console.log("====== WALLET INFORMATION ======");
        console.log(`Wallet ID: ${this.walletId}`);
        console.log(`Owner: ${this.owner}`);
        console.log(`Balance: Rp${this.balance}`);
    }
}


// Create wallet
const wallet = new DigitalWallet(
    "WAL001",
    "Harry Maguire",
    500000
);


// Show initial information
wallet.showWalletInfo();


// Deposit
wallet.deposit(200000);

// Check balance
console.log(`Current Balance: Rp${wallet.getBalance()}`);


// Withdraw
wallet.withdraw(100000);

// Check balance
console.log(`Current Balance: Rp${wallet.getBalance()}`);


// Try invalid withdrawal
wallet.withdraw(1000000);

// Show final information
wallet.showWalletInfo();