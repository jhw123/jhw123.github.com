import { Chat } from '@/app/project/teachyou/hook/usePipeline'

export const SAMPLE1: Chat[] = [
  {
    role: 'tutee',
    message: 'Hi! Could you please teach me about binary search?',
  },
  {
    role: 'tutor',
    message:
      'Binary search is an algorithm that finds whether a specific value is inside a sorted array. It would be nice to find it by looking at each value one by one, but since it will take a long time. Binary search finds a value by comparing it with the middle value of the array.\nSet min = 0, max = len(array)-1, and check the value in the center. If the middle index is the same as the target, you can immediately return True. If the target value is larger, it means that the target is located to the right of the center value, so set the min value to (center value) + 1. If the target value is smaller, set the min value to (center value) + 1. Since this means that the target is located to the left of the center value, we proceed with the search by setting the max value to (center value) -1.',
  },
  {
    role: 'tutee',
    message:
      'I understood that binary search is an algorithm for finding a specific value in a sorted array. You said that the search is performed by comparing the middle index of the array with the value you are looking for, and if the value you are looking for is larger, it is located to the right of the center value, and if it is smaller, it is located to the left. So, I wrote the code as below.\n```python\ndef solution(cards, number):\n  min = 0\n  max = len(cards) - 1\n  while min <= max:\n    guess = (min + max) // 2\n    if cards[guess] == number:\n      return True\n```',
  },
  {
    role: 'tutor',
    message:
      'Good. You understand well. But there is a problem with the code now. If cards[guess] is different from number within the while statement, the min or max value needs to be modified.',
  },
  {
    role: 'tutee',
    message:
      'Oh, I see. Then, if the value you are looking for is larger, you can modify the min value to guess + 1, and if it is smaller, you can modify the max value to guess - 1. I modified it as follows.\n```python\ndef solution(cards, number):\n  min = 0\n  max = len(cards) - 1\n  while min <= max:\n    guess = (min + max) // 2\n    if cards[guess] == number:\n      return True\n    elif cards[guess] < number:\n      min = guess + 1\n    else:\n      max = guess - 1\n```',
  },
  {
    role: 'tutor',
    message:
      'Good. Your code reflects what I said well. However, there may be cases where there are no numbers in the cards, right? The algorithm must be modified to return false in such cases to be completed.',
  },
  {
    role: 'tutee',
    message: 'Then how do I return false if there is no number in cards?',
  },
  {
    role: 'tutor',
    message:
      'The condition for repeating the while statement is min<=max, but if there is no number in cards, the condition of the while statement cannot be satisfied, and you will escape the while statement, right? I think you can modify your code to return false in such cases.',
  },
  {
    role: 'tutee',
    message:
      'To summarize, what you are saying is that if there is no number in cards, the condition of the while statement cannot be satisfied and the while statement exits, and in that case, you should return false! I understand.',
  },
  {
    role: 'tutor',
    message: "Yes, that's right! Reflect this to your code.",
  },
  {
    role: 'tutee',
    message:
      'If there is no number in cards, the condition of the while statement is not satisfied and the while statement exits. In that case, I can return false. I wrote the code as below.\n```python\ndef solution(cards, number):\n  min = 0\n  max = len(cards) - 1\n  while min <= max:\n    guess = (min + max) // 2\n    if cards[guess] == number:\n      return True\n    elif cards[guess] < number:\n      min = guess + 1\n    else:\n      max = guess - 1\n  return False\n```',
  },
  {
    role: 'tutor',
    message:
      'Good job! The perfect algorithm has been completed!\nThen, shall we consider examples in which this algorithm can be used in real life?',
  },
  {
    role: 'tutee',
    message:
      'When I think about the binary search algorithm, I think we use binary search when looking for books in real life as well. When looking for a book, if you know the title or author of the book, it is faster to divide the bookshelf into two parts. But can this method be applied to e-books as well?',
  },
  {
    role: 'tutor',
    message:
      "That's a good example! The condition for a binary search algorithm to be used is that the items must be sorted. In libraries, books are sorted by title or author, so it would be much more efficient to search for a book by dividing it in half rather than searching through them one by one from the beginning!",
  },
  {
    role: 'tutee',
    message:
      'To summarize, you gave an example of how binary search algorithms can be used in real life to find books. When looking for books, it would be more efficient to split the bookshelf in half because they are sorted by title or author. I understand.',
  },
  {
    role: 'tutor',
    message: 'Good.',
  },
  {
    role: 'tutee',
    message:
      'Then this thought occurred to me. Can binary search be applied to e-books too? In the case of e-books, the pages are sorted by numbers, so it seems possible. What do you think?',
  },
  {
    role: 'tutor',
    message:
      'It can also be used in e-books. In the case of e-books, a search service will be provided on the site, and the search process will also use an algorithm that can efficiently find the desired item, such as a binary search algorithm!',
  },
  {
    role: 'tutee',
    message:
      'To sum up what you said, binary search algorithms could be used in e-books too! I understood that even in the case of e-books, there was a high possibility that an algorithm that could efficiently search was used.',
  },
]

export const SAMPLE_FEEDBACK1 = [
  {
    index: 6,
    pattern: 'Commanding',
    selected: 0,
  },
  {
    index: 12,
    pattern: 'None',
    selected: -1,
  },
  {
    index: 18,
    pattern: 'None',
    selected: -1,
  },
]
