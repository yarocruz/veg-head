# veg-head

Web App for Veg Heads

## User Experience

When a user loads the webpage they are greeted with a screen with 2 buttons each linking to their respective search functions.
The first search function allows a user to recieve vegan and vegetarian recipes based on the user inputed ingredient. The results
are displayed in cards that include an image, as well as, a list of included ingredients, and a link to the recipe itself.

The second search function similarly allows the user to search for vegan and vegetarian restaraunts, either based on their
current location, or a user entered location. The search results are returned in cards identical to those of the recipe search
function, however, they contain an image, the address, phone number, customer rating, operating hours, and a link to the menu. 

The restaraunt search function also returns a map of the area and populates said map with markers respective to the results.

## Structure

The web application is built using a total of 5 apis. Edamam; for returning recipe data, Zomato; for returning restaraunt data,
open weather map; for returning the coordinates of a user inputed location, google map api; to create a map for restaraunt search,
and finally the native geolocation api to return the users location.

The restaraunt search initially asks the user if they would like to share their location. If the user says yes, their current
latitude and longitude will be used to generate the search results. 

![1](https://user-images.githubusercontent.com/58165715/74590647-38a6a200-4fde-11ea-8723-7beccc3e44f2.PNG)

If a user says no, they then can enter a location in to the search bar. If a location is entered in to the search box the script then
calls the open weather map api to return the latitude and longitude of the entered city. Those coordinates are then used in the search
function to return the results. 

When any search is made the google maps api is used to create and populate a map based on the results from the zomato api.

The recipe search works similarly returning recipes using the edamam api and populating the results in cards.
