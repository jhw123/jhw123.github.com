export const SUBGOAL_HIERARCHY_1 = [
  { id: '0', groups: [[0, 1, 2]], label: 'Declare variables', parentId: null, depth: 0, color: '#f44336' },
  { id: '1', groups: [[3, 4, 5]], label: 'Find the sum of values in tips', parentId: null, depth: 0, color: '#3f51b5' },
  { id: '2', groups: [[6, 7]], label: 'Calculate the average and print', parentId: null, depth: 0, color: '#4caf50' },
  { id: '3', groups: [[0]], label: 'Create a list of the received tips', parentId: '0', depth: 1, color: '#e81e63' },
  { id: '4', groups: [[1, 2]], label: 'Assign initial values to variables', parentId: '0', depth: 1, color: '#2196f3' },
  { id: '5', groups: [[3, 5]], label: 'Iterate a list by adding 1 to lcv', parentId: '1', depth: 1, color: '#8bc34a' },
  { id: '6', groups: [[4]], label: 'Add the tips item of index lcv to sum', parentId: '1', depth: 1, color: '#9c27b0' },
  { id: '7', groups: [[6]], label: 'Find the average of the tips', parentId: '2', depth: 1, color: '#03a9f4' },
  { id: '8', groups: [[7]], label: 'Print the average of the tips', parentId: '2', depth: 1, color: '#cddc39' },
  { id: '9', groups: [[1]], label: 'Make a variable for sum', parentId: '4', depth: 2, color: '#673ab7' },
  { id: '10', groups: [[2]], label: 'Assign 0 to lcv', parentId: '4', depth: 2, color: '#00bcd4' },
  {
    id: '11',
    groups: [[3]],
    label: 'Set the termination condition of While loop',
    parentId: '5',
    depth: 2,
    color: '#ffeb3b',
  },
  { id: '12', groups: [[5]], label: 'Move on to the next value', parentId: '5', depth: 2, color: '#ff9800' },
]
