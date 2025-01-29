const dataURI = 'data:text/html,<meta name="viewport" content="width=device-width, initial-scale=1" /><title>budget youtube</title><body style="margin:0"><iframe frameborder="0" allow="autoplay; fullscreen" allowfullscreen="1" style="width:100vw;height:100vh;display:none" title="YouTube video"></iframe><textarea rows="4" cols="42" placeholder="paste your link here" onkeydown="if(event.key!=\'Enter\'&&event.keyCode!=13)return;event.preventDefault();document.querySelector(\'button\').click()"></textarea><br><button onclick="const m=document.querySelector(%27textarea%27).value.match(/.*(?:youtu\\.be\\/|v\\/|u\\/\\w\\/|embed\\/|shorts\\/|watch\\?v=)([^%23\\&\\?]*).*/);const%20v=((m&&m[1].length==11)?m[1]:0);if(v){const%20f=document.querySelector(%27iframe%27);f.src=%27https://www.youtube-nocookie.com/embed/%27+v+%27?autoplay=1&rel=0%27;f.style.display=%27block%27}%22%3ELoad%20Video',
    tbox = document.querySelector("textarea"),
    load = document.querySelector("button"),
    stor = storageSupported();
var dark, s = 0;
if (stor && window.localStorage.getItem("dark")) dark = window.localStorage.getItem("dark") != "true";
else dark = "unset";
theme();

if (location.hash) {
  runVideo();
  setTimeout(_ => {scroll(0,document.querySelector("iframe").getBoundingClientRect().y)});
} else {
  tbox.focus();
  setTimeout(_ => s = 0);
}

window.onhashchange = runVideo;

tbox.addEventListener("keydown", function(e) {
  if (e.key == "Enter" || e.keyCode == 13) {
    e.preventDefault();
    const v = getID();
    if (v && '#' + v != location.hash) load.click();
  }
});
tbox.addEventListener("paste", _ => {setTimeout(_ => {
  const v = getID();
  if (v && '#' + v != location.hash) load.click();
})});

document.querySelectorAll("button").forEach(_=>_.addEventListener("click", function() {
  this.style.background="#0a2";
  setTimeout(_=>this.style.background = '', 217);
}));

function runVideo() {
  const pre = getID(), hash = location.hash.substring(1);
  if (pre != hash) tbox.value = hash[0] == '*' ? "https://youtube.com/playlist?list=PL" + hash.substr(1) : "https://youtu.be/" + hash;
  const iframe = document.querySelector("iframe");
  if (hash[0] == '*') iframe.src = "https://www.youtube-nocookie.com/embed?listType=playlist&autoplay=1&rel=0&list=PL" + hash.substr(1);
  else iframe.src = "https://www.youtube-nocookie.com/embed/" + hash + "?autoplay=1&rel=0";
  iframe.style.display = "block";
  document.querySelector("span").style.display = document.querySelector("hr").style.display = "none";
}

function getID() {
  const match = tbox.value.match(/.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|bu?d?tu?(?:be)?\.glitch\.me.*#)([^#\&\?]*).*/);
  if (match && match[1].length == 11) return match[1];
  const list = tbox.value.match(/.*(?:list=PL|view_play_list\?p=)([a-zA-Z0-9-_]*).*/);
  return list ? '*' + list[1] : false;
}

function theme() {
  if (dark == "unset") dark = getComputedStyle(document.body).borderStyle == "solid";
  else dark = !dark;
  if (dark) document.body.id = "dark";
  else document.body.id = "light";
  if (stor) window.localStorage.setItem("dark", dark);
}

function storageSupported() { // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  var stg_;
  try {
    stg_ = window.localStorage;
    var x = "__test__";
    stg_.setItem(x, x);
    stg_.removeItem(x);
    return true;
  } catch(e) {
    return e instanceof DOMException && (
      e.code === 22 ||
      e.code === 1014 ||
      e.name === "QuotaExceededError" ||
      e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      (stg_ && stg_.length !== 0);
  }
}



function copy(text) { // https://stackoverflow.com/a/30810322
  if (!navigator.clipboard) {
    fallbackCopy(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log(`Async: Copied "${text}" to clipboard`);
  }, function(err) {
    console.error("Async: Could not copy text: ", err);
    fallbackCopy(text);
  });
}

function fallbackCopy(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand("copy");
    const msg = successful ? "successful" : "unsuccessful";
    console.log(`Fallback: Copying "${text}" to clipboard was ` + msg);
  } catch (err) {
    console.error("Fallback: Could not copy text: ", err)
  }

  document.body.removeChild(textArea);
}
</html>
