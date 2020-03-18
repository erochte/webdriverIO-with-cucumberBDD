var i = 0;

var m = [{
name: "Evan",
age: 35,
gender: "Male",
pets: ["dog", "Cat"]
},{
    name: "Paul",
    age: 75,
    gender: "Male",
    }];

function addCount(value){
    i +=value;

}

m[0].pets.push("Lizard");
console.log(m[1].pets);
