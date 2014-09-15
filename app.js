$(document).ready(function() {
	// Functions
	function addItem() {
		$("ol").append("<li>" + $("input").val() + "<span class=\"right\">x</span></li>");
		$("ol li").last().on("click", checkItem);
		$(".right").on("click", removeItem);
		$("input").val("");
	}
	function removeItem() {
		event.stopPropagation();
		$(this).closest("li").remove();
	}
	function checkItem() {
		$(this).toggleClass("checked");
	}
	function handleInput() {
		var input = $("input").val();
		if(isNaN(input)){
			addItem();
		}
		else if(+input < 0){
			$("ol li:nth-child(" + (- +input).toString() + ")").remove();
		}
		else{
			$("ol li:nth-child(" + input + ")").toggleClass("checked");
		};
		$("input").val("");
		var btn = $(".btn");
		btn.removeClass("red");
		btn.removeClass("green");
		btn.addClass("blue");
		btn.text("Add");
	}
	
	// Click events
	$(".btn").on("click", handleInput);
	$(".right").on("click", removeItem);
	$("ol li").on("click", checkItem);

	// Key press events
	$("input").on("keyup", function(event) {
		if (event.which == 13){
			handleInput();
		}
		else{
			var input = $("input").val();
			var btn = $(".btn");
			if(isNaN(input) || !input){
				btn.removeClass("red");
				btn.removeClass("green");
				btn.addClass("blue");
				btn.text("Add");
			}
			else if (+input < 0){
				btn.addClass("red");
				btn.removeClass("green");
				btn.removeClass("blue");	
				btn.text("Remove");
			}
			else {
				btn.removeClass("red");
				btn.addClass("green");
				btn.removeClass("blue");
				btn.text("Check");
			};
			
		};

	});

});