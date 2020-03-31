
function showInventory() {
  alert("Hi!");
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET","Rosethorne.json",false);
  rawFile.send();
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

var rawFile = new XMLHttpRequest();
rawFile.open("GET","Rosethorne.json",false);
rawFile.send();
rawFile.onload = function() {
  if (rawFile.status != 200 {
      alert('Error ${rawFile.status}: ${rawFile.statusText}');
  } else {
    alert ('Done, got ${rawFile.response.length} bytes');
  }
};

rawFile.onprogress = function(event) {
  if (event.lengthComputable) {
    alert('Received ${event.loaded} of ${event.total} bytes');
  } else {
    alert('Received ${event.loaded} bytes');
  }
};

rawFile.onerror = function() {
  alert("Request failed");
};

