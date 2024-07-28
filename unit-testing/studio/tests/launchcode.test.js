// launchcode.test.js code:
const launchcode = require("../index.js");

describe("Testing launchcode", function () {
  // Write your unit tests here!
  test("value of organization should be nonprofit", function () {
    let output = launchcode.organization;
    expect(output).toBe("nonprofit");
  });

  test("value of executive Director is Jeff", function () {
    let output = launchcode.executiveDirector;
    expect(output).toBe("Jeff");
  });

  test("percentage cool employees has value 100", function () {
    let output = launchcode.percentageCoolEmployees;
    expect(output).toBe(100);
  });

  test("programs offered contains valid input", function () {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });

  test("When passed a number that is ONLY divisible by 2, return 'Launch!'", function () {
    expect(launchcode.output(2)).toBe("Launch!");
  });

  test("When passed a number that is ONLY divisible by 3, return 'Code!'", function () {
    expect(launchcode.output(3)).toBe("Code!");
  });
  test("When passed a number that is ONLY divisible by 5, return 'Rocks!'", function () {
    expect(launchcode.output(5)).toBe("Rocks!");
  });
  test("When passed a number that is divisible by 2 AND 3,, return 'LaunchCode!'", function () {
    expect(launchcode.output(6)).toBe("LaunchCode!");
  });
  test("When passed a number that is divisible by 3 AND 5, return 'Code Rocks!'", function () {
    expect(launchcode.output(15)).toBe("Code Rocks!");
  });
  test("When passed a number that is divisible by 2 AND 5, return 'Launch Rocks! Crash!'", function () {
    expect(launchcode.output(10)).toBe("Launch Rocks! (CRASH!!!!)");
  });
  test("When passed a number that is divisible by 2, 3 AND 5, return 'LaunchCode Rocks!'", function () {
    expect(launchcode.output(30)).toBe("LaunchCode Rocks!");
  });
  test("When passed a number that is NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.", function () {
    expect(launchcode.output(7)).toBe("Rutabagas! That doesn't work.");
  });
});
