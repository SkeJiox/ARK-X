/*/////DEEP INTO THE TYPESCRIPT 
//Generic types
function add(a: string, b: string): string {
    return a + b; }
  
  function add(a: number, b: number): number {
    return a + b;  }

//Generic type give a various choice to our variable exp:
//function add<T extends any >(a: T, b: T): T {
    return a + b;
  }
  add("Hello", "World") // HelloWorld
  add(1, 3) // 4   */

function returntype<T>(value: T): T {
    return value;
}
console.log(returntype<number>(100));
console.log(returntype<string>('Yooo'));
console.log(returntype<boolean>(true));
  

/*
  Generic functions: sort<T>, map<T, U>, filter<T>
  Generic classes: Array<T>, Map<K, V>, Promise<T>
  Generic interfaces: List<T>, Stack<T>, Queue<T> */


