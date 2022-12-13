const Intern = require("../lib/Intern");

test("It should set school via constructor", () => {
  const testValue = "WGU";
  const e = new Intern("Gustavo", 1, "test@gmail.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Gustavo", 1, "test@gmail.com", "WGU");
  expect(e.getRole()).toBe(testValue);
});

test("It should get school via getSchool()", () => {
  const testValue = "WGU";
  const e = new Intern("Gustavo", 1, "test@gmail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});