//1 showvalue 更新
function buttonClick(event) {
  showValueEl.setAttribute("value", messageArea.value);
  //   デバッグ
  
  console.log(messageArea.value);
  console.log(showValueEl.getAttribute("value"));
}

//   取得
const messageArea = document.getElementById("messageArea");
//   a-text 取得
const showValueEl = document.querySelector("#textMessages");
// a-text value 取得
//   inputvalue変更読み取り
const checkButton = document.getElementById('checkButton')
checkButton.addEventListener('click', buttonClick);

