import { State } from '../type/state'

export const CHATBOT: State[] = [
  {
    thenText: 'Ask the student what they know about the state changes between solid, liquid, and gas.',
    id: '0',
    ifText: 'Are you ready to review the concepts you learned last time?',
    parentId: [],
    x: 900,
    y: 0,
  },
  {
    thenText: 'Praise the student and ask them to explain with real-life examples.',
    id: '1',
    ifText: 'The student explains the state changes well.',
    parentId: ['0'],
    x: 0,
    y: 600,
  },
  {
    thenText: 'Explain the state changes between solid, liquid, and gas step by step.',
    id: '2',
    ifText: 'The student does not explain well.',
    parentId: ['0'],
    x: 450,
    y: 600,
  },
  {
    thenText: 'Praise the student and ask if they have any questions.',
    id: '3',
    ifText: 'The student understands the state chages between solid, liquid, and gas well.',
    parentId: ['1', '2', '4', '5', '7'],
    x: 900,
    y: 1000,
  },
  {
    thenText:
      'Praise the student and explain the molecule arrangement in each state and its connection to state changes.',
    id: '4',
    ifText: 'The student does not know the properties of each state clearly, but knows the state changes.',
    parentId: ['0'],
    x: 900,
    y: 600,
  },
  {
    thenText: 'Explain the conditions under which state changes occur.',
    id: '5',
    ifText:
      'The student knows the process of state changes, but does not know the conditions under which state changes occur.',
    parentId: ['0'],
    x: 1350,
    y: 600,
  },
  {
    thenText: 'Stimulate interest by giving examples of state changes in real life.',
    id: '6',
    ifText: 'The student does not show interest.',
    parentId: ['0'],
    x: 1800,
    y: 300,
  },
  {
    thenText: 'Praise the student and explain the concept of state changes overall.',
    id: '7',
    ifText: 'The student remembers the content learned in the last class and explains some of the state changes.',
    parentId: ['6'],
    x: 1800,
    y: 600,
  },
]
