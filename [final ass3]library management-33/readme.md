The following instructions are required for the tests to pass.

Add an HTML input element with id searchInput inside an HTML container element

Add an HTML container element with id searchResults to display the search results from the HTTP response

By following the above instructions, achieve the given functionality.

1)When a value is provided in the HTML input element with id searchInput and Enter key is pressed,
Make an HTTP GET request to the Books URL with the query parameter title as the value of the searchInput element

2)Loader should be displayed using the Bootstrap component spinner while fetching the data

3) After the data is fetched successfully, display the search results in the searchResult element. If search results from HTTP response are:

3a)Empty, display "No results found" in the searchResults element

3b)Non-empty, append the result items to the HTML container element with id searchResults. Each result item should consist of:
3c)An HTML image element with src attribute value as the value of the key imageLink from HTTP response
3d)An HTML paragraph element with text content as the value of the key author from HTTP response

