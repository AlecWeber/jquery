$(document).ready(function(){$("#submit").click(function(){var n=$('input[name="fName"]').val();$("ul").append("<li>"+n+'<button class="remove"></button></li>'),$('input[name="fName"]').val("")}),$(document).on("click","li",function(){$(this).remove()}),$("#clear").click(function(){$("ul").empty()})});