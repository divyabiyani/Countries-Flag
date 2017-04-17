if (typeof jQuery === "undefined") throw new Error("Data Extraction requires jQuery")

var dataExtract = function() {
  $.ajax({
    url: "http://127.0.0.1:8000/things",
    dataType: "json",
    error: function (xhr, status) {
      console.log(status);
    },
    success: function(data) {
      dataInsert(data);
    }
  });
}

var dataInsert = function(json) {
  var length = Object.keys(json).length;
  var dataIns = "<ul>";

  for(var i=0;i<length;i++) {
    dataIns += '<li><div class="box effect1"><p id="name"><strong>' + json[i].name.toUpperCase() +'</strong></p><div class="image-effect"><img src=' + json[i].flag + '></div><p id="latlong">' + json[i].latlng[0] + ', ' + json[i].latlng[1] + '</p><div class="overlay"><summary><h2>' + json[i].name + '</h2><br/><h3>Capital: ' + json[i].capital +  '</h3><br/><h3>Latitude: ' + json[i].latlng[0] + '</h3><br/><h3>Longitute: ' + json[i].latlng[1] +'</summary></div></div></li>';
  }
  dataIns += '</ul>';
  $("#our-work").append(dataIns);

}
