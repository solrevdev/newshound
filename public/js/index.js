$(function() {
   $.post( "/feeds", function( data ) {
      console.log(data);
      $( ".feed" ).html( data );
  });
});



 
      