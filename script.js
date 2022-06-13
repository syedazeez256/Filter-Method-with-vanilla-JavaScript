"use strict";

const movements = [200, 450, -400, 700, -750, 250, -500];

const moveFilter = movements.filter(function (mov) {
  return mov > 0;
});
console.log(moveFilter);

const MoveNew = [];

for (const mov of movements) if (mov > 0) MoveNew.push(mov);

console.log(MoveNew);

const movewithdraw = movements.filter(function (mov) {
  return mov < 0;
});
console.log(movewithdraw);
