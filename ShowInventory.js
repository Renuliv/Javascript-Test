
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

