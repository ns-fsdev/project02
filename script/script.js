/*
Project02 Giphy API
"script.js"



*/
    
    // declare Search String variables
    var basestring="https://api.giphy.com/v1/gifs/search?q=" ;
    var searchstring= "" ;
    var apikey="&api_key=4zv45wmD5vJvLn2UE3B4tNBY1ny9kZZV" ;
    var baseNum="&limit=";
    var searchNum="";
    var finalString="";
    
    $(document).ready(function() {
     	
    $("#getsearch").click(function() {

        //search text box
        searchstring=$("#searchbox").val() ; 

        // select box - number of searches
        searchNum=$("#selectBox").val() ;
        // console.log("SELECT BOX "+selectBoxNum);  
        
        
        

    	finalString= basestring+searchstring+apikey+baseNum+searchNum;
         
        
    
    
    // submit api query request
    $.get(finalString, 
    function(giphResponse) {       
      
	//console.log(giphResponse.data);       // test to see API data
    
    // .each reads through each array element automatically 
    // giphResponse.data is  Giphy JSON Array called "data" 
    // "this" reads giphResponse.data JSON
    //  this.images.original.url   -  Giphy JSON data path
      Allimgs=" ";                              // holds all image URLs

	$.each(giphResponse.data, function() {
       
       imgUrl=this.images.original.url;         // extract image URL from JSON
       
       imgUrlHtml=`<div class="imgGrid col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3" style="border:5px solid black;"> <img src=${imgUrl} class="img-fluid" /> </div>`;      // format URL to <div> <img src>  </div>

       Allimgs=Allimgs+imgUrlHtml;
    }); 
       
    $("#imgContRow").html(Allimgs);   
        
    });
	
	});  
    
    });  
