var height = 42; // rider musi be at least 42 inches tall
var age = 10; // rider must be at least 10 years old

if (height >= 42){
    console.log("Get on that ride, kiddo!")
} else {
    console.log("Sorry kiddo. Maybe next year.")
}


if (height >= 42 && age >= 10){
    console.log("Get on that ride, kiddo!")
} else {
    console.log("Sorry kiddo. Maybe next year.")
}

if (height >= 42 || age >= 10){
    console.log("Get on that ride, kiddo!")
} else {
    console.log("Sorry kiddo. Maybe next year.")
}