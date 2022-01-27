function recursiveSearch(arr, target) {
  if (arr.length === 0) return false;

  if (arr[0] === target) return true;

  return recursiveSearch(arr.slice(1), target);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution

//Here, we would need two places to brake: a false case and a true case. For the false case,
//if we slice the array eventually, we'll have nothing left, so if arr.length === 0, then return
//false.
//For the true case, each time the we use a recursion, the arr[0] changes to a a new value of the array.
//once that value hits the target, the recursion stops and will return true.
