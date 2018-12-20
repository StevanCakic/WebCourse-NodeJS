function add(a, b) {
  return a + b;
}

function square(x) {
  return x * x;
}

function setName(fullName) {
  const user = {}
  const names = fullName.split(" ");
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
}

function asyncAdd(a, b, cb) {
  setTimeout(() => {
    cb(a + b);
  }, 1000);
}

module.exports = {
  add,
  square,
  setName,
  asyncAdd
};
