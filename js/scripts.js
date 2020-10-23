// Business logic:



// User interface logic:

$(document).ready(function () {
  $("#formOne").submit(function(event){
  const name = $("#name").val();
  const age = parseInt($("#age").val());
  const jokes = $("select#jokes").val();
  const cartoons = $("select#cartoons").val();
  const winMac = $("select#win_mac").val();
  const varDef = $("select#var_def").val();
console.log("name:"+name);
console.log("age:"+age);
console.log("jokes:"+jokes);
console.log("cartoons:"+cartoons);
console.log("winMac:"+winMac);
console.log("varDef:"+varDef);

  event.preventDefault();
  });
});
