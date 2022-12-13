const Engineer = require("../lib/Engineer");

test("It should set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Carlos", 1, "test@gmail.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Carlos", 1, "test@gmail.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("It should get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Carlos", 1, "test@gmail.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});