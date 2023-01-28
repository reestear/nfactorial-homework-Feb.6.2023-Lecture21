// first part
let num = prompt("Enter a number and I will say it is divisible by two or not: ", "Enter Here");
if(num % 2 === 0) alert("Your number is divisible by two.")
else alert("Your number is not divisible by two")
//second part
let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a) // number

switch (a){
        case 0:
            alert(0);
            break;
        case 1:
            alert(1);
            break;
        case 2 | 3:
            alert("2,3");
            break;
        default:
            break;
}
//third part
for(let i = 2, sum = 0; i <= 100; i += 2){
    sum += i;
    if(i == 100) console.log(sum);
}
let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}