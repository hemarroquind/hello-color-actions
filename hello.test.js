// const hi = require("./hello");
// describe("My hello", () => {
//   test("works", () => {
//     expect(hi.hello.toEqual("Hola mundo desde Mexico"));
//   });
// });
const { hello } = require("./hello");

describe("hello", () => {
  test("returns Hola mundo desde Mexico", () => {
    expect(hello == "Hola mundo desde Mexico");
  });
});