function fooBar() {
  let result = [];
  let fooBarString = "";

  for (let i = 1; i <= 100; i++) {
    
    if (i % 3 === 0) fooBarString = "Foo";
    if (i % 5 === 0) fooBarString += "Bar";
    if (!fooBarString) fooBarString += i;
    
    result.push(fooBarString);
    fooBarString = "";
    
  }
  return result;
}

console.log(fooBar().join(" "));

module.exports = { fooBar };
