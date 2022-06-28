// Describe: Scenario Name, IT: Test Case (Test Case Title, Excution CallBack Function)

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