function group(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      const group = [arr[i]]; // Start a new group with the current element
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) { // If current element equals the next element
          group.push(arr[j]); // Add it to the group
          arr.splice(j, 1); // Remove the element from the original array to avoid duplicates
          j--; // Decrement j to adjust for the removed element
        }
      }
      newArr.push(group); // Push the group into newArr
    }
    return newArr;
  }

// Example usage:
const array = [1, 2, 2, 3, 3, 2, 6];
console.log(group(array)); // Output: [[1], [2, 2], [3], [6]]

  