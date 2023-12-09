/**
 * Represents an Animal.
 * @class
 */
class Animal {
  /**
   * Creates an instance of Animal.
   * @constructor
   * @param {string} name - The name of the animal.
   * @param {number|null} [age=null] - The age of the animal (optional).
   */
  constructor(name, age = null) {
    this.name = name
    this.age = age
  }

  /**
   * Makes the animal speak.
   */
  speak() {
    console.log(`${this.name} makes a noise.`)
  }
}

/**
 * Represents a Bird, which is an Animal.
 * @class
 * @extends Animal
 */
export class Bird extends Animal {
  /**
   * Creates an instance of Bird.
   * @constructor
   * @param {string} color - The color of the bird.
   * @param {string} name - The name of the bird.
   */
  constructor(color, name) {
    super(name)
    this.color = color
  }

  /**
   * Makes the bird speak.
   */
  speak() {
    console.log(`${this.name} chirps.`)
  }

  /**
   * Gets the color of the bird.
   * @returns {string} The color of the bird.
   */
  getColor() {
    return this.color
  }
}

/**
 * Represents a Dog, which is an Animal.
 * @class
 * @extends Animal
 */
export class Dog extends Animal {
  /**
   * Makes the dog speak.
   */
  speak() {
    console.log('Woof!')
  }
}

/**
 * Represents a Cat, which is an Animal.
 * @class
 * @extends Animal
 */
export class Cat extends Animal {
  /**
   * Makes the cat speak.
   */
  speak() {
    console.log('Meow...')
  }
}

/**
 * Represents a Tiger, which is an Animal.
 * @class
 * @extends Animal
 */
export class Tiger extends Animal {}
