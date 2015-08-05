//Write a function that takes in a car object and a route object.
//Determine if the car has enough gas to make the entire route (return true or false).

var car = {
  milesPerGallon: 20,
  gallonsInTank: 3
};

var route = {
  miles: 200,
  destination: "Boulder",
  location: "Fancy Land"
};

function enoughGas(carObj, routeObj) {
  var carMiles = carObj.milesPerGallon * carObj.gallonsInTank;
  if (carMiles >= routeObj.miles) {
    return true;
  }
  else {
    return false;
  }
}
