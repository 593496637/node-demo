const evtSource = new EventSource("http://localhost/sse/data.php", { withCredentials: true });
evtSource.onopen = function (params) {
  console.log('已连接', params);
}
evtSource.onmessage = function (event) {
  const newElement = document.createElement("li");
  const eventList = document.getElementById("list");

  newElement.innerHTML = "message: " + event.data;
  eventList.appendChild(newElement);
}

evtSource.onerror = function (params) {
  console.log('错误', params);
}