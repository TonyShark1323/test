$.getJSON('list.json', function(list) {
  var output="<div id=\"output\">";
  for (var i in list.data) {
      output+="<div class=\"cartile\" style=\"border-style: solid;border-width: 5px;\">";
      output+="<img class=\"img-fluid mb-4\" src=\"images/"+list.data[i].img+"\" alt=\"\">";
      output+="<table><thead><tr><th>" + list.data[i].manufacturer + " " + list.data[i].model + "</th></tr></thead><tbody></tbody></table>";
      
      output+="<li>"+ list.data[i].year +"</li>";
      output+="<li>"+ list.data[i].transmission +"</li>";
      output+="<li>"+ list.data[i].mileage +"</li>";
      
      output+="<a class=\"btn btn-primary px-3\" href=\"\"> $"+ list.data[i].price +"</a>";
      output+="</div>"
  }

  output+="</ul>";
  document.getElementById("carlist").innerHTML=output;
});
