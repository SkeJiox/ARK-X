function sum(numbers){
    let count=0 ;
    for(let i=0; i< numbers.length ; i++)
   { count=+numbers[i];}
    return count;
}

function countEven(numbers){
    let count=0;
    for(let i=0; i<numbers.length ;i++) {
    if (numbers[i] % 2 === 0){
         ++count;
    } }
return count;
}

function double(numbers){
    for(let i=0; i<numbers.length ;i++){
    numbers[i]=numbers[i]*2;}
    return numbers;
}


   
   function selectionSort(numbers) {
    for (let i = 0; i < numbers.length-1; i++) {
        let Nmin = i;
        for (let j = i + 1; j<numbers.length; j++) {
            if (numbers[j] < numbers[Nmin]) {
                Nmin = j;
            }
        }
        if (Nmin !== i) {
            let temp = numbers[i];
            numbers[i] = numbers[Nmin];
            numbers[Nmin] = temp;
        }
    }
}

function bubbleSort(numbers) {
    for (let j=0; j<numbers.length; j++) {
        for (let i=0; i < numbers.length-1; i++) {
            if (numbers[i]> numbers[i+1]) {
                let temp = numbers[i];
                numbers[i]= numbers[i+1];
                numbers[i+1] = temp;
            }
        }
    }
    return numbers;
}


function linearsort(numbers,x){
    for ( let i=0;i<numbers.length; i++ )
    { if (numbers[i]=x ) 
    return "correct";
       else {
        return "there's no equal number";
       }
    }    
}
