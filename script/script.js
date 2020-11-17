/*
Project02 Giphy API

script.js

*/
    
    // declare variables
    var basestring="https://api.giphy.com/v1/gifs/search?q=" ;
    var searchstring= "" ;
    var apikey="&api_key=dc6zaTOxFJmzC" ;
    var searchnum="&limit=10" ;
    var finalString=""   ;
    
    $(document).ready(function() {
     	
    $("#getsearch").click(function() {
    	searchstring=$("#searchbox").val() ; 

    	finalString= basestring+searchstring+apikey+searchnum ; 

        console.log(finalString) ; 
    
    
    // submit api query request
    $.get(finalString, 
    function(giphResponse) {       
    
    // .each reads through each array element
    // this["url"]     reads giphy data array URL field
    $.each(giphResponse.data, function() {
        $("#imgcont").append( this["url"] + "<br>" );   
    });
    });
	
	

	});
    });
