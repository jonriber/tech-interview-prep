# Time Complexity Theory

This is how a software engineer can dimension and handle time complexity on software.

## What is Time complexity or Big O Notation

Time complexity describes how the running time of an algorithm grows relative to the input size (n). It helps you 
compare the efficiency of algorithms.

Example:

```python
def print_items(n):
  for i in range(n):
    print(i)
```

- For n = 10, it prints 10 times.
- For n = 1,000,000, it prints 1 million times.
- This is O(n) → `linear time`.

## Common Big O Notations

| Notation   | Name             | Example Use Case                 | Performance            |
| ---------- | ---------------- | -------------------------------- | ---------------------- |
| O(1)       | Constant time    | Accessing an array by index      | ✅ Best                 |
| O(log n)   | Logarithmic time | Binary search                    | 🔍 Fast                |
| O(n)       | Linear time      | Loop through array               | 📏 Scales with input   |
| O(n log n) | Linearithmic     | Merge sort, quicksort (avg)      | ⚖️ Balanced            |
| O(n²)      | Quadratic time   | Nested loops                     | 🐢 Slow for big inputs |
| O(2ⁿ)      | Exponential time | Recursive Fibonacci              | 🔥 Very slow           |
| O(n!)      | Factorial time   | Solving permutations/brute-force | 🚫 Impractical         |


## Core Principles to understand

### Drop Constants

- O(2n) → O(n)
- Constants don't matter in Big O.

### Drop Lower Terms

- O(n + log n) → O(n)

### Worst Case vs. Average Case

- Usually, worst-case is measured unless specified otherwise.

### Space complexity

- Similar to time, but describes memory usage.


## Practical Examples

O(1) - Constant Time
```python
def get_first(arr):
  return arr[0]
```

O(n) - Linear Time
```python
def print_all(arr):
  for item in arr:
    print(item)
```

O(n²) - Quadratic Time
```python
def print_pairs(arr):
  for i in arr:
    for j in arr:
      print(i, j)

```