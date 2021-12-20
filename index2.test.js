import { sum } from "./index.js";
console.log(`------- This is index2.test.js and it will run as it does not change the .test.js extension -------`);
test("Adds 1 and 2 to equal 3", () => {
    expect( sum(1,2) ).toBe(3);
});