import { formatCurrency } from './helper.js'

/**
 * Represents a transaction.
 */
export default class Transaction {
  /**
   * Creates a new Transaction instance.
   * @param {string} accountNumber - The account number associated with the transaction.
   * @param {number} amount - The amount of the transaction.
   */
  constructor(accountNumber, amount) {
    this.accountNumber = accountNumber
    this.amount = amount
  }

  /**
   * Returns a string representation of the transaction.
   * @returns {string} The string representation of the transaction.
   */
  toString() {
    const amount = formatCurrency(Math.abs(this.amount))
    const transactionType = this.amount > 0 ? 'deposit' : 'withdraw'
    return `${transactionType} ${amount}`
  }
}
