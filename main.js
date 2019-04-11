
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

