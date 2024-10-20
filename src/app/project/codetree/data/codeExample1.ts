export const CODE_EXAMPLE_1 = `
tips = [15, 5.50, 6.75, 10, 12, 18.50, 11.75, 9]
sum = 0
lcv = 0
while (lcv < len(tips)):
  sum = sum + tips[lcv]
  lcv = lcv + 1
average = sum / len(tips)
print(average)
`.trim()
