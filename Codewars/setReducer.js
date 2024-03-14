function setReducer(input) {
    while (input.length >= 2) {
       let res=1;
       let tempArr = [];
       for (let i = 0; i < input.length ; i++) {
           if (input[i] === input[i + 1]) {
               res++;
           } else {
               tempArr.push(res);
               res = 1;
           }
       }
       input = tempArr; 
   }
   return input[0];
}

function setReducer(input) {
    let result = [];
    let count = 1;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i + 1]) {
            count++;
        } else {
            result.push(count);
            count = 1;
        }
    }
     console.log(result);
    if (result.length === 1) {
        return result[0];
    } else {
        return setReducer(result);
    }
}

  input1= [0, 4, 6, 8, 8, 8, 5, 5, 7];
//   output: 2

  input2=[9, 4, 1, 1, 1, 2, 3, 9, 4, 6, 2];
//   output: 3

  input3=[1, 7, 0, 6, 1, 9, 0, 7, 1, 6, 0, 9, 0];
//   output: 13

  input4=[0, 2, 7, 0, 0, 6, 2, 1, 2, 2, 3, 4];
//   output: 5

console.log(setReducer(input1));
console.log(setReducer(input2)); 
console.log(setReducer(input3));
console.log(setReducer(input4));



function setReducer(input) {
    let numbers = [];
    for (let i = 0; i < input.length + 2; i++) {
      let count = 1;
      for (let j = i + 1; j < input.length + 2; j++) {
        if (input[i] == input[j]) {
          count++;
        } else {
          i += count - 1;
          numbers.push(count);
          break;
        }
      }
    }
    if (numbers.length > 1) {
      return setReducer(numbers);
    } else {
      return numbers[0];
    }
  }
  
  input = [9, 4, 1, 1, 1, 2, 3, 9, 4, 6, 2];
  console.log(setReducer(input));
  