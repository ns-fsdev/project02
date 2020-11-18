/*
Project02 Giphy API
"script.js"



*/
    
    // declare Search String variables
    var basestring="https://api.giphy.com/v1/gifs/search?q=" ;
    var searchstring= "" ;
    var apikey="&api_key=4zv45wmD5vJvLn2UE3B4tNBY1ny9kZZV" ;
    var searchnum="&limit=10" ;
    var finalString=""   ;
    
    $(document).ready(function() {
     	
    $("#getsearch").click(function() {
    	searchstring=$("#searchbox").val() ; 

    	finalString= basestring+searchstring+apikey+searchnum ; 

        // console.log(finalString) ; 
    
    
    // submit api query request
    $.get(finalString, 
    function(giphResponse) {       
      
	//console.log(giphResponse.data);       // test to see API data
    
    // .each reads through each array element automatically 
    // giphResponse.data is  Giphy Array called "data" 
    // "this" reads giphResponse.data JSON
    //  this.images.original.url   -  Giphy JSON data path
    
	$.each(giphResponse.data, function() {
       

       imgUrl=this.images.original.url;
      
       imgUrlHtml=`<img src=${imgUrl} />`;
       
       $("#imgCont").append(imgUrlHtml);    
        
        
    
    });    
    
    });
	
	

	});  
    });  
