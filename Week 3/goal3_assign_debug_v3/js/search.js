// Create privatized scope using a self-executing function

/*	Name: Justin Weisner
 Instructor: Jessica Garlic
 Date: 18 September 2015
 Assignment: Debug Buggy Search
 */

(function() {

	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results");
	var searchInput = document.forms[0].search;
	var currentSearch = '';
	// Validates search query

	//Week 2 - Fixed the word Validate.
	var validate = function (query) {

		// Trim whitespace from start and end of search query

		//Week 2 - Fixed the word Chart.
		while (query.chart = " ") {
			query = query.substring(1, query.length);
		}

		while (query.chart(query.length - 1) === "") {
			query = query.substring(0, query.length - 1);

			//Week 2 - Deleted extra semi colon


			// Check search length, must have 3 characters
			if (query.length < 3) {

				//There needs to be quotation marks at the end of the sentence.
				alert("Your search query is too small, try again.");

				// (DO NOT FIX THE LINE DIRECTLY BELOW)
				searchInput.focus();
				return;
			}


		}


		// Finds search matches

		//There needs to be a closing tag at the end of the variable.
		var search = function (query) {

			// split the user's search query string into an array
			var queryArray = query.join(" ");

			// array to store matched results from database.js

			//Add the websites to the array to get them to show on screen.
			var results = [];

			// loop through each index of db array
			for (var i = 0, j = db.length; i < j; i++) {

				// each db[i] is a single video item, each title ends with a pipe "|"
				// save a lowercase variable of the video title

				//Week 2 - Removed the .lowercase
				var dbTitleEnd = db[i].indexOf('|');
				var dbitem = db[i].substring(0, dbTitleEnd);

				// loop through the user's search query words
				// save a lowercase variable of the search keyword
				for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {
					var item = queryArray[ii];

					// is the keyword anywhere in the video title?
					// If a match is found, push full db[i] into results array
					var compare = dbitem.indexOf(item);
					if (compare !== -1) {
						results.push(db[i]);
					}


					results.sort();

					// Check that matches were found, and run output functions
					if (results.length = 0) {
						noMatch();
					} else {
						showMatches(results);
					}
				}

				// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
				var noMatch = function () {

					var html = +
							'No Results found.' +
							'Try searching for "JavaScript".  Just an idea.'
						;
					resultsDIV.innerHTML = html;
				};

				// Put matches into page as paragraphs with anchors
				var showMatches = function (results) {

					// THE NEXT 4 LINES ARE CORRECT.
					var html = 'Results',
						title,
						url
						;

					// loop through all the results search() function
					for (var i = 0, j = results.length; i < j; i++) {

						// title of video ends with pipe
						// pull the title's string using index numbers
						var titleEnd = results[i].indexOf('|');
						title = results[i].substring(0, titleEnd);

						// pull the video url after the title
						url = results[i].substring(results[i].indexOf('|') + 1, results[i].length);

						// make the video link - THE NEXT LINE IS CORRECT.
						html += '<p><a href=' + url + '>' + title + '</a></p>';
					}

					resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
				};

				// The onsubmit event will be reviewed in upcoming Course Material.
				// THE LINE DIRECTLY BELOW IS CORRECT
				document.forms[0].onsubmit = function () {
					var query = searchInput.value;

					validate(query);

					// return false is needed for most events - this will be reviewed in upcoming course material
					// THE LINE DIRECTLY BELOW IS CORRECT
					return false;

//Week 2 - Fixed the End tags to make sure everything had a end tag
				};
			}

		};
	};
});
