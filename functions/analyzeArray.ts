function calcAverage(arr: number[]): number | undefined {
  if (arr.length === 0) {
    return undefined;
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }

  return sum / arr.length;
}

function findMin(arr: number[]): number | undefined {
  if (arr.length === 0) {
    return undefined;
  }

  let min = Number.MAX_SAFE_INTEGER;
  
  for (let i = 0; i < arr.length; i += 1) {
    min = Math.min(min, arr[i]);
  }

  return min;
}

function findMax(arr: number[]): number | undefined {
  if (arr.length === 0) {
    return undefined;
  }

  let max = Number.MIN_SAFE_INTEGER;
  
  for (let i = 0; i < arr.length; i += 1) {
    max = Math.max(max, arr[i]);
  }

  return max;
}

export default function (arr: number[]): {[property: string]: number | undefined} {
  return {
    average: calcAverage(arr),
    min: findMin(arr),
    max: findMax(arr),
    length: arr.length,
  };
}
