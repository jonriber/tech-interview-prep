const today = new Date();
today.getMonth();

//without short definition of the object person, typescript will not be able to infer the type of the object
const person = {
  age: 20
};

//no properties associeated with the Color class
class Color {

}

const red:Color = new Color();

let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

let point: { x: number; y: number; state: string } = {
  x: 10,
  y: 20,
  state: 'active'
}

// Function declaration

let logNumber: (i:number) => void = (i: number) => {
  console.log(i);
}