export const SUBGOAL_HIERARCHY_3 = [
  {
    id: '0',
    groups: [[0, 1]],
    label: 'Preset default values ​​for count and num',
    parentId: null,
    depth: 0,
    color: '#f44336',
  },
  {
    id: '1',
    groups: [[0]],
    label: 'Set count to the number of prime numbers less than 3',
    parentId: '0',
    depth: 1,
    color: '#3f51b5',
  },
  {
    id: '2',
    groups: [[1]],
    label: 'Set the initial value of the number to be searched for whether it is prime',
    parentId: '0',
    depth: 1,
    color: '#4caf50',
  },
  {
    id: '3',
    groups: [[2, 3, 4, 5, 6, 7, 8, 9, 10, 11]],
    label: 'Find the number of prime numbers by searching from num to natural numbers less than 100',
    parentId: null,
    depth: 0,
    color: '#e81e63',
  },
  {
    id: '4',
    groups: [[2, 11]],
    label: 'Search by increasing by 1 until the number is less than 100',
    parentId: '3',
    depth: 1,
    color: '#2196f3',
  },
  {
    id: '5',
    groups: [[2]],
    label: 'Specify the maximum value of the search range',
    parentId: '4',
    depth: 2,
    color: '#8bc34a',
  },
  {
    id: '6',
    groups: [[3, 4, 5, 6, 7, 8, 9, 10]],
    label: 'Determine if a given number is prime',
    parentId: '3',
    depth: 1,
    color: '#9c27b0',
  },
  {
    id: '7',
    groups: [[3, 4, 5, 6, 7, 8]],
    label: 'Check if a number is divisible by a number smaller than itself',
    parentId: '6',
    depth: 2,
    color: '#03a9f4',
  },
  {
    id: '8',
    groups: [[3, 4]],
    label: 'First assume that num is a prime number.',
    parentId: '7',
    depth: 3,
    color: '#cddc39',
  },
  {
    id: '9',
    groups: [[3]],
    label: 'Set a variable to divide by a number smaller than itself',
    parentId: '8',
    depth: 4,
    color: '#673ab7',
  },
  {
    id: '10',
    groups: [[4]],
    label: 'Set a variable to true assuming it is a prime number',
    parentId: '8',
    depth: 4,
    color: '#00bcd4',
  },
  {
    id: '11',
    groups: [[5, 6, 7, 8]],
    label: 'Writing a while loop to check if a number is prime',
    parentId: '7',
    depth: 3,
    color: '#ffeb3b',
  },
  {
    id: '12',
    groups: [[5]],
    label: 'Write a conditional statement to check if the divisor is greater than or equal to 2',
    parentId: '11',
    depth: 4,
    color: '#ff9800',
  },
  {
    id: '13',
    groups: [[6, 7, 8]],
    label: 'Set isprime to false if num is divisible by the divisor',
    parentId: '11',
    depth: 4,
    color: '#f44336',
  },
  {
    id: '14',
    groups: [[6, 7]],
    label: 'Change the isprime to false if it is divisible',
    parentId: '13',
    depth: 5,
    color: '#3f51b5',
  },
  {
    id: '15',
    groups: [[8]],
    label: 'Write code that decreases the divisor by 1',
    parentId: '13',
    depth: 5,
    color: '#4caf50',
  },
  {
    id: '16',
    groups: [[9, 10]],
    label: 'If isprime is true, num is prime, so add 1 to count',
    parentId: '6',
    depth: 2,
    color: '#e81e63',
  },
  {
    id: '17',
    groups: [[9]],
    label: 'Write an if condition that indicate if isPrime is True, then it is a prime number',
    parentId: '16',
    depth: 3,
    color: '#2196f3',
  },
  {
    id: '18',
    groups: [[10]],
    label: 'Increase the number of prime numbers',
    parentId: '16',
    depth: 3,
    color: '#9c27b0',
  },
  {
    id: '19',
    groups: [[11]],
    label: 'Increase num',
    parentId: '3',
    depth: 1,
    color: '#03a9f4',
  },
  {
    id: '20',
    groups: [[12]],
    label: 'Print the result',
    parentId: null,
    depth: 0,
    color: '#cddc39',
  },
]
