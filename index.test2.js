import { sum } from "./index.js";
console.log(`******* This is index.test2.js - This will not run as it changes the .test.js extension`);
test("Adds 1 and 2 to equal 3", () => {
    expect( sum(1,2) ).toBe(3);
});