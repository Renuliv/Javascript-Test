
function showInventory() {
  alert("Hi!");
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET","Rosethorne.json",false);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4) {
          if (rawFile.status === 200 || rawFile.status == 0) {
              alert(rawFile.responseText);
          }
      }
  }
}

