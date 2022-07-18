const sortArr = (arr) => {
  if (arr.length > 0) {
    const multiplyArr = arr.map((arg) => typeof arg === 'number' && arg * arg);
    return multiplyArr.sort((a, b) => a - b);
  }
};

describe('Get Arr sort des', () => {
  const arr1 = ['1', 2, 3, 5, 6, 8, 9, 'giosevis+d'];
  console.log(sortArr(arr1));
  //expect(sortArr(arr1)).toEqual([1, 4, 9, 25, 36, 64, 81]);
});

describe('Get Arr sort des', () => {
  const arr1 = [-2, -1];
  console.log(sortArr(arr1));
  //expect(sortArr(arr1)).toEqual([1, 4]);
});

describe('Get Arr sort des', () => {
  const arr1 = [-10, -5, 0, 5, 10];
  console.log(sortArr(arr1));
  //expect(sortArr(arr1)).toEqual([0, 25, 25, 100, 100]);
});
