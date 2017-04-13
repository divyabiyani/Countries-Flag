if (typeof jQuery === "undefined") throw new Error("Data Extraction requires jQuery")

var dataExtract = function() {
  $.ajax({
    url: "https://restcountries.eu/rest/v2/all?fields=name;latlng;capital",
    // Handle as Text
    dataType: "json",
    success: function(data) {
    dataInsert(data);
    }
  });
}

var dataInsert = function(json) {
  var length = Object.keys(json).length;
  var dataIns = "<ul>";

  for(var i=0;i<length;i++) {
    dataIns += '<li><div class="box effect1"><strong>' + json[i].name.toUpperCase() +'</strong><br/><div class="image-effect"><img src=' + json[i].flag + '><br/></div>' + json[i].latlng[0] + ', ' + json[i].latlng[1] + '<div class="overlay"><summary><h2>' + json[i].name + '</h2><h3>Capital: ' + json[i].capital +  '</h3><h3>Latitude: ' + json[i].latlng[0] + '</h3><h3>Longitute: ' + json[i].latlng[1] +'</summary></div></div></li>';
  }
  dataIns += '</ul>';
  $("#our-work").append(dataIns);

}
