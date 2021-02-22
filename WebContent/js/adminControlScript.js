$(document).ready(function(){
	$("#pnlContentUpdate").hide();
});

$("#btnAddProduct").click(function(){
	$("#pnlContentAdd").show();
	$("#pnlContentUpdate").hide();
});

$("#btnUpdateProduct").click(function(){
	$("#pnlContentUpdate").show();
	$("#pnlContentAdd").hide();
});