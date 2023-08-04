//1)

let darthVader = new Object();
darthVader["allegiance"] = "empire";
darthVader["weapon"] = " lightsabre";
darthVader["sith"] = "true";
console.log(darthVader)

//2)

console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${darthVader.sith ? "false" : "true"}`);

//3)

let myarray = Array("hello everyone");
console.log(myarray.length);
console.log(myarray.push("how", "are", "you?"));
console.log(myarray.length);
(myarray.shift("everyone"));
for(let eachElement of myArray) {
    console.log(eachElement);
}
