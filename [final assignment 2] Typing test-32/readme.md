Instructions:

Add HTML container element with id speedTypingTest

Add HTML paragraph elements with id timer, quoteDisplay and result

Add HTML textarea element with id quoteInput

Add HTML button elements with id submitBtn and resetBtn

Add the Bootstrap component spinner


By following the above instructions, achieve the given functionality.

1)When the page is opened

 1a)Make a HTTP request to get a random quotation URL: https://apis.ccbp.in/random-quote
 
 1b)Display the random quotation in the HTML paragraph element with id quoteDisplay
 
 1c)Start the timer and display the time in seconds in the HTML paragraph element with id timer
 
2)When a value is entered in the HTML textarea element with id quoteInput and the HTML button element with id submitBtn is clicked

  2a)If the value entered in the HTML textarea element with id quoteInput is same as the quotation in the HTML paragraph element with id quoteDisplay.
  The timer should be stopped and a success message should be shown in the HTML paragraph element with id result
  
  2b)If the value entered in the HTML textarea element with id quoteInput does not match the quotation in the HTML paragraph element with id quoteDisplay.
  The timer should be running and an error message should be shown in the HTML paragraph element with id result
  
3)When the HTML button with id resetBtn is clicked

3a)Make a HTTP request to get a new random quotation

3b)Display the new random quotation in the HTML paragraph element with id quoteDisplay

3c)Reset the timer to 0 seconds and display the time in seconds in the HTML paragraph element with id timer

3d) Empty the HTML textarea element with id quoteInput

4)Add loading status with Bootstrap component spinner while making an HTTP request.



