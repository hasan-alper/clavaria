function update_dashboard(result) {
	$("#prediction").html(result);
	if (result == "Edible") {
		$("#prediction").css("color", "#02b57f");
		$("body").css("background-image", "linear-gradient(225deg, rgba(0, 245, 170, 1) 0%, rgba(146, 217, 197, 1) 20%, rgba(44, 183, 193, 1) 50%, rgba(20, 134, 166, 1) 100%)");
	} else {
		$("#prediction").css("color", "#cf132c");
		$("body").css("background-image", "linear-gradient(225deg, rgba(255, 192, 69, 1) 0%, rgba(255, 157, 89, 1) 20%, rgba(240, 134, 133, 1) 50%, rgba(242, 57, 55, 1) 100%)");
	}
}

function fetchdata() {
	$.getJSON({
		type: "GET",
		url: api_url,
		data: {
			"cap-shape": $("input[name='cap-shape']:checked").val(),
			"cap-surface": $("input[name='cap-surface']:checked").val(),
			"cap-color": $("input[name='cap-color']:checked").val(),
			"gill-spacing": $("input[name='gill-spacing']:checked").val(),
			"gill-color": $("input[name='gill-color']:checked").val(),
			"stalk-shape": $("input[name='stalk-shape']:checked").val(),
			"stalk-root": $("input[name='stalk-root']:checked").val(),
		},
		success: function (data) {
			update_dashboard(data.prediction);
		},
	});
}

$(document).on("change", function () {
	fetchdata();
});

fetchdata();
