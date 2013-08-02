$(function(){
	$("#searchForm").submit(function(event) {
 
	  /* stop form from submitting normally */
	  event.preventDefault();
	 console.log(event)
	  /* get some values from elements on the page: */
	  var $form = $( this ),
	      term = $form.find( 'input[name="s"]' ).val()
	      
	console.log(term)



	  /* Send the data using post */
	 // var posting = $.post( url, { s: term } );
	 
	  /* Put the results in a div */
	  // posting.done(function( data ) {
	  //   var content = $( data ).find( '#content' );
	  //   $( "#result" ).empty().append( content );
	  // });
	});

})