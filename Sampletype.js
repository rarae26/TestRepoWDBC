var firstName = "Ramya";
var lastName = 'Ravi';
var found = true;
var grade = 88;
console.log(firstName + " " + lastName);
console.log("Hi + ".concat(firstName));
var reviews = [4, 2, 2, 3, 1, 1,];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
console.log(total);
var avg = total / reviews.length;
console.log(avg);
var sports = ["Gold", "Tennis", "Swimming"];
sports.push("Cricket");
sports.push("Football");
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var temp = sports_1[_i];
    if (temp == 'Tennis') {
        console.log("I love ".concat(temp));
    }
    else {
        console.log(temp);
    }
}
