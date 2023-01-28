let restaurant = {
    owner: "ruslan",
    price: 125,
    currency: "billion dollars",
    isOpen : true,
}

//

let vehicle = {}
vehicle.brandName = "BMW"
vehicle.model = "X5"
vehicle.model = "M1"
delete(vehicle.model)

//

let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}

let sum = 0;
for(let num in salaries){
    sum += num;
}

console.log("Sum equals to " + sum)