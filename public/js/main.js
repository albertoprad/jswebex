

var promises = [];
$("div[src]").each(function () {
	var dom = this,
	url = $(dom).attr('src');


	var defer = Q.defer();
	promises.push(defer.promise);

	$.get(url, function (res) {
		defer.resolve({
			response: res,
			dom: dom
		});
	});

	defer.promise.then(function () {
		console.log(url + ' terminado!');
	});
});

Q.all(promises).then(function () {
	$.each(promises, function (i, promise) {
		$(promise.dom).html(promise.response);
	});
});






var buttonPromises = [];
$("#buttonificador button").each(function () {
	var defer = Q.defer();

	$(this).click(function () {
		defer.resolve();
	});

	buttonPromises.push(defer.promise);
});

Q.all(buttonPromises).then(function () {
	alert("All button pressed");
});







