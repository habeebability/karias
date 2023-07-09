const fruits = ['apple', 'orange', 'banana', 'pear', 'strawberry']

const vegetables = ['potato', 'tomato', 'cucumber', 'cabbage', 'onion']

const fruitsAndVegetables = [...fruits, ...vegetables]

console.log(fruitsAndVegetables)

const developer = {
  salary: 100000,
  experience: 4.2,
  techStack: ['Vue', 'HTML', 'CSS'],
  lookingForWork: true,
  doubleSalary() {
    ;(this.salary = this.salary * 2), (this.lookingForWork = false)
  }
}

developer.doubleSalary()
console.log(developer)
console.log(developer.salary)
console.log(developer.lookingForWork)

export const evenOrOdd = (number) => {
  if (number % 2 === 0) {
    return 'Even'
  } else {
    return 'Odd'
  }
}

const favoriteFood = 'pizza'

// dynamic object key
const goodFoods = {
  [favoriteFood]: true
}
console.log(goodFoods)
