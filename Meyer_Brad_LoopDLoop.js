// we loop because we are creating a repetitive action
// loop starts at 2 miles since it is the first time we give candy
// loop stops at 6 miles
// the loop condition will evaluate false when miles are no longer less than 6
// the candy counter increments for each iteration
// we need a candy variable and an iterator to track the miles
// extra: we need a speed variable to track if the runner is over 5.5 mph

var candy = 0;
var speed = 6.0;

for (var i = 2; i <= 6; i += 2){
    if (speed > 5.5){
        candy += 1;
    }
}

console.log(candy);