const expect = require("expect");

const utils = require("./utils");

it("Should add two numbers", () => {
  const res = utils.add(33, 11);
  if (res !== 44) {
    throw new Error(`Expected 44, but got ${res}.`);
  }
});

it("Should square a number", () => {
  const res = utils.square(4);
  if (res !== 16) {
    throw new Error(`Expected 16, but got ${res}.`);
  }
});

it("Should add two number - with expect", () => {
    const res = utils.add(33,11);
    expect(res).toBe(44);
    expect(typeof res).toBe('number');
})

it("Should square a number - with expect", () => {
    const res = utils.square(4);
    expect(res).toBe(16);
    expect(typeof res).toBe('number');
})

