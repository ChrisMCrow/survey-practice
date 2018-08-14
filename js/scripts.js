$(document).ready(function() {
  $("#submit1").click(function(event) {
    event.preventDefault();
    $(".response1").show()
    $("#afterwork_survey").show();

    $("input:checkbox[name=work-transportation]:checked").each(function() {
      var workTransportationMode = $(this).val();
      $("#answer1").append(workTransportationMode + "<br>");
    });
  });

  $('#submit2').click(function(event) {
    event.preventDefault();
    $(".response2").show();

    $("input:checkbox[name=after-transportation]:checked").each(function() {
      var afterworkTransportationMode = $(this).val();
      $("#answer2").append(afterworkTransportationMode + "<br>");
    });
  });
});
