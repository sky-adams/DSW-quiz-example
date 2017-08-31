$(document).ready(function() {
	$("#start").click(function() {
	$("#start").hide();
	$("#q1").show();
	$("#show1").show();
	});
	$("#show1").click(function() {
	$("#show1").hide();
	$("#a1").show();
	$("#next1").show();
	});

	$("#next1").click(function() {
	$("#next1").hide();
	$("#q1").hide();
	$("#a1").hide();
	$("#q2").show();
	$("#show2").show();
	});
	$("#show2").click(function() {
	$("#show2").hide();
	$("#a2").show();
	$("#next2").show();
	});

	$("#next2").click(function() {
	$("#next2").hide();
	$("#q2").hide();
	$("#a2").hide();
	$("#q3").show();
	$("#show3").show();
	});
	$("#show3").click(function() {
	$("#show3").hide();
	$("#a3").show();
	});
	});