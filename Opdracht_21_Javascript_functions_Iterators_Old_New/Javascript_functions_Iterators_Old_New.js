console.log("Javascript and Node are working");

// Javascript_functions_Iterators_Old_New
// Old style: loops

let colors = ["yellow", "blue", "red", "orange"];

/*
// WHILE LOOP 1 with a function

let colorsLength = colors.length;
i = 0;
while (i < colorsLength)
  colors.forEach(function (color) {// this forEach is working fine
    console.log(color);
    i++;
  });
*/

/*
// WHILE LOOP 2 more simpel
let colors = ["yellow", "blue", "red", "orange"];
let colorsLength = colors.length;
i = 0;

while (i < colorsLength) {
  console.log(colors[i]);
  i++;
*/

// New style: loops

colors.forEach((element) => console.log(element));


// //Iterating on an object

let classmates = {
  classmate_1: "John",
  classmate_2: "Michael",
  classmate_3: "Tom",
  classmate_4: "Philip",
  classmate_5: "Margaret",
};
for (let key in classmates) {
  // keys
  console.log(key + " is:"); // name, age, isAdmin
  // values for the keys
  console.log(classmates[key]); // John, 30, true
}
