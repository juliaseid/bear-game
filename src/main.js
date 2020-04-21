import $ from 'jquery';
// import './bootstrap.css';
// import './styles.css';

$(document).ready(function() {

  let request = new XMLHttpRequest();
  const url = "https://api.giphy.com/v1/gifs/VFZLRogThp41j9eepR?api_key=XR1V7LGX2hQhJ6qJH1QPZR1RFulM2Mc8";

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      getElements(response);
    }
  }

  request.open("GET", url, true);
  request.send();

  const getElements = function(response) {
    $("#sleep").append("<a href= ")
  }

});

fetch('https://api.giphy.com/v1/gifs')
.then(response => response.json())
.then(data => {
 console.log(data) // Prints result from `response.json()` in getRequest
  Object.keys(data).forEach((key) => {
    var ele = document.createElement("span");
    var img = document.createElement("img");
    img.setAttribute("src", VFZLRogThp41j9eepR[XR1V7LGX2hQhJ6qJH1QPZR1RFulM2Mc8]);
    ele.appendChild(img);
    //append ele to parent div
  });
})
.catch(error => console.error(error))