const message1 = document.getElementById('message-1');

const messages = [
  '読み込み中',
  '読み込み中.',
  '読み込み中..',
  '読み込み中...'
];

let i = 0;

function showMessage_1() {
  if (i == 4) {
    i = 0;
  }
  message1.textContent = messages[i];
  i++;
}

setInterval(showMessage_1, 2000);
