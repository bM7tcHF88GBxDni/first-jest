import { checkMultiple, sum } from "./index.js";

test("Adds 1 and 2 to equal 3", () => {
    expect( sum(1,2) ).toBe(3);
});

test("Check if 15 is a multiple of 3 or 5", () =>{
    expect( checkMultiple(15) ).toMatch(/FizzBuzz/);
})

test("Check if 33 is a multiple of 3 or 5", () =>{
    expect( checkMultiple(33) ).toMatch(/Fizz/);
})

test("Check if 5 is a multiple of 3 or 5", () =>{
    expect( checkMultiple(5) ).toMatch(/Buzz/);
})

test("Check if 8 is a multiple of 3 or 5", () =>{
    expect( checkMultiple(8) ).toBe(8);
})

test("Check if -1 is a multiple of 3 or 5", () =>{
    expect( checkMultiple(-1) ).toBe(-1);
})

test("Check if 0 is a multiple of 3 or 5", () =>{
    expect( checkMultiple(0) ).toMatch(/FizzBuzz/);
})

