window.addEventListener("load", init);

function init() {
  document.getElementById("map").innerHTML = "map";
  
  let map = L.map("map").setView([51.213487098383204, 4.25898036090494], 13);
  let marker = L.marker([51.213487098383204, 4.25898036090494]).addTo(map);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
}
