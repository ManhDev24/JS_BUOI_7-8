function addArray(arr, inputId, outputId) {
  var inputValue = document.getElementById(inputId).value * 1;
  arr.push(inputValue);
  document.getElementById(outputId).innerHTML = `<p>${arr}</p>`;
}

/**
 * Calculate the sum of all positive numbers in the given array.
 *
 * @param {Array} array - The input array to calculate the sum from.
 * @return {number} The sum of all positive numbers in the array.
 */
function tinhTongSoDuong(array) {
  var sum = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] >= 0) {
      sum += array[index];
    }
  }
  return sum;
}
function demSoDuong(array) {
  var count = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] >= 0) {
      count++;
    }
  }
  return count;
}
function timSoNhoNhat(array) {
  var min = Math.min(...array);
  return min;
}
function timSoDuongNhoNhat(array) {
  var number = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] >= 0) {
      number.push(array[index]);
    }
  }
  var min = Math.min(...number);
  return min;
}
function timSoChanCuoiCung(array) {
  for (let index = array.length - 1; index >= 0; index--) {
    if (array[index] % 2 == 0) {
      return array[index];
    }
  }
}
function doiChoHaiSo(array, index1, index2) {
  swapElements(array, index1, index2);
  return array;
}
function swapElements(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function sapXepTangDan(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}

function isPrimeNumber(number) {
  if (number <= 1) {
    return false;
  }
  for (let index = 2; index <= Math.sqrt(number); index++) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}

function demSoAm(array) {
  var count = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] < 0) {
      count++;
    }
  }
  return count;
}

function demSoDuong(array) {
  var count = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] >= 0) {
      count++;
    }
  }
  return count;
}
