const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


//
// function batteries() {
//   let totalBatteries = batteryBatches.reduce(function(total, element) => {
//     return total + element
//   })
// }


let totalBatteries = batteryBatches.reduce(
  function(total, element) {
    return total + element
  }
)

//
// var sum = [1, 2, 3].reduce(
//   function(total, num){ return total + num }
//   , 0);
