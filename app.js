var colorList = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

$(document).ready(function() {
	$('body').css("background-color", "#77B1A9");
	$('body').css("color", "#77B1A9");
	$('button').css("background-color", "#77B1A9");
			
	$("#quote-button").on("click", function(){
		$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?", function(json) {
			$('#quote').animate({
      			opacity: 0
    		}, 500, function() {
      			$("#quote").html(json.quoteText);
      			$(this).animate({
        			opacity: 1
      			}, 500);
    		});		
			
			var author = json.quoteAuthor ? json.quoteAuthor : "Anon";
			$('#author').animate({
      			opacity: 0
    		}, 500, function() {
      			$("#author").html("-" + author);
      			$(this).animate({
        			opacity: 1
      			}, 500);
    		});
			
			var choice = Math.floor(Math.random() * colorList.length);
			
			$('body').css("background-color", colorList[choice]);
			$('body').css("color", colorList[choice]);
			$('button').css("background-color", colorList[choice]);
			
			$('#tweet').attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + json.quoteText + '" -' + author));
		});
	});
	$('#tweet').attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + $("#quote").text() + '" -' + $("#author").text()));
});