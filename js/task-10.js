//проміси
//then() catch() finally()

/*const isSuccess = true;

// Create promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

// Registering promise callbacks
promise
  .then((value) => {
    console.log(value); // "Success! Value passed to resolve function"
  })
  .catch((error) => {
    console.log(error); // "Error! Error passed to reject function"
  })
  .finally(() => {
    console.log("Ok");
  });*/
//=======================================================

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

promise
  .then((value) => {
    console.log(value);
    return value * 2;
  })
  .then((value) => {
    console.log(value);
    return value * 3;
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally");
  });
