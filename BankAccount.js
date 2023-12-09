/**
 * Represents a bank account.
 * @class
 */
import { faker } from '@faker-js/faker'
import Transaction from './Transaction.js'
import { formatName, formatCurrency } from './helper.js'

export default class BankAccount {
  balance = 0
  transactions = []

  /**
   * Creates a new BankAccount instance.
   * @constructor
   * @param {string} owner - The owner of the bank account.
   * @param {string} gender - The gender of the owner.
   */
  constructor(owner, gender) {
    this.number = faker.finance.accountNumber()
    this.owner = owner
    this.gender = gender
  }

  /**
   * Deposits the specified amount into the bank account.
   * @param {number} amount - The amount to deposit.
   */
  deposit(amount) {
    this.balance += amount
    this.transactions.push(new Transaction(this.number, amount))
  }

  /**
   * Withdraws the specified amount from the bank account.
   * @param {number} amount - The amount to withdraw.
   * @throws {Error} If the amount exceeds the account balance.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error('Insufficient balance')
    }

    this.balance -= amount
    this.transactions.push(new Transaction(this.number, -amount))
  }

  /**
   * Returns a string representation of the bank account.
   * @returns {string} The string representation of the bank account.
   */
  toString() {
    const balance = formatCurrency(this.balance)
    const owner = formatName(this.owner, this.gender)
    return `A/N (${this.number}) - ${owner}: ${balance}`
  }

  /**
   * Returns the current balance of the bank account.
   * @returns {string} The current balance of the bank account.
   */
  getBalance() {
    return formatCurrency(this.balance)
  }

  /**
   * Returns an array of transactions made on the bank account.
   * @returns {Transaction[]} An array of transactions made on the bank account.
   */
  getTransactions() {
    return this.transactions
  }
}
