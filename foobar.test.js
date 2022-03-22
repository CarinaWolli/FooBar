const foobarFunction = require("./foobarFunction");

describe("fooBar Function", () => {
  it("saves correct strings in result array for the numbers 20 to 30", () => {
    const result = foobarFunction.fooBar();
    const expectedResult = ["Bar","Foo","22","23","Foo","Bar","26","Foo","28","29","FooBar"]
    expect(result.slice(19, 30)).toEqual(expectedResult);
  });
});


