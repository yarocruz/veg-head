# veg-head

Web App for Veg Heads

## User Experience

When a user loads the webpage they are greeted with a screen with 2 buttons each linking to their respective search functions.

![splash screen](https://user-images.githubusercontent.com/58165715/74590905-f0d54a00-4fe0-11ea-98be-8b1e2033815f.png)

The first search function allows a user to recieve vegan and vegetarian recipes based on the user inputed ingredient. The results
are displayed in cards that include an image, as well as, a list of included ingredients, and a link to the recipe itself.

![recui](https://user-images.githubusercontent.com/58165715/74590941-53c6e100-4fe1-11ea-921e-61fdc6b592de.png)

The second search function similarly allows the user to search for vegan and vegetarian restaraunts, either based on their
current location, or a user entered location. The search results are returned in cards identical to those of the recipe search
function, however, they contain an image, the address, phone number, customer rating, operating hours, and a link to the menu. 

![resui](https://user-images.githubusercontent.com/58165715/74590928-2f6b0480-4fe1-11ea-890f-a876c7366df9.png)

The restaraunt search function also returns a map of the area and populates said map with markers respective to the results.

## Structure

The web application is built using a total of 5 apis. Edamam; for returning recipe data, Zomato; for returning restaraunt data,
open weather map; for returning the coordinates of a user inputed location, google map api; to create a map for restaraunt search,
and finally the native geolocation api to return the users location.

The restaraunt search initially asks the user if they would like to share their location. If the user says yes, their current
latitude and longitude will be used to generate the search results. 

![1](https://user-images.githubusercontent.com/58165715/74590647-38a6a200-4fde-11ea-8723-7beccc3e44f2.PNG)

If a user says no, they then can enter a location in to the search bar. If a location is entered in to the search box the script 
thencalls the open weather map api to return the latitude and longitude of the entered city.

![2](https://user-images.githubusercontent.com/58165715/74590688-6855aa00-4fde-11ea-9ff8-3108952f315c.PNG)

Those coordinates are then used in the search function to return the results. When any search is made the cards generated based on 
the results from the zomato api.

![3](https://user-images.githubusercontent.com/58165715/74590732-00ec2a00-4fdf-11ea-841a-e758dbf95840.PNG)

The recipe search works similarly returning recipes using the edamam api and populating the results in cards.

### Installation
No installation necessary. The program is ready to run.

https://yarocruz.github.io/veg-head/


#### Authors
Yarosky Cruz
<br>
Alexander Delgado
<br>
Michael Mendoza
<br>
Anthony Colindres
