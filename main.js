var a = 1;

$(function(){

    // jQuery methods go here...
    $("#searchButton").click(function() {
        console.log("Clicked!");
        $.get("https://api.magicthegathering.io/v1/cards?page="+a, function(data, textStatus, request) {
            console.log(data);
            console.log(request.getAllResponseHeaders());
            a++;
        });
    }); 
 
 });