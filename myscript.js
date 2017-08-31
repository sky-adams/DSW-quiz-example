$(document).ready(function() {
	   $("#start").click(function() {
		$("#start").hide();
		$("#q1").show();
		$("#show1").show();
	    });
	   var q;
	   for(q = 1; q < 4; q++)
	   {
		$("#show" + q).on("click", {qnum: q}, showAnswer);
		$("#next" + q).on("click",{qnum: q}, function(event) {
			$("#next" + event.data.qnum).hide();
			$("#q" + event.data.qnum).hide();
			$("#a" + event.data.qnum).hide();
			$("#q" + (event.data.qnum + 1)).show();
			$("#show" + (event.data.qnum + 1)).show();
			});
	   }
});

function showAnswer(event) {
	debugger;
	$("#show" + event.data.qnum).hide();
	$("#a" + event.data.qnum).show();
	$("#next" + event.data.qnum).show();
}