window.onload = addListeners();

function addListeners() {
  let showPushRange = document.getElementById("push-range-btn");
  let showCallRange = document.getElementById("call-range-btn");
  showPushRange.addEventListener("click", togglePushRange)
  showCallRange.addEventListener("click", toggleCallRange)
}

function toggleCallRange() {
  let pushTable = document.getElementById("bloch_jam_hidden");
  pushTable.classList.toggle("hidden")
}

function togglePushRange() {
  let callTable = document.getElementById("bloch_call_hidden");
  callTable.classList.toggle("hidden")
}

