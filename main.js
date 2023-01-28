// first task

let hid = document.getElementById("text");
btn.onclick() = function() {
    hid.hidden = true;
}

// second task

button.addEventListener("click", () => alert("1")); // выведет 1, несмотря на то что, после него следует строка которая как будто-бы
// удалят "нашу" функцию, хотя это не так, так как для этого надо писать методом.
button.removeEventListener("click", () => alert("1")); // эта строка не будет иметь эффекта на предыдущем
button.onclick = () => alert(2); // выведет 2

// third task

for(let wind of windows){
    wind.insertAdjacentHTML("afterbegin", '<button class="wind-remove">[x] </button>');
    let btn = wind.firstChild;
    btn.onclick = () => wind.remove();
}