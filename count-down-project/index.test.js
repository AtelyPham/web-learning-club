const formatNum = require("./helpers").formatNum

test("Test for formatNum function", () => {
  // 1. Prepare value
  const input = 9
  const expectOutput = "09"
  // 2. Implement function
  const output = formatNum(input)
  // 3. Assertion
  expect(expectOutput).toBe(output)
})
