var findRandomRestaurant = {
    restaurant: "",
    findRestaurant: function() {
      var fillMyBelly = Math.random();
      if (fillMyBelly < 0.20) {
        this.restaurant = "Prejean's Cajun Restaurant";
      } else if (fillMyBelly < 0.40) {
        this.restaurant = "Billy's Boudin";
      } else if (fillMyBelly < 0.60) {
        this.restaurant = "Meche's Doughnuts";
      } else if (fillMyBelly < 0.80) {
        this.restaurant = "Tsunami Sushi";
      } else if (fillMyBelly < 1) {
        this.restaurant = "Central Pizza";
      } else {
        this.restaurant = "Spoonbill Watering Hole";
      }
    }
  }
  
  var myRestaurantButton = document.getElementById('restaurant');
  myRestaurantButton.addEventListener('click', function() {
    
    findRandomRestaurant.findRestaurant();
    document.getElementById("restaurantButton").innerHTML = findRandomRestaurant.restaurant;
  
});