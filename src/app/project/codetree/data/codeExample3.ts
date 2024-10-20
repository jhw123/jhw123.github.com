export const CODE_EXAMPLE_3 = `
count = 3
num = 4
while (num < 100):
	lcv = num - 1
	isPrime = True
	while (lcv > 1):
		if (num % lcv == 0):
			isPrime = False
		lcv = lcv - 1
	if (isPrime == True):
		count = count + 1
	num = num + 1
print(count)
`.trim()
