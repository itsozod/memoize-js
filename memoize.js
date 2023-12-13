// memoize function
let counter = 0;
function memoize(fn) {
  let cache = {};
  return function (...args) {
    let key = `${args}`;
    if (key in cache) {
      // console.log(`${key} Already been there:)`);
      return cache[key];
    } else {
      let result = fn(...args);
      cache[key] = result;
      return cache[key];
    }
  };
}

// memoize sum
const memoizeSum = memoize((a, b) => {
  counter += 1;
  return a + b;
});
console.log(memoizeSum(2, 3));
console.log(memoizeSum(2, 3));
console.log(memoizeSum(2, 4));
console.log(`Counter is ${counter}`);

// memoize fibonacci
const memoizeFib = memoize((n) => {
  if (n <= 1) {
    return 1;
  }
  counter += 1;
  return memoizeFib(n - 1) + memoizeFib(n - 2);
});
console.log(memoizeFib(1));
console.log(memoizeFib(2));
console.log(memoizeFib(2));
console.log(`Counter is ${counter}`);

// memoize factorial
const memoizeFac = memoize((n) => {
  if (n <= 1) {
    return 1;
  }
  counter += 1;
  return memoizeFac(n - 1) * n;
});
console.log(memoizeFac(1));
console.log(memoizeFac(2));
console.log(memoizeFac(2));
console.log(memoizeFac(3));
console.log(`Counter is ${counter}`);
