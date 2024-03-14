function isIsogram(input) {
    if (input.length <=1) {
        return true; 
    }

  let Letter = input.toLowerCase();
  console.log(Letter);
    for (let i = 0; i < input.length; i++) {
       for( let j = i+1 ; j< input.length ; j++){
        if (Letter[i] == Letter[j]) {
            return false; 
   
        }
    }  
}
return true; 
   
}
console.log(isIsogram('youssef'))