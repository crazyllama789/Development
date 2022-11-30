# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application
The goal of this application is to create a webiste so zookeepers can order animals for their zoo online. They can purchase multiple animals of their choice and sort through the highest to lowest prices, the location where the animal is found, and if the animal is a herbivore, carnivore, or omnivore. 

### Usability Principles Considered
There are multiple usability principles to consider. You can sort the list of animals from low to high price, high to low price, and revert back to the original price. You can also sort based off of carnivore, omnivore, and herbivore. 
You can also sort based off of the location that the animal is native too. This can be done in any order, and you can 
reset to the original layout by hitting the reset button.  

### Organization of Components
There is a cart component to keep track of the cart, there is a filter component to filter the different animals based off of price, type, and location. There is the home component to layout the homepage for the animals and the different tiles, and there is the product component that is used to layout what is on each individual animal tile. 

### How Data is Passed Down Through Components
The cart and filter uses elements from the products component, each of the individual animals are either added to the cart or sorted. The cart and products compnent also interact because they both have the same cart state passed into them, so the cart can be updated based off of price and items in it as users add and remove items.

### How the User Triggers State Changes
The user can trigger state changes by adding and removing animals from the cart. When a user adds animals to the cart the state representing the total price changes and the list of animals also changes. It either decreases or increases the price or adds or removes animals. 

