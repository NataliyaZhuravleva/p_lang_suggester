// Business logic:


// User interface logic:

$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    
    const name = $("#name").val();
    const age = parseInt($("#age").val());
    const jokes = $("select#jokes").val();
    const cartoons = $("select#cartoons").val();
    const winMac = $("select#win_mac").val();
    const varDef = $("select#var_def").val();

    //for degugging
    console.log("name:" + name);
    console.log("age:" + age);
    console.log("jokes:" + jokes);
    console.log("cartoons:" + cartoons);
    console.log("winMac:" + winMac);
    console.log("varDef:" + varDef);

if ((name) && (age) && jokes != "choose" && cartoons !="choose" && winMac != "choose" && varDef !="choose"){
  $("#pascal").hide();
  $("#cPlus").hide();
  $("#jS").hide();
  $("#cSharp").hide();
  $('#python').hide();
    if (age >= 65) {
      $("#pascal").show();
    } else if (jokes === 'no') {
      $("#cPlus").show();
    } else if (cartoons === 'yes' || varDef === 'yes') {
      $("#jS").show();
    } else if (winMac === 'windows') {
      $("#cSharp").show();
    } else if (varDef === 'no') {
      $('#python').show();
    }
  } else $("#choose").show();


  });
});
