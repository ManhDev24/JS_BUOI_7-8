var array = [];
var arrayNguyenTo = [];
function add() {
  addArray(array, "input", "output");
}

function tongSoDuong() {
  var result = tinhTongSoDuong(array);
  document.querySelector(
    "#outputTongSoDuong"
  ).innerHTML = `<p>Tổng số dương : ${result}</p>`;
}

function soDuong() {
  var result = demSoDuong(array);
  document.querySelector(
    "#outputDemSoDuong"
  ).innerHTML = `<p> Số dương : ${result}</p>`;
}

function soNho() {
  var result = timSoNhoNhat(array);
  document.querySelector(
    "#outputsoNhoNhat"
  ).innerHTML = `<p> Số nhỏ nhất : ${result}</p>`;
}
function soDuongNho() {
  var result = timSoDuongNhoNhat(array);
  console.log("result: ", result);
  document.querySelector(
    "#soDuongNhoNhat"
  ).innerHTML = `<p> Số Dương nhỏ nhất : ${result}</p>`;
}

function soChanCuoiCung() {
  var result = timSoChanCuoiCung(array);
  document.querySelector(
    "#soChanCuoiCung"
  ).innerHTML = `<p> Số chẵn cuối cùng : ${result}</p>`;
}

function doiCho() {
  var index1 = document.querySelector("#inputIndex1").value * 1;
  var index2 = document.querySelector("#inputIndex2").value * 1;
  var arrayAfterSwap = doiChoHaiSo(array, index1, index2);
  document.querySelector(
    "#DoiCho"
  ).innerHTML = `<p> Sau khi đổi chỗ : ${arrayAfterSwap}</p>`;
}
function sapXep() {
  var result = sapXepTangDan(array);
  document.querySelector(
    "#sapXepTangDan"
  ).innerHTML = `<p> Sau khi sắp xếp : ${result}</p>`;
}
function timSoNguyenToDauTien() {
  var result = "";
  for (let index = 0; index < array.length; index++) {
    if (isPrimeNumber(array[index])) {
      result = array[index];
      break;
    }
  }
  document.querySelector(
    "#soNguyenToDauTien"
  ).innerHTML = `<p> Số nguyên tố đầu tiên : ${result}</p>`;
}

function addSoNguyen() {
  addArray(arrayNguyenTo, "inputFloat", "txtArrayFloat");
}
function demSoNguyen() {
  var count = 0;
  for (let index = 0; index < arrayNguyenTo.length; index++) {
    if (Number.isInteger(arrayNguyenTo[index])) {
      count++;
    }
  }
  document.querySelector(
    "#demSoNguyen"
  ).innerHTML = `<p> Số nguyên : ${count}</p>`;
}
function demSoAmDuong() {
  var soLuongSoAm = demSoAm(array);
  var soLuongSoDuong = demSoDuong(array);
  var result = "";
  if (soLuongSoAm > soLuongSoDuong) {
    result = `Số âm > số dương`;
  } else if (soLuongSoDuong > soLuongSoAm) {
    result = `Số dương > số âm`;
  } else {
    result = `số dương = số âm`;
  }
  document.querySelector("#demSoAmDuong").innerHTML = `<p>${result}</p>`;
}
