/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

<<<<<<< HEAD
console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}

function arrayConverter(array) {
  let obj = {}
  for (let i = 0; i < array.length; i++) {
    let keyes = array[i]
    if (obj[keyes] === undefined) {
      obj[keyes] = 1;
    }
    else {
      obj[keyes]++
    }
  }
  return obj
}
=======

function arrayConverter(arr) {

      let obj = {};


      for (let i = 0; i < arr.length; i++) {
          let key = arr[i];

          if (arr.includes(key)) {
              if (obj[key] === undefined) {
                  obj[key] = 1;

              } else {
                obj[key]++

              };
          };
      };

      return obj
  };
>>>>>>> 0e034f5ca39f50eab49a3c43a2a92075f01fe4bb



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
