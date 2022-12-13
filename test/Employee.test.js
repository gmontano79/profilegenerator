const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
  });

  it("Can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });

  it("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.id).toBe(testValue);
  });

  it("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
  });

  describe("getName", () => {
    it("It Should get name by getName()", () => {
      const testValue = "Gustavo";
      const e = new Employee(testValue);
      expect(e.getName()).toBe(testValue);
    });
  });

  describe("getId", () => {
    it("It should get id by getId()", () => {
      const testValue = 100;
      const e = new Employee("Andres", testValue);
      expect(e.getId()).toBe(testValue);
    });
  });

  describe("getEmail", () => {
    it("It should get email by getEmail()", () => {
      const testValue = "test@gmail.com";
      const e = new Employee("Andres", 1, testValue);
      expect(e.getEmail()).toBe(testValue);
    });
  });

  describe("getRole", () => {
    it("getRole() should return \"Employee\"", () => {
      const testValue = "Employee";
      const e = new Employee("Gustavo", 1, "test@gmail.com");
      expect(e.getRole()).toBe(testValue);
    });
  });

});