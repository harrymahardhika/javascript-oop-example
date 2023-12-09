/**
 * Represents a person.
 */
export class Person {
  /**
   * Creates a new instance of the Person class.
   * @param {string} name - The name of the person.
   * @param {number} age - The age of the person.
   */
  constructor(name = 'John', age = 30) {
    this.name = name
    this.age = age
  }

  /**
   * Prints a greeting message with the person's name.
   */
  greet() {
    console.log(`Hello, my name is ${this.name}.`)
  }

  /**
   * Gets the name of the person.
   * @returns {string} The name of the person.
   */
  getName() {
    return this.name
  }
}
