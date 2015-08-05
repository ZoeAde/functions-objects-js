//Write a function that takes a ride object and a child object as arguments (see example objects below).
//Determine if the child is tall enough for the ride (the function should return true or false)
var child1 = {
  height: 3,
  name: "Julian",
  age: 3
};

var child2 = {
  height: 4,
  name: "Cero",
  age: 4
};

var ride = {
  minHeight: 3,
  maxHeight: 7
};

var ride2 = {
  minHeight: 4,
  maxHeight: 7
};


function tallEnough(childObj, rideObj) {
  if (childObj.height >= rideObj.minHeight) {
    return true;
  }
  else {
    return false;
  }
}
