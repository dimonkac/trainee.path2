let arr = [
  [1, 2, 3, 2, 7, 2, 4, 5],
  [4, 5, 6, 8, 6, 1, 3, 7],
  [7, 8, 9, 4, 5, 9, 8, 6],
];
let arrSample = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [];
let result = [];
for (
  let i = 0;
  i <= arr[0].length, i <= arr[1].length, i <= arr[2].length;
  i++
) {
  arr2 = [].concat(
    arr[0].slice(i, i + 3),
    arr[1].slice(i, i + 3),
    arr[2].slice(i, i + 3)
  );
  console.log(arr2);
  arr2.sort();
  if (arr[0].length - i <= 2) {
    break;
  }
  if (arr2.join() == arrSample.join()) {
    result.push("true");
  } else {
    result.push("false");
  }
  console.log(result);
}

let a = document.getElementById("id");
a.innerText = `Result: [ ${result} ]`;
