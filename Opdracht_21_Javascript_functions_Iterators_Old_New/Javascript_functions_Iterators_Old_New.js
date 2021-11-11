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
// FOR LOOP 1 with a function
