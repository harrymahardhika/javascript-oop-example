/**
 * This file demonstrates the usage of classes and modules in JavaScript.
 * It imports classes from 'Animal.js' and 'Person.js' modules and creates instances of those classes.
 * It also demonstrates the usage of a simple bank module called 'simple-bank.js'.
 */
import { Bird, Cat, Dog, Tiger } from './Animal.js'
import { Person } from './Person.js'
import simpleBank from './simple-bank.js'

const john = new Person('John', 25)
john.greet()

const jane = new Person('Jane', 23)
jane.greet()

const tweety = new Bird('Yellow', 'Tweety')
const heli = new Dog('Heli')
const aurora = new Cat('Aurora')
const macaaaan = new Tiger('Macaaaan')

tweety.speak()
console.log(tweety.getColor())

heli.speak()
aurora.speak()
macaaaan.speak()

console.log(tweety)
console.log(Object.keys(tweety).length > 0)

// run bank example
simpleBank()
