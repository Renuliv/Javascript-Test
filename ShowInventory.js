
function showInventory() {
  alert("Hi!");
  var rawFile = new XMLHttpRequest();
  alert("Hi! .5");
  rawFile.open("GET","Rosethorne.json",false);
  alert("Hi! .8");
  rawFile.onreadystatechange = function() {
      alert("Hi! 1");
      if (rawFile.readyState === 4) {
          alert("Hi! 2");
          if (rawFile.status === 200 || rawFile.status == 0) {
              alert(rawFile.responseText);
          }
      }
  }
}

