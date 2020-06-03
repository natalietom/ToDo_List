//check off specific todos with a click 
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){ //parent is the li to remove entire li
		$(this).remove(); //this refers to the li and not the span
	}); 
	event.stopPropagation(); //to stop event bubbling
});

$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		//contains text of todo from input
		let todoText = $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

//toggle add new to do input
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})