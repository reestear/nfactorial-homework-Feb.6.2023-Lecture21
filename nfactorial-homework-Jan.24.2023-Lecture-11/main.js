// first task

function delay(ms) {
    let promise = new Promise(resolve => setTimeout(resolve, ms));
    return promise;
}
  
delay(3000).then(() => alert('выполнилось через 3 секунды'));
// second task

let promise = new Promise(function(resolve, reject) {
    resolve(1);

    setTimeout(() => resolve(2), 1000);
});
  
promise.then(alert); // there will be only 1 inside of the result in resolve

// third task
promise.then(f1).catch(f2); // следуют друг за другом
promise.then(f1, f2); // а здесь можно сказать, они находятся на одном и не зависят друг от друга