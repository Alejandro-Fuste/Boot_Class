$(document).ready(function() {
	var topArticlesDiv = $('<div>');
	var searchBtn = $('<button>').addClass('searchBtn');
	var clearBtn = $('<button>').addClass('clearBtn');

	topArticlesDiv.append(searchBtn, clearBtn);
	console.log(topArticlesDiv);

	searchBtn.on('click', function() {
		console.log('click');
	});

	clearBtn.on('click', function() {
		console.log('click');
	});

	var query = 'elections';
	var pubYear = 2020;
	var apiKey = 'YBiFlWDUJkcEqMUWuxusrh6P0DQJRY9I';
	var queryUrl =
		'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + query + '&fq=' + pubYear + '&api-key=' + apiKey;

	$.ajax({
		url: queryUrl,
		Method: 'GET'
	}).then(function(response) {
		console.log(response);

		var docs = response.response.docs;

		var article = docs[0].headline.main;

		console.log(docs);
		console.log(article);
	});
});
