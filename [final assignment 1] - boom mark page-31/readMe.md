Instructions:

1)The page should have HTML form element with id bookmarkForm

2)The HTML form element with id bookmarkForm should have HTML input elements with ids siteNameInput and siteUrlInput

3)The HTML form element with id bookmarkForm should have HTML button element with id submitBtn

4)Add HTML label elements for HTML input elements with ids siteNameInput and siteUrlInput

5)The HTML form element with id bookmarkForm should have HTML p elements with ids siteNameErrMsg and siteUrlErrMsg

6)The page should have HTML unordered list element with id bookmarksList

7)Each bookmark item should contain an HTML anchor element to navigate to the bookmarked site


By following the above instructions, achieve the given functionality.

1)When the HTML button element with the id submitBtn is clicked,

1a)If the values are provided in the HTML input elements with ids siteNameInput and siteUrlInput
  A new bookmark should be added to the bookmarksList as list item.
  
1b)If the siteNameInput value is empty,
  The HTML p element with id siteNameErrMsg should have error message
  
1c)If the siteUrlInput value is empty,
   The HTML p element with id siteUrlErrMsg should have error message
   
2)When the HTML a element consisting of the bookmarked site URL is clicked, the site should open in a new tab.

3)When the HTML input element with id siteNameInput is empty after changing the value inside the input
   The HTML p element with id siteNameErrMsg should have error message
   
4)When the HTML input element with id siteUrlInput is empty after changing the value inside the input
  The HTML p element with id siteUrlErrMsg should have error message
