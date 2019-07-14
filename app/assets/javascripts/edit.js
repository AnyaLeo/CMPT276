$(document).ready(function(){
  var boardId = $(".boardId").attr("data-id");

  //add user
  $('#emailInput').click(function(){
    var userEmail = $('input[name=userEmail]').val();
    console.log(userEmail);
    $('#pplForm').trigger("reset");
    $.ajax({
      url: "/boards/" + boardId + "/add_user",
      method: "put",
      data: { 'board_id': boardId,
              'user_email': userEmail },
      success: function(){
                console.log('success');
      }
    });
    location.reload();
  });

  //remove user
  $('.removeUser').click(function(e){
    var buttonId = $(this).attr('id');
    console.log(buttonId);
    var userId = buttonId.replace( /[^\d.]/g, '' );;
    console.log(userId);
    $.ajax({
      url: "/boards/" + boardId + "/remove_user",
      method: "put",
      data: { 'board_id': boardId,
              'user_id': userId },
      success: function(){
                console.log('success');
      }
    });
    location.reload();
  });
});
