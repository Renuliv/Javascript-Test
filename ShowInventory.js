
function showInventory() {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET","https://github.com/Renuliv/Javascript-Test/new/master/Rosethorne.json",false);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4) {
          if (rawFile.status === 200 || rawFile.status == 0) {
              var allText = rawFile.responseText;
              alert(allText);
          }
      }
  }
}

