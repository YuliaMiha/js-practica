/*
function slugify(title) {
    const slug = title.toLowerCase().split(" ").join('-');
    console.log(slug);
}
slugify("Arrays for begginers");
*/

/*
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
console.log(firstTwoEls);
const nonExtremeEls = fruits.slice(1, -1);
console.log(nonExtremeEls);
const lastThreeEls = fruits.slice(2);
console.log(lastThreeEls);
*/
function makeArray(firstArray, secondArray, maxLength) {
  
    const newArray = firstArray.concat(secondArray);
  
    if (newArray.length > maxLength) {
       return newArray.slice(0, maxLength);
       
    } else {
        return newArray;
    }
  //console.log(newArray) ["Mango", "Poly", "Ajax"]

}
  
makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)