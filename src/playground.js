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

// Arrays - order
// Objects - association
// Sets - uniqueness
// Maps - key/value pairs

const numberSets = new Set([1, 2, 3, 4, 5, 5, 5, 5, 5])
console.log(numberSets)

const numbersFilter = [1, 2, 3, 4, 8, 55, 5, 50, 15]

numbersFilter.filter((number) => number > 4)

console.log(numbersFilter)

const jobs = [
  {
    title: 'Frontend Developer',
    organization: 'Apple'
  },
  {
    title: 'Backend Developer',
    organization: 'Google'
  },
  {
    title: 'Fullstack Developer',
    organization: 'Apple'
  }
]

jobs.filter((job) => job.organization === 'Apple')
