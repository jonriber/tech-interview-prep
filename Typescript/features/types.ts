const today = new Date();
today.getMonth();

//without short definition of the object person, typescript will not be able to infer the type of the object
const person = {
  age: 20
};

//no properties associeated with the Color class
class Color {

}
const red = new Color();