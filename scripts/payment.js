
const nameP = document.querySelector('#name-input');
const phoneP = document.querySelector('#number-input');
const emailP = document.querySelector('#email-input');
// const divP = document.querySelector('');
// const disP = document.querySelector('');
const addrP = document.querySelector('#name-address');
const deliInsP = document.querySelector('#t-area');
// const paymentP = document.querySelector('');
const commentP = document.querySelector('#comments');

const cod = document.querySelector('.payBtn1');
const bkash = document.querySelector('.payBtn2');
const rocket = document.querySelector('.payBtn3');
const nagad = document.querySelector('.payBtn4');

const paymentMethInCon = JSON.parse(localStorage.getItem("paymentMethInConfirm"));

const paymentInfo = [
  "", "", "", "", "", "", "", "", ""

]




let payNum = paymentMethInCon;

if (payNum === 'Cash on Delivery') {
  cod.style.backgroundColor = '#58afd7';
  bkash.style.backgroundColor = 'transparent';
  rocket.style.backgroundColor = 'transparent';
  nagad.style.backgroundColor = 'transparent';
  payNum = 'Cash on Delivery';
  paymentInfo[5] = payNum;
}
if (payNum === 'Bkash') {
  bkash.style.backgroundColor = '#58afd7';
  cod.style.backgroundColor = 'transparent';
  rocket.style.backgroundColor = 'transparent';
  nagad.style.backgroundColor = 'transparent';
  payNum = 'Bkash';
  paymentInfo[5] = payNum;
}
if (payNum === 'Rocket') {
  rocket.style.backgroundColor = '#58afd7';
  bkash.style.backgroundColor = 'transparent';
  cod.style.backgroundColor = 'transparent';
  nagad.style.backgroundColor = 'transparent';
  payNum = 'Rocket';
  paymentInfo[5] = payNum;
}
if (payNum === "Nagad") {
  nagad.style.backgroundColor = '#58afd7';
  bkash.style.backgroundColor = 'transparent';
  rocket.style.backgroundColor = 'transparent';
  cod.style.backgroundColor = 'transparent';
  payNum = "Nagad";
  paymentInfo[5] = payNum;
}









function btnCod() {
  cod.style.backgroundColor = '#58afd7';
  bkash.style.backgroundColor = 'transparent';
  rocket.style.backgroundColor = 'transparent';
  nagad.style.backgroundColor = 'transparent';
  payNum = 'Cash on Delivery';
  paymentInfo[5] = payNum;
}
function btnBkash() {
  bkash.style.backgroundColor = '#58afd7';
  cod.style.backgroundColor = 'transparent';
  rocket.style.backgroundColor = 'transparent';
  nagad.style.backgroundColor = 'transparent';
  payNum = 'Bkash';
  paymentInfo[5] = payNum;
}
function btnRocket() {
  rocket.style.backgroundColor = '#58afd7';
  bkash.style.backgroundColor = 'transparent';
  cod.style.backgroundColor = 'transparent';
  nagad.style.backgroundColor = 'transparent';
  payNum = 'Rocket';
  paymentInfo[5] = payNum;
}
function btnNagad() {
  nagad.style.backgroundColor = '#58afd7';
  bkash.style.backgroundColor = 'transparent';
  rocket.style.backgroundColor = 'transparent';
  cod.style.backgroundColor = 'transparent';
  payNum = "Nagad";
  paymentInfo[5] = payNum;
}











// function selectedPayMent() {



//   paymentInfo[5] = payNum;



//   paymentInfo[0] = nameP.value;
//   paymentInfo[1] = phoneP.value;
//   paymentInfo[2] = emailP.value;
//   paymentInfo[3] = addrP.value;
//   paymentInfo[4] = deliInsP.value;
//   paymentInfo[6] = commentP.value;

// }
// selectedPayMent();

function onchangePayment() {


  paymentInfo[0] = nameP.value;
  paymentInfo[1] = phoneP.value;
  paymentInfo[2] = emailP.value;
  paymentInfo[3] = addrP.value;
  paymentInfo[4] = deliInsP.value;
  paymentInfo[5] = payNum;
  paymentInfo[6] = commentP.value;
}

function paymentToConfirm() {
  paymentInfo[0] = nameP.value;
  paymentInfo[1] = phoneP.value;
  paymentInfo[2] = emailP.value;
  paymentInfo[3] = addrP.value;
  paymentInfo[5] = payNum;
  paymentInfo[4] = deliInsP.value;
  paymentInfo[6] = commentP.value;

  localStorage.setItem("paymentInfo", JSON.stringify(paymentInfo));
  window.location = 'confirm.html';
}

