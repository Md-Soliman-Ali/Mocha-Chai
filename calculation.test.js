// Describe: Scenario Name
// Annotation (before, after, beforeEach, afterEach)
// IT: Test Case (Test Case Title, Excution CallBack Function)
// it.skip (skips the test case); it.only (runs only that test case)
// package.json -> scripts {Testing Server: (test); Staging Server: (start); Custom Commend (npm run fileName)}

const { expect } = require("chai");

describe("Check if calculation is ok", () => {

    it("Check if summation is ok", () => {
        let num1 = 10;
        let num2 = 20;
        let result = num1 + num2;
        expect(result).equals(30);
    })

    it("Check if multiplication is ok", () => {
        let num1 = 10;
        let num2 = 20;
        let result = num1 * num2;
        expect(result).equals(200);
    })
})