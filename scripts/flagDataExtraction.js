if (typeof jQuery === "undefined") throw new Error("Data Extraction requires jQuery")

var dataExtract = function() {
  $.ajax({
    url: "https://restcountries.eu/rest/v2/all?fields=name;latlng;capital",
    // Handle as Text
    dataType: "text",
    success: function(data) {
    // Parse JSON file
    var json = $.parseJSON(data);
    //Store data into a variable
    // Display Players
    console.log('dataExtract');
    dataInsert(json);
    }
  });
}

var dataInsert = function(json) {
  console.log('dataInsert');
  var length = Object.keys(json).length;
  var dataIns = "<ul>";

  for(var i=0;i<length;i++) {
    console.log(json[i].flag);
    dataIns += '<li><div class="box effect1">' + json[i].name +'<br/><img src=' + json[i].flag + ' alt=' + json[i].name +'><br/>' + json[i].latlng[0] + ', ' + json[i].latlng[1] + '<div class="overlay"><summary><h2>' + json[i].name + '</h2><h3>Capital: ' + json[i].capital +  '</h3><h3>Latitude: ' + json[i].latlng[0] + '</h3><h3>Longitute: ' + json[i].latlng[1] +'</summary></div></div></li>';
  }
  dataIns += '</ul>';
  $("#our-work").append(dataIns);

}
