Instructions:

1)Add an id consoleForm to the HTML form element
2)Add the ids requestUrl and responseStatus to the HTML input elements
3)Add an id requestUrlErrMsg to the HTML p element with the class name error-msg
4)Add an id requestMethod to the HTML select element
5)Add the ids requestBody and responseBody to the HTML textarea elements respectively

Achieve the given functionality to the given prefilled code.

a)When the HTML form element with the id consoleForm is submitted,
b)If the values of the HTML input element with the id requestUrl is empty the HTML paragraph element with the id requestUrlErrMsg should have Required* error message. Otherwise, it should have empty.
Set the value entered in the HTML textarea element with the id requestBody as the value for HTTP request body.
c)If the value of the requestMethod element is POST,
Make HTTP Request (POST method) using fetch using the value of the HTML input element as URL.
d)If the value of the requestMethod element is PUT,
Make HTTP Request (PUT method) using fetch using the value of the HTML input element as URL.
e)Set response status (status code) in the HTML input element with the id responseStatus.
d)Set HTTP response body in the HTML textarea element with the id responseBody as shown in the image.  
