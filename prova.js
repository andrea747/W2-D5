let objArr = [
  {
    name: "john",
    age: 12,
    gender: "male",
  },
  {
    name: "jane",
    age: 15,
    gender: "female",
  },
  {
    name: "julie",
    age: 20,
    gender: "trans",
  },
];

console.log("Accessing the Array using the forEach loop:");
objArr.map((item) => {
  console.log(item);
});
