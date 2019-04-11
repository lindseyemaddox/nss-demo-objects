
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



// LIGHTNING EXERCISES

const empireStateBuilding = {
  stories: 103,
  height: 1453,
  address: "350 Fifth Avenue, Manhattan, New York 10118",
  squareFeet: 2768591,
  constructionDate: 1931,
  cost: 40948900,
  owner: "Empire State Realty Trust",
  eastWestLength: 424,
  northSouthLength: 187,
  architect: "Shreve, Lamb & Harmon"
}

// 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.

console.log(empireStateBuilding.height);

// 2: Use square bracket notation to output the remaining 5 properties to the console. 
// Create 5 variables first with the keys as their values. Use those variables to look up the values.

const stories = empireStateBuilding["stories"];
console.log(stories);


const nashvilleSoftwareSchool = {
  founded: 2012,
  director: "John Wark",
  instructors: {
      fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
      partTime: ["Zoe", "Nathan"]
  },
  address: "500 Interstate Blvd. S"
}

// 1: Output the names of the part-time instructors 
// followed by the names of the full-time instructors in the console.

for (let i = 0; i < nashvilleSoftwareSchool.instructors.partTime.length; i++) {
  console.log(nashvilleSoftwareSchool.instructors.partTime[i])
}
for (let i = 0; i < nashvilleSoftwareSchool.instructors.fullTime.length; i++) {
  console.log(nashvilleSoftwareSchool.instructors.fullTime[i])
}

// 2: Output only Andy and Zoe in the console.

console.log(nashvilleSoftwareSchool.instructors.fullTime[4]);
console.log(nashvilleSoftwareSchool.instructors.partTime[0]);

// Your task is to use your knowledge of accessing property values and array indices to output 
// the commit message for the push event with an id of 8030403992.


function checkId(data) {
  return data.id == "8030403992";
}
const myData = githubData.find(checkId);