// Simple callback
const doSomething = (cb) => {
      console.log('Doing something...');
      cb();
    };

const nextStep = () => {
    console.log('Callback called');
    };
    doSomething(nextStep);

// Using setTimeout
console.log('Before setTimeout');
const secondInMilliseconds = 1000;
setTimeout(() => {
  console.log('A second has passed');
}, secondInMilliseconds);
console.log('after setTimeout');

// Using setInterval
//const secondInMilliseconds = 1000;
// let totalExecutions = 0
// console.log('Before setInterval');
// setInterval(() => {
//     totalExecutions++;
//     console.log(`A second has passed, this is the ${totalExecutions} execution`);
// }, secondInMilliseconds);
// console.log('After setInterval');

// Async promise example
const randomTimeOutPromise = () => {
    return new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 100);
    setTimeout(() => {
      console.log(`Promise resolved after ${time}ms`);
      resolve(time);
      }, time);
    });
};

Promise.all([
    randomTimeOutPromise(),
    randomTimeOutPromise(),
    randomTimeOutPromise(),
    randomTimeOutPromise(),
    randomTimeOutPromise(),
    ]).then((results) => {
      console.log("results:", results);
    });

Promise.race([
    randomTimeOutPromise(),
    randomTimeOutPromise(),
    randomTimeOutPromise(),
    randomTimeOutPromise(),
    randomTimeOutPromise(),
    ]).then((result) => {
    console.log("result:", result);
    });
