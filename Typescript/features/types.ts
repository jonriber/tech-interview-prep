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

const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);

let colors2 = ['red', 'green', 'blue'];
let foundColor:boolean;

for (let i = 0; i < colors2.length; i++) {
  if (colors2[i] === 'green') {
    foundColor = true;
  }
}

let numbers = [-10, -1, 12];
let numbersAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numbersAboveZero = numbers[i];
  }
}