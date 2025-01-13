const profile = {
  name: 'jonatas',
  age: 34,
  coords: {
    lat:0,
    lng: 15
  },
  setAge(age: number):void {
    this.age = age
  }
}

const { age, name }: { age: number; name: string} = profile;
const { coords: {lat, lng}}: { coords: {lat: number; lng: number}} = profile;