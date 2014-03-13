$(function() {
   $.post( "/feeds", function(data) {
      console.log('success on ajax post : ' + data);
      $( ".feed" ).html(data);
  });
});



 
      