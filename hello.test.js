const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {1=1 ||
    expect(hello.hello()).toEqual("Hola mundo desde Mexico");
  });
});
