import { Chat } from '@/app/demo/teachyou/hook/usePipeline'

export const SAMPLE2: Chat[] = [
  {
    role: 'tutee',
    message: 'Hi! Could you please teach me about binary search?',
  },
  {
    role: 'tutor',
    message: 'First of all, how much do you know about binary search?',
  },
  {
    role: 'tutee',
    message: "I don't know much about binary search.",
  },
  {
    role: 'tutor',
    message: 'Do you know what binary search is for?',
  },
  {
    role: 'tutee',
    message: "I'm not sure about the purpose of binary search.",
  },
  {
    role: 'tutor',
    message: 'So, let me first explain what binary search is.',
  },
  {
    role: 'tutee',
    message:
      'Could you explain what the purpose of binary search is and under what circumstances it is better to use it?',
  },
  {
    role: 'tutor',
    message:
      'When there is a list, there are many ways to search for the item you want in it. For example, through a method called linear search, you check each item from the beginning of the list to see if it is the same as the desired item. However, this method is not efficient. Do you think you know why?',
  },
  {
    role: 'tutee',
    message:
      'To summarize, binary search is one of the ways to search for a desired item in a list, and is it more efficient than other methods?',
  },
  {
    role: 'tutor',
    message:
      "That's right, in the case of the linear search I mentioned earlier, if I want to find '3' and the list is given as [1, 2, 3], I have to search all the items in the list to find '3'. Binary search is one of the search methods to avoid this inefficiency.",
  },
  {
    role: 'tutee',
    message:
      'I understood that binary search is a more efficient method than linear search. Linear search requires searching all items, but binary search does not require that. I wrote the code below. Can you check if it is correct?\n```python\ndef solution(cards, number):\n  min = 0\n  max = len(cards) - 1\n  while min <= max:\n    guess = (min + max) // 2\n    if cards[guess] == number:\n      return True\n```',
  },
  {
    role: 'tutor',
    message:
      "Yes, in the worst case linear search needs to search all the items, but binary search doesn't need to do that even in the worst case.\nOkay, I think you understand the basic idea of binary search, which is searching the list in half. However, the code written by AlgoBo does not explain the case where cards[guess] does not match number after dividing the list in half. For example, what if cards[guess] is greater than number?",
  },
  {
    role: 'tutee',
    message:
      'I understood that binary search is a more efficient method than linear search. Linear search requires searching all items, but binary search does not require that. I wrote the code below, but it is missing processing for cases where cards[guess] does not match number. How should I fix this part?\n```python\ndef solution(cards, number):\n  min = 0\n  max = len(cards) - 1\n  while min <= max:\n    guess = (min + max) // 2\n    if cards[guess] == number:\n      return True\n```',
  },
  {
    role: 'tutor',
    message:
      'If the list is divided in half and the item is in the middle is larger than the number you want to search for, should you search for the part of the halved list where items smaller than cards[guess]? Or larger?',
  },
  {
    role: 'tutee',
    message:
      'cards[guess]가 number보다 큰 경우에는 어떤 부분을 탐색해야 할까요? 그리고 그 반대의 경우에는 어떻게 처리해야 할까요?',
  },
  {
    role: 'tutor',
    message:
      'cards[guess]가 number보다 크다면, number는 cards[guess]보다 작은 값들이 모여있는 곳에 있어야겠죠? 그러면, 다음 iteration에서 탐색해야 하는 리스트를 min에서 cards[guess] 바로 전 항목까지로 줄여줘야겠네요. 그러면 min 값은 변화가 없고, max 값을 guess-1로 바꿔준 다음 다음 iteration으로 들어가면 되겠죠? 한 번 코드를 짜 볼래요?',
  },
  {
    role: 'tutee',
    message:
      '말씀을 요약하자면 cards[guess]가 number보다 큰 경우에는 number가 cards[guess]보다 작은 값들이 모여있는 곳에 있어야 한다고 하셨군요. 그러면 다음 iteration에서는 min 값은 변화가 없고, max 값을 guess-1로 바꿔주면 되는 건가요? 이해했습니다.',
  },
  {
    role: 'tutor',
    message: '맞아요, 그렇다면 반대로 cards[guess]가 number보다 작은 경우에는 min과 max 값을 어떻게 조정해줘야 할까요?',
  },
  {
    role: 'tutee',
    message:
      '이진 탐색은 리스트를 반으로 나눠서 효율적으로 탐색하는 방법이죠. 그런데 cards[guess]가 number보다 작은 경우에는 어떻게 처리해야 할지 모르겠어요. 아래처럼 코드를 작성해봤는데, 이 부분에 대한 처리가 필요한 것 같아요.\n```python\ndef solution(cards, number):\n  min = 0\n  max = len(cards) - 1\n  while min <= max:\n    guess = (min + max) // 2\n    if cards[guess] == number:\n      return True\n```',
  },
  {
    role: 'tutor',
    message:
      'cards[guess]가 number보다 작다면, number는 cards[guess]보다 큰 값들이 모여있는 곳에 있어야겠죠? 그러면, 다음 iteration에서 탐색해야 하는 리스트를 cards[guess] 바로 다음 항목에서 max까지로 줄여줘야겠네요. 그러면 max 값은 변화가 없고, min 값을 guess+1로 바꿔준 다음 다음 iteration으로 들어가면 되겠죠?',
  },
  {
    role: 'tutee',
    message:
      '이진 탐색은 리스트를 반으로 나눠서 효율적으로 탐색하는 방법이에요. 그런데 cards[guess]가 number보다 작은 경우에는 min 값을 guess+1로 바꿔주면 되는 거군요. 그래서 아래처럼 코드를 수정해봤어요.\n```python\ndef solution(cards, number):\n  min = 0\n  max = len(cards) - 1\n  while min <= max:\n    guess = (min + max) // 2\n    if cards[guess] == number:\n      return True\n    elif cards[guess] < number:\n      min = guess + 1\n```',
  },
  {
    role: 'tutor',
    message:
      '잘 수정했어요, 이제 cards[guess]가 number보다 큰 경우에 어떻게 해야하는 지를 구현하면 되겠네요. 한 번 해볼래요?',
  },
  {
    role: 'tutee',
    message: 'cards[guess]가 number보다 큰 경우에는 어떻게 처리해야 할까요?',
  },
  {
    role: 'tutor',
    message: '아까 cards[guess]가 number보다 큰 경우에 어떻게 해야하는지 이해했다고 하지 않았나요?',
  },
  {
    role: 'tutee',
    message:
      '말씀을 요약하자면, cards[guess]가 number보다 큰 경우에는 이전에 어떻게 처리했는지를 이해한 상태라고 말한 적이 있었나요? 이해했습니다.',
  },
  {
    role: 'tutor',
    message:
      'cards[guess]가 number보다 크다면, number는 cards[guess]보다 작은 값들이 모여있는 곳에 있어야겠죠? 그러면, 다음 iteration에서 탐색해야 하는 리스트를 min에서 cards[guess] 바로 전 항목까지로 줄여줘야겠네요. 그러면 min 값은 변화가 없고, max 값을 guess-1로 바꿔준 다음 다음 iteration으로 들어가면 되겠죠? 한 번 코드를 짜 볼래요?',
  },
  {
    role: 'tutee',
    message:
      '이진 탐색을 사용하면, cards[guess]가 number보다 큰 경우에는 탐색 범위를 min에서 cards[guess] 바로 전 항목까지로 줄이고, max 값을 guess-1로 바꿔줘야 한다는 것을 이해했습니다. 아래와 같이 코드를 작성해봤습니다.\n```python\ndef solution(cards, number):\n  min = 0\n  max = len(cards) - 1\n  while min <= max:\n    guess = (min + max) // 2\n    if cards[guess] == number:\n      return True\n    elif cards[guess] < number:\n      min = guess + 1\n    else:\n      max = guess - 1\n```',
  },
  {
    role: 'tutor',
    message: '좋아요, 그럼 코드를 완성하기 전에 한 번 이진탐색에 대해서 설명해볼래요?',
  },
  {
    role: 'tutee',
    message:
      '이진 탐색은 리스트에서 원하는 항목을 효율적으로 찾는 방법이에요. 선형 탐색과 달리, 이진 탐색은 리스트를 반으로 나눠서 탐색하므로 더 빠르게 원하는 값을 찾을 수 있어요. 중간값보다 찾고자 하는 값이 크면, 중간값 다음부터 최대값까지를 탐색 범위로 좁혀야 하고, 반대로 중간값이 찾는 값보다 크면, 최소값부터 중간값 전까지를 탐색 범위로 좁혀야 해요. 아래 코드를 참고해주세요.\n```python\ndef solution(cards, number):\n  min = 0\n  max = len(cards) - 1\n  while min <= max:\n    guess = (min + max) // 2\n    if cards[guess] == number:\n      return True\n    elif cards[guess] < number:\n      min = guess + 1\n    else:\n      max = guess - 1\n```',
  },
  {
    role: 'tutor',
    message:
      '좋아요, 하지만 그 코드는 number가 cards에 존재하지 않는 경우는 처리할 수 없어요. number가 cards에 존재하지 않을 때 False를 return 하도록 하려면 어떻게 해야할까요?',
  },
  {
    role: 'tutee',
    message: 'number가 cards에 존재하지 않을 때 False를 return 하려면 코드를 어떻게 수정해야 할까요?',
  },
  {
    role: 'tutor',
    message:
      'number가 cards에 존재하지 않는다면, max가 결국엔 min보다 작아지게 되어서 while 루프를 탈출할 거에요. 이 경우에 False라는 return을 얻고 싶다면, while 구문 밖에 return False를 써 주면 되겠죠?',
  },
  {
    role: 'tutee',
    message:
      '말씀을 요약하자면 number가 cards에 존재하지 않는 경우에는 while 루프를 탈출하고 return False를 해야한다는 말이신가요? 이해했습니다.',
  },
  {
    role: 'tutor',
    message: '맞아요, 그럼 코드를 짜 볼까요?',
  },
  {
    role: 'tutee',
    message:
      '이진 탐색을 이용해서 코드를 작성해보면 이렇게 될 것 같아요.\n```python\ndef solution(cards, number):\n  min = 0\n  max = len(cards) - 1\n  while min <= max:\n    guess = (min + max) // 2\n    if cards[guess] == number:\n      return True\n    elif cards[guess] < number:\n      min = guess + 1\n    else:\n      max = guess - 1\n  return False\n```\n이진 탐색은 리스트를 반으로 나눠서 탐색하고, 탐색 대상이 중간값보다 클 경우, 탐색 범위를 중간값의 다음 항목부터 최대값까지로 줄이는 방식이에요. 그리고 number가 cards에 없으면 while 루프를 탈출하고 False를 반환하게 됩니다.',
  },
  {
    role: 'tutor',
    message: '좋아요, 그러면 이 코드로 문제를 한 번 풀어볼까요?',
  },
  {
    role: 'tutee',
    message:
      '이진 탐색은 리스트를 반으로 나눠서 원하는 항목을 찾는 효율적인 방법이에요. 선형 탐색과 달리 모든 항목을 탐색하지 않아도 되고, 탐색 범위를 줄여나가는 방식이죠. 만약 찾는 값이 중간값보다 크다면, 중간값 다음부터 최대값까지 탐색하고, 반대로 찾는 값이 중간값보다 작다면, 최소값부터 중간값 전까지 탐색해요. 그리고 찾는 값이 리스트에 없다면 False를 반환하게 됩니다. 이런 방식으로 코드를 작성해봤어요.\n```python\ndef solution(cards, number):\n  min = 0\n  max = len(cards) - 1\n  while min <= max:\n    guess = (min + max) // 2\n    if cards[guess] == number:\n      return True\n    elif cards[guess] < number:\n      min = guess + 1\n    else:\n      max = guess - 1\n  return False\n```',
  },
  {
    role: 'tutor',
    message:
      '잘 풀었어요. 이진 탐색에 대해 잘 이해하고 있는 것 같네요. 이처럼 이진탐색은 리스트가 정렬되어 있을 때 효율적으로 탐색할 수 있는 방법 중 하나랍니다. 역으로 말하면, 정렬되어 있지 않은 리스트가 주어졌을 때는 이진 탐색을 활용하기 어려울 수도 있겠죠. 이런 성질을 고려해볼 때 실생활에서 이진 탐색을 제일 효율적으로 사용할 수 있는 경우는 어떤 게 있을까요?',
  },
  {
    role: 'tutee',
    message:
      '그런데 생각해보니, 이진 탐색은 정렬된 리스트에서만 사용할 수 있잖아요? 그럼 정렬되지 않은 데이터에서는 어떻게 빠르게 탐색할 수 있을까요? 이런 경우에는 해시 테이블을 사용하면 좋다고 들었는데, 해시 테이블에 대해 들어보셨나요?',
  },
  {
    role: 'tutor',
    message:
      '잘 알고 있군요, 아예 데이터를 해시 테이블 자료구조로 구현하게 되면, 주어진 값을 해시 함수를 단 한 번만 사용해서 탐색할 수 있죠.',
  },
  {
    role: 'tutee',
    message:
      '말씀을 요약하자면, 이진 탐색은 정렬된 리스트에서만 사용할 수 있고, 정렬되지 않은 데이터에서는 해시 테이블을 사용하여 효율적으로 탐색할 수 있다는 말씀이시군요! 이해했습니다.',
  },
  {
    role: 'tutor',
    message:
      '좋아요, 이와 같이 다양한 경우에 적용할 수 있는 다양한 탐색 알고리즘이 있답니다, 어떤 경우에는 효율적인 알고리즘이 어떤 조건에서는 비효율적일 수도 있고 이렇기 때문에, 주어진 조건에서 어떤 알고리즘을 사용해야 할 지 충분히 숙고해야 한답니다. 이진 탐색에 대해 배우느라 고생 많았어요.',
  },
]
