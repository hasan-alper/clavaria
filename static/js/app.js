function update_dashboard(result) {
	$("#prediction").html(result);
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
