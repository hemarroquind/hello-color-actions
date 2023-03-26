const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello()).toEqual("Hola mundo desde Mexico");
  });
});
