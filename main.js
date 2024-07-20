// Ways To Get Data From API (Application Programming Interface)
// ====================================

// fetch

fetch("/json.json")
  .then((res) => res.json())
  .then((data) => console.log(data.myData));

// ====================================

// XMLHttpRequest

let req = new XMLHttpRequest();
req.onload = () => {
  console.log(JSON.parse(req.responseText).myData);
};
req.open("GET", "/json.json");
req.send();

// ====================================
