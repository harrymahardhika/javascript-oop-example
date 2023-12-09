/**
 * Represents a bank.
 * @class
 */
export default class Bank {
  accounts = []

  /**
   * Creates a new Bank instance.
   * @constructor
   * @param {string} name - The name of the bank.
   */
  constructor(name) {
    this.name = name
  }

  /**
   * Adds an account to the bank.
   * @param {Account} account - The account to be added.
   */
  addAccount(account) {
    this.accounts.push(account)
  }

  /**
   * Retrieves an account by its number.
   * @param {string} number - The account number.
   * @returns {Account} The account with the specified number, or undefined if not found.
   */
  getAccount(number) {
    return this.accounts.find((account) => account.number === number)
  }

  /**
   * Deletes an account by its number.
   * @param {string} number - The account number.
   */
  deleteAccount(number) {
    const account = this.getAccount(number)
    const index = this.accounts.indexOf(account)
    this.accounts.splice(index, 1)
  }

  /**
   * Lists all accounts in the bank.
   * @returns {Account[]} An array of all accounts in the bank.
   */
  listAccounts() {
    return this.accounts
  }
}
