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
  const res = utils.add(33, 11);
  expect(res).toBe(44);
  expect(typeof res).toBe("number");
});

it("Should square a number - with expect", () => {
  const res = utils.square(4);
  expect(res).toBe(16);
  expect(typeof res).toBe("number");
});

it("should expect some values - with expect", () => {
  // expect(12).not.toBe(11);

  // sa toBe vrace false, ne radi deep equal,
  // ispobajmo i u pretrazivacu ovo
  expect({ name: "Ime" }).toEqual({ name: "Ime" });
  expect([2, 3, 4]).toContain(3);
  expect([2, 3, 4]).not.toContain(5);

  expect({ name: "Ime", prezime: "Prezime" }).toMatchObject({
    prezime: "Prezime"
  });
  expect({ name: "Ime", prezime: "Prezime" }).not.toMatchObject({
    prezime: "Ime"
  });
});

// should verify first and last names are set
// assert if includes firstName and lastName with proper values
it("Should set firstName and lastName", () => {
  const res = utils.setName("Ime Prezime");

  expect(res).toMatchObject({
    firstName: "Ime",
    lastName: "Prezime"
  });
});
