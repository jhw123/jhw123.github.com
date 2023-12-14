export const Problems = [
  `How is a given data set divided in a merge sort algorithm?

A) The data set is recursively divided into two equal (or nearly equal) halves until only individual elements remain.
B) The data set is divided into two parts based on the pivot element.
C) The data set is divided into sorted and unsorted parts.
D) The data set is divided into sequences of pairs.
  `.trim(),
  `In a Python implementation of merge sort, what should replace ____ to correctly merge the sorted halves of a list?

\`\`\`python
def merge_sort(lst):
    if len(lst) <= 1:
        return lst

    mid = len(lst) // 2
    left = merge_sort(lst[:mid])
    right = merge_sort(lst[mid:])

    return ____
\`\`\`

A) merge(left, right)
B) merge(lst[:mid], lst[mid:])
C) merge(mid)
D) merge(lst)
`.trim(),
  `What are the notable advantages of merge sort over other comparison-based sorting algorithms such as quicksort or heapsort?

A) Merge sort does not require any additional space.
B) Merge sort always performs in O(n log n) time, regardless of the initial order of the inputs.
C) Merge sort works with a time complexity of O(n).
D) Merge sort is an in-place sorting algorithm.
  `.trim(),
]
