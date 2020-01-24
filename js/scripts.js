function convertToBinary(int){

  if (int === 0 ){
    return int;
  } else if (int === 1) {
    return int;
  } else if (int === 2){
    return 10;
  } else if (int === 3){
    return 11;
  }

}

$(document).ready(function() {
  $("#translateForm").submit(function(event) {
    event.preventDefault();

    var input = parseInt($("#inputText").val());

    var output = convertToBinary(input);
    $("#output").text(`Conversion: ${output}`);
  })
})