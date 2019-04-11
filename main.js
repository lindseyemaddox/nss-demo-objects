
console.log("good morning, objects");

const cupcake = {
  color: ["pink", "white", "brown"],
  flavor: "chocolate",
  size: "mini",
  calories: 0,
  icing: true,
  eatCupcake: () => {
    console.log("yum");
  }
};

console.log("cupcake", cupcake);
console.log("gimme da colors", cupcake.color);

for (let i = 0; i < cupcake.color.length; i++) {
  console.log("cupcake color", cupcake.color[i]);
}

cupcake.color.forEach(color => {
  console.log(`this whole thing is a template string ${color}`);
})



// 1. make an object to represent a red 2015 Ford Mustang 
// and console log it

const car = {
  make: "Ford",
  model: "Mustang",
  color: "red",
  year: 2015
};

console.log(car);


// 2. store a list of animal names in a shelter in an array - 
// Kippers, Jack, Gypsy, Angus, Seymour Bouts, and Sharky

animals = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]

console.log(animals);


// 3. object for four family members, put each in an array named familyMembers.
// each member object created should have the same keys but different values.

const familyMembers = [
  dad = {
    name: "Zack",
    age: 40,
    gender: "male"
  },
  mom = {
    name: "Lindsey",
    age: 38,
    gender: "female"
  },
  sister = {
    name: "Azalea",
    age: 6,
    gender: "female"
  },
  brother = {
    name: "Declan",
    age: 1,
    gender: "male"
  }
]

console.log(familyMembers);