const { MaxHeap } = require('./max-heap');

test('initializes an empty max heap', () => {
  const heap = new MaxHeap()
  expect(heap.isEmpty()).toBe(true);
});

test('initializes a max heap with a value', () => {
  const heap = new MaxHeap(1)
  expect(heap.getMax()).toBe(1);
});

test('can insert into the heap', () => {
  const heap = new MaxHeap()

  heap.insert(5);
  heap.insert(3);
  heap.insert(17);
  heap.insert(10);
  heap.insert(84);
  heap.insert(19);
  heap.insert(6);
  heap.insert(22);
  heap.insert(9);
  
  expect(heap.getMax()).toBe(84);
  expect(heap.heap).toEqual([84, 22, 19, 17, 10, 5, 6, 3, 9]);
});

test('can extract max from the heap', () => {
  const heap = new MaxHeap()

  heap.insert(5);
  heap.insert(3);
  heap.insert(17);
  heap.insert(10);
  heap.insert(84);
  heap.insert(19);
  heap.insert(6);
  heap.insert(22);
  heap.insert(9);

  const max = heap.extractMax();
  
  expect(max).toBe(84);
  expect(heap.heap).toEqual([22, 17, 19, 9, 10, 5, 6, 3]);
});

test('can remove from the heap', () => {
  const heap = new MaxHeap()

  heap.insert(5);
  heap.insert(3);
  heap.insert(17);
  heap.insert(10);
  heap.insert(84);
  heap.insert(19);
  heap.insert(6);
  heap.insert(22);
  heap.insert(9);

  heap.remove(19);
  
  expect(heap.getMax()).toBe(84);
  expect(heap.heap).toEqual([84, 22, 9, 17, 10, 5, 6, 3]);
});

test('can sort an array using heap sort', () => {
  const heap = new MaxHeap()
  const sortedArray = heap.heapSort([6, 2, 7, 23, 8, 9, 11, 3, 5]);

  expect(sortedArray).toEqual([2, 3, 5, 6, 7, 8, 9, 11, 23]);
});
  