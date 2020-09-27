window.onload = addListeners();

function addListeners() {
  let showPushRange = document.getElementById("push-range-btn");
  let showCallRange = document.getElementById("call-range-btn");
  showPushRange.addEventListener("click", togglePushRange)
  showCallRange.addEventListener("click", toggleCallRange)
}

function toggleCallRange() {
  let callTable = document.getElementById("bloch_call_hidden");
  callTable.classList.toggle("hidden")
  console.log(callTable.classList)
}

function togglePushRange() {
  let pushTable = document.getElementById("bloch_jam_hidden");
  pushTable.classList.toggle("hidden")
  console.log(pushTable.classList)
}

