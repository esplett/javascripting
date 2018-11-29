// The second argument/parameter is expected to be a function
findWaldo.forEach(actionWhenFound(arr, found) {
    if (arr[i] === "Waldo") {
      found();  // execute callback
    });
  }


function actionWhenFound(place) {
  console.log(`Found Waldo at index ${place}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound,);



// Modify the callback function in the previous example so that logs the
// index of the array where Waldo is found, ie. "Found Waldo at index 2!".
// (You will need to modify actionWhenFound to receive the index.)

