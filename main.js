$(function(){
    // jQuery methods go here...
    $("#searchButton").click(function() {
        console.log("Clicked!");
	console.log($("#searchInput").val());
        $.get('getcards.php?name=' + $("#searchInput").val(), function(response){
		console.log(response);
	});
    }); 
 
 });
